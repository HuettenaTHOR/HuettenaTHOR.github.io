/* =========================================================
   DIVE — Local Session Storage & History  (api.js)
   Pure localStorage — no server required · GitHub-Pages ready
   ========================================================= */

const SESSIONS_KEY = 'dive_sessions';
const MAX_SESSIONS = 200; // keep last 200 sessions

// ─── Read / write helpers (Opera-safe) ─────────────────
function _loadSessions() {
  try {
    const raw = localStorage.getItem(SESSIONS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (_) { return []; }
}

function _saveSessions(arr) {
  try { localStorage.setItem(SESSIONS_KEY, JSON.stringify(arr)); } catch (_) {}
}

// ─── Save a completed session ──────────────────────────
function saveSession(data) {
  const sessions = _loadSessions();
  sessions.push({
    id:            Date.now(),
    exerciseType:  data.exerciseType,
    startTime:     data.startTime,
    endTime:       data.endTime,
    holdTimes:     data.holdTimes   || [],
    restTimes:     data.restTimes   || [],
    totalBreaths:  data.totalBreaths || 0,
    rounds:        data.rounds      || 0,
    totalRounds:   data.totalRounds || 0,
  });
  // Trim to MAX_SESSIONS
  while (sessions.length > MAX_SESSIONS) sessions.shift();
  _saveSessions(sessions);
}

// ─── Retrieve sessions (newest first) ──────────────────
function getSessions(limit = 20, type = null) {
  let sessions = _loadSessions();
  if (type) sessions = sessions.filter(s => s.exerciseType === type);
  sessions.sort((a, b) => b.startTime - a.startTime);
  return {
    sessions: sessions.slice(0, limit),
    total: sessions.length,
  };
}

// ─── Aggregated stats ──────────────────────────────────
function getStats() {
  const sessions = _loadSessions();
  if (!sessions.length) {
    return {
      overall: { total_sessions: 0, total_duration: 0, total_breaths: 0, total_rounds: 0 },
      byType: [],
      holdStats: null,
      streak: 0,
    };
  }

  let totalDuration = 0, totalBreaths = 0, totalRounds = 0;
  const byTypeMap = {};
  const allHolds = [];

  for (const s of sessions) {
    const dur = Math.round(((s.endTime || 0) - (s.startTime || 0)) / 1000);
    totalDuration += dur;
    totalBreaths += s.totalBreaths || 0;
    totalRounds += s.rounds || 0;

    if (!byTypeMap[s.exerciseType]) {
      byTypeMap[s.exerciseType] = { exercise_type: s.exerciseType, sessions: 0, total_duration: 0, total_rounds: 0, last_trained: 0 };
    }
    byTypeMap[s.exerciseType].sessions++;
    byTypeMap[s.exerciseType].total_duration += dur;
    byTypeMap[s.exerciseType].total_rounds += s.rounds || 0;
    byTypeMap[s.exerciseType].last_trained = Math.max(byTypeMap[s.exerciseType].last_trained, s.endTime || 0);

    if (s.holdTimes && s.holdTimes.length) allHolds.push(...s.holdTimes);
  }

  const byType = Object.values(byTypeMap).sort((a, b) => b.sessions - a.sessions);

  const holdStats = allHolds.length ? {
    count: allHolds.length,
    longest: Math.max(...allHolds),
    shortest: Math.min(...allHolds),
    average: Math.round(allHolds.reduce((a, b) => a + b, 0) / allHolds.length),
    total: allHolds.reduce((a, b) => a + b, 0),
  } : null;

  // Streak: consecutive days with at least one session
  const daySet = new Set(sessions.map(s => new Date(s.startTime).toISOString().slice(0, 10)));
  const days = [...daySet].sort().reverse();
  let streak = 0;
  if (days.length) {
    const today = new Date().toISOString().slice(0, 10);
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    if (days[0] === today || days[0] === yesterday) {
      streak = 1;
      for (let i = 1; i < days.length; i++) {
        const diff = (new Date(days[i - 1]) - new Date(days[i])) / 86400000;
        if (diff === 1) streak++;
        else break;
      }
    }
  }

  return {
    overall: { total_sessions: sessions.length, total_duration: totalDuration, total_breaths: totalBreaths, total_rounds: totalRounds },
    byType,
    holdStats,
    streak,
  };
}

// ─── History screen rendering ──────────────────────────
function showHistoryScreen() {
  const $historyContent = document.getElementById('historyContent');
  if (!$historyContent) return;

  const stats = getStats();
  const sessionsRes = getSessions(10);
  renderHistoryScreen(stats, sessionsRes);
  navigateTo('history');
}

function renderHistoryScreen(stats, sessionsRes) {
  const $historyContent = document.getElementById('historyContent');
  if (!$historyContent) return;

  const s = stats.overall;
  const exerciseNames = {
    interval: t('intervalTitle'),
    wimhof: t('wimhofTitle'),
    box: t('boxTitle'),
    '478': t('478Title'),
  };

  // Overview cards
  let overviewHTML = `
    <h2 class="stats-title">📊 ${t('historyTitle')}</h2>
    <p class="stats-subtitle">${t('historyOverview')}</p>
    <div class="stats-grid">
      ${_statCard(s.total_sessions, t('historyTotalSessions'))}
      ${_statCard(_fmtDur(s.total_duration), t('historyTotalTrainingTime'))}
      ${stats.streak ? _statCard(stats.streak + ' 🔥', t('historyStreak')) : ''}
      ${stats.holdStats ? _statCard(_fmtDur(stats.holdStats.longest), t('statsLongestHold')) : ''}
      ${stats.holdStats ? _statCard(_fmtDur(stats.holdStats.average), t('statsAvgHold')) : ''}
      ${stats.holdStats ? _statCard(stats.holdStats.count, t('historyTotalHolds')) : ''}
    </div>
  `;

  // Per-exercise breakdown
  if (stats.byType.length) {
    overviewHTML += `<h3 class="research-heading">${t('historyByExercise')}</h3>`;
    overviewHTML += `<div class="stats-grid">`;
    for (const ex of stats.byType) {
      overviewHTML += `
        <div class="stat-card">
          <div class="stat-value">${ex.sessions}</div>
          <div class="stat-label">${exerciseNames[ex.exercise_type] || ex.exercise_type}</div>
        </div>
      `;
    }
    overviewHTML += `</div>`;
  }

  // Recent sessions
  const sessions = sessionsRes.sessions || [];
  let recentHTML = '';
  if (sessions.length) {
    recentHTML = `<h3 class="research-heading">${t('historyRecentSessions')}</h3>`;
    recentHTML += `<div class="history-list">`;
    for (const sess of sessions) {
      const date = new Date(sess.startTime).toLocaleDateString(getLang(), {
        day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
      });
      const dur = Math.round((sess.endTime - sess.startTime) / 1000);
      const longestHold = sess.holdTimes && sess.holdTimes.length ? Math.max(...sess.holdTimes) : 0;

      recentHTML += `
        <div class="history-item">
          <div class="history-item-header">
            <span class="history-item-type">${exerciseNames[sess.exerciseType] || sess.exerciseType}</span>
            <span class="history-item-date">${date}</span>
          </div>
          <div class="history-item-stats">
            <span>⏱ ${_fmtDur(dur)}</span>
            <span>🔄 ${sess.rounds}/${sess.totalRounds}</span>
            ${longestHold ? `<span>🫁 ${_fmtDur(longestHold)}</span>` : ''}
          </div>
        </div>
      `;
    }
    recentHTML += `</div>`;

    if (sessionsRes.total > sessions.length) {
      recentHTML += `<p style="text-align:center;color:var(--text-dim);font-size:.85rem;margin-top:.5rem">
        ${t('historyShowing', sessions.length, sessionsRes.total)}
      </p>`;
    }
  } else {
    recentHTML = `<p style="text-align:center;color:var(--text-dim);margin-top:1.5rem">${t('historyNoSessions')}</p>`;
  }

  const backBtnHTML = `
    <button class="stats-home-btn" id="historyHomeBtn" style="margin-top:1.5rem">${t('statsBackHome')}</button>
  `;

  $historyContent.innerHTML = overviewHTML + recentHTML + backBtnHTML;
  document.getElementById('historyHomeBtn').addEventListener('click', () => navigateTo('home'));
}

function _statCard(value, label) {
  return `<div class="stat-card"><div class="stat-value">${value}</div><div class="stat-label">${label}</div></div>`;
}

function _fmtDur(totalSecs) {
  const m = Math.floor(totalSecs / 60);
  const s = Math.floor(totalSecs % 60);
  if (m > 0) return `${m}:${String(s).padStart(2, '0')} ${t('statsMin')}`;
  return `${s} ${t('statsSec')}`;
}
