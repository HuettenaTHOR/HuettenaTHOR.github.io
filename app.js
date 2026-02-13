/* =========================================================
   DIVE — Breathing & Breath-Hold Trainer  (app.js)
   Pure vanilla JS · no dependencies · GitHub-Pages ready
   ========================================================= */

// ─── DOM refs ───────────────────────────────────────────
const $home         = document.getElementById('home');
const $settings     = document.getElementById('settings');
const $exercise     = document.getElementById('exercise');
const $settingsBody = document.getElementById('settingsContent');
const $phaseLabel   = document.getElementById('phaseLabel');
const $timerText    = document.getElementById('timerText');
const $ringFg       = document.getElementById('ringFg');
const $roundLabel   = document.getElementById('roundLabel');
const $instrText    = document.getElementById('instructionText');
const $startPause   = document.getElementById('startPauseBtn');
const $stop         = document.getElementById('stopBtn');
const $toggleTimer  = document.getElementById('toggleTimerBtn');
const $eyeIcon      = document.getElementById('eyeIcon');
const $ringWrap     = document.querySelector('.timer-ring-wrap');

const CIRCUMFERENCE = 2 * Math.PI * 90;  // ring radius = 90
$ringFg.style.strokeDasharray = CIRCUMFERENCE;

// ─── State ──────────────────────────────────────────────
let currentExercise = null;   // 'interval' | 'wimhof' | 'box' | '478'
let timerVisible    = true;
let running         = false;
let paused          = false;
let rafId           = null;
let stepTimeout     = null;
let countdownInterval = null;

// ─── Audio helpers (short beeps via AudioContext) ───────
let audioCtx = null;
function getAudioCtx() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return audioCtx;
}
function beep(freq = 660, duration = 150, vol = 0.25) {
  try {
    const ctx = getAudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    osc.frequency.value = freq;
    gain.gain.value = vol;
    osc.start(); osc.stop(ctx.currentTime + duration / 1000);
  } catch (_) { /* silent fail */ }
}
function beepHigh()   { beep(880, 120); }
function beepLow()    { beep(440, 200); }
function beepDouble() { beep(660, 100); setTimeout(() => beep(880, 100), 150); }
function beepCountdown() { beep(550, 80, 0.15); }

// ─── Navigation (History API) ────────────────────────────
const SCREENS = { home: $home, settings: $settings, exercise: $exercise };

function showScreen(screen) {
  [$home, $settings, $exercise].forEach(s => s.classList.remove('active'));
  screen.classList.add('active');
}

function navigateTo(screenName, push = true) {
  if (screenName === 'home') { stopExercise(); }
  if (screenName === 'settings' && !currentExercise) { screenName = 'home'; }
  showScreen(SCREENS[screenName]);
  if (push) history.pushState({ screen: screenName }, '', '');
}

// Handle browser / mobile back button
window.addEventListener('popstate', (e) => {
  const target = e.state?.screen || 'home';
  if (target === 'home' || target === 'settings') stopExercise();
  showScreen(SCREENS[target] || $home);
});

// Set initial history state
history.replaceState({ screen: 'home' }, '', '');

// Back buttons (use history.back so browser back stack stays in sync)
document.getElementById('backToHome').addEventListener('click', () => { history.back(); });
document.getElementById('backToSettings').addEventListener('click', () => { history.back(); });

document.querySelectorAll('.exercise-card').forEach(card => {
  card.addEventListener('click', () => {
    currentExercise = card.dataset.exercise;
    renderSettings(currentExercise);
    navigateTo('settings');
  });
});

// ─── Language switcher ─────────────────────────────────
const $langToggle   = document.getElementById('langToggle');
const $langDropdown = document.getElementById('langDropdown');

$langToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  $langDropdown.classList.toggle('open');
});
document.addEventListener('click', () => $langDropdown.classList.remove('open'));
$langDropdown.addEventListener('click', (e) => e.stopPropagation());

document.querySelectorAll('.lang-option').forEach(btn => {
  btn.addEventListener('click', () => {
    setLanguage(btn.dataset.lang);
    updateLangActiveStates();
    $langDropdown.classList.remove('open');
    // Re-render settings if currently on that screen
    if ($settings.classList.contains('active') && currentExercise) {
      renderSettings(currentExercise);
    }
  });
});

function updateLangActiveStates() {
  document.querySelectorAll('.lang-option').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === getLang());
  });
}

// Apply language on load
setLanguage(getLang());
updateLangActiveStates();

// ─── Settings renderers ─────────────────────────────────
function renderSettings(type) {
  const builders = { interval: settingsInterval, wimhof: settingsWimHof, box: settingsBox, '478': settings478 };
  builders[type]();
}

/* ---------- INTERVAL BREATH-HOLD ---------- */
function settingsInterval() {
  const saved = loadConfig('interval', {
    holdTime: 60,
    rests: [90, 70, 50, 30, 15],
    showTimer: true
  });

  let rests = [...saved.rests];

  const html = `
    <h2>${t('intervalSettingsTitle')}</h2>
    <p class="settings-desc">${t('intervalSettingsDesc')}</p>
    <div class="field">
      <label>${t('holdTimeLabel')}</label>
      <input type="number" id="intervalHold" min="5" max="600" value="${saved.holdTime}">
    </div>
    <label style="font-size:.85rem;color:var(--text-dim);margin-bottom:.4rem;display:block;">
      ${t('restPeriodsLabel')}
    </label>
    <ul class="interval-list" id="intervalList"></ul>
    <button class="add-interval-btn" id="addRestBtn">${t('addRest')}</button>

    <div class="toggle-field">
      <label class="toggle">
        <input type="checkbox" id="intervalShowTimer" ${saved.showTimer ? 'checked' : ''}>
        <span class="slider"></span>
      </label>
      <label for="intervalShowTimer">${t('showTimerDuringHold')}</label>
    </div>
    <button class="start-btn" id="goBtn">${t('startExercise')}</button>
  `;
  $settingsBody.innerHTML = html;

  function renderRests() {
    const ul = document.getElementById('intervalList');
    ul.innerHTML = rests.map((r, i) => `
      <li>
        <span>${t('restPrefix')} #${i + 1}</span>
        <input type="number" min="0" max="600" value="${r}" data-idx="${i}" class="rest-input">
        <button class="remove-interval" data-idx="${i}" title="Remove">&times;</button>
      </li>
    `).join('');

    ul.querySelectorAll('.rest-input').forEach(inp => {
      inp.addEventListener('change', () => { rests[+inp.dataset.idx] = Math.max(0, +inp.value); });
    });
    ul.querySelectorAll('.remove-interval').forEach(btn => {
      btn.addEventListener('click', () => { rests.splice(+btn.dataset.idx, 1); renderRests(); });
    });
  }
  renderRests();

  document.getElementById('addRestBtn').addEventListener('click', () => {
    rests.push(rests.length ? Math.max(0, rests[rests.length - 1] - 10) : 30);
    renderRests();
  });

  document.getElementById('goBtn').addEventListener('click', () => {
    const cfg = {
      holdTime: Math.max(5, +document.getElementById('intervalHold').value),
      rests: rests.map(r => Math.max(0, +r)),
      showTimer: document.getElementById('intervalShowTimer').checked
    };
    saveConfig('interval', cfg);
    timerVisible = cfg.showTimer;
    updateEyeIcon();
    startInterval(cfg);
  });
}

/* ---------- WIM HOF ---------- */
function settingsWimHof() {
  const saved = loadConfig('wimhof', {
    breathCount: 30,
    rounds: 3,
    recoveryHold: 15,
    showTimer: true
  });

  $settingsBody.innerHTML = `
    <h2>${t('wimhofSettingsTitle')}</h2>
    <p class="settings-desc">${t('wimhofSettingsDesc')}</p>
    <div class="field">
      <label>${t('breathsPerRound')}</label>
      <input type="number" id="whBreaths" min="10" max="60" value="${saved.breathCount}">
    </div>
    <div class="field">
      <label>${t('rounds')}</label>
      <input type="number" id="whRounds" min="1" max="10" value="${saved.rounds}">
    </div>
    <div class="field">
      <label>${t('recoveryHold')}</label>
      <input type="number" id="whRecovery" min="5" max="60" value="${saved.recoveryHold}">
    </div>
    <div class="toggle-field">
      <label class="toggle">
        <input type="checkbox" id="whShowTimer" ${saved.showTimer ? 'checked' : ''}>
        <span class="slider"></span>
      </label>
      <label for="whShowTimer">${t('showTimerDuringRetention')}</label>
    </div>
    <button class="start-btn" id="goBtn">${t('startExercise')}</button>
  `;

  document.getElementById('goBtn').addEventListener('click', () => {
    const cfg = {
      breathCount: Math.max(10, +document.getElementById('whBreaths').value),
      rounds: Math.max(1, +document.getElementById('whRounds').value),
      recoveryHold: Math.max(5, +document.getElementById('whRecovery').value),
      showTimer: document.getElementById('whShowTimer').checked
    };
    saveConfig('wimhof', cfg);
    timerVisible = cfg.showTimer;
    updateEyeIcon();
    startWimHof(cfg);
  });
}

/* ---------- BOX BREATHING ---------- */
function settingsBox() {
  const saved = loadConfig('box', { count: 4, rounds: 4, showTimer: true });

  $settingsBody.innerHTML = `
    <h2>${t('boxSettingsTitle')}</h2>
    <p class="settings-desc">${t('boxSettingsDesc')}</p>
    <div class="field">
      <label>${t('secondsPerSide')}</label>
      <input type="number" id="boxCount" min="2" max="20" value="${saved.count}">
    </div>
    <div class="field">
      <label>${t('rounds')}</label>
      <input type="number" id="boxRounds" min="1" max="20" value="${saved.rounds}">
    </div>
    <div class="toggle-field">
      <label class="toggle">
        <input type="checkbox" id="boxShowTimer" ${saved.showTimer ? 'checked' : ''}>
        <span class="slider"></span>
      </label>
      <label for="boxShowTimer">${t('showTimer')}</label>
    </div>
    <button class="start-btn" id="goBtn">${t('startExercise')}</button>
  `;

  document.getElementById('goBtn').addEventListener('click', () => {
    const cfg = {
      count: Math.max(2, +document.getElementById('boxCount').value),
      rounds: Math.max(1, +document.getElementById('boxRounds').value),
      showTimer: document.getElementById('boxShowTimer').checked
    };
    saveConfig('box', cfg);
    timerVisible = cfg.showTimer;
    updateEyeIcon();
    startBox(cfg);
  });
}

/* ---------- 4-7-8 BREATHING ---------- */
function settings478() {
  const saved = loadConfig('478', { cycles: 4, showTimer: true });

  $settingsBody.innerHTML = `
    <h2>${t('478SettingsTitle')}</h2>
    <p class="settings-desc">${t('478SettingsDesc')}</p>
    <div class="field">
      <label>${t('cycles')}</label>
      <input type="number" id="cycles478" min="1" max="12" value="${saved.cycles}">
    </div>
    <div class="toggle-field">
      <label class="toggle">
        <input type="checkbox" id="show478" ${saved.showTimer ? 'checked' : ''}>
        <span class="slider"></span>
      </label>
      <label for="show478">${t('showTimer')}</label>
    </div>
    <button class="start-btn" id="goBtn">${t('startExercise')}</button>
  `;

  document.getElementById('goBtn').addEventListener('click', () => {
    const cfg = {
      cycles: Math.max(1, +document.getElementById('cycles478').value),
      showTimer: document.getElementById('show478').checked
    };
    saveConfig('478', cfg);
    timerVisible = cfg.showTimer;
    updateEyeIcon();
    start478(cfg);
  });
}

// ─── Persistence ────────────────────────────────────────
function saveConfig(key, obj) { try { localStorage.setItem('dive_' + key, JSON.stringify(obj)); } catch (_) {} }
function loadConfig(key, defaults) {
  try { const d = JSON.parse(localStorage.getItem('dive_' + key)); return d ? { ...defaults, ...d } : defaults; }
  catch (_) { return defaults; }
}

// ─── Timer display helpers ──────────────────────────────
function updateEyeIcon() { $eyeIcon.textContent = timerVisible ? '👁️' : '🙈'; }
let _currentIsHold = false; // tracks whether current phase is a hold
$toggleTimer.addEventListener('click', () => { timerVisible = !timerVisible; updateEyeIcon(); applyTimerVisibility(_currentIsHold); });

function applyTimerVisibility(isHoldPhase) {
  _currentIsHold = isHoldPhase;
  const shouldHide = isHoldPhase && !timerVisible;
  $timerText.classList.toggle('hidden', shouldHide);
  $ringWrap.classList.toggle('timer-hidden', shouldHide);
}

function setTimerDisplay(remaining) {
  const m = Math.floor(remaining / 60);
  const s = Math.floor(remaining % 60);
  $timerText.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function setRingProgress(fraction) {
  // fraction: 0 = full ring, 1 = empty
  $ringFg.style.strokeDashoffset = CIRCUMFERENCE * fraction;
}

function setRingColor(color) { $ringFg.style.stroke = color; }

// ─── Core countdown mechanism ───────────────────────────
function countdown(totalSecs, { onTick, onDone, color, isHoldPhase = false }) {
  return new Promise((resolve) => {
    if (!running) { resolve(); return; }
    setRingColor(color || 'var(--accent)');
    let remaining = totalSecs;
    setTimerDisplay(remaining);
    setRingProgress(0);
    applyTimerVisibility(isHoldPhase);

    countdownInterval = setInterval(() => {
      if (!running) { clearInterval(countdownInterval); resolve(); return; }
      if (paused) return;

      remaining -= 1;
      if (remaining < 0) remaining = 0;
      setTimerDisplay(remaining);
      setRingProgress(1 - remaining / totalSecs);

      // countdown beep for last 3 seconds
      if (remaining <= 3 && remaining > 0) beepCountdown();

      if (remaining <= 0) {
        clearInterval(countdownInterval);
        beepDouble();
        if (onDone) onDone();
        resolve();
      }
      if (onTick) onTick(remaining);
    }, 1000);
  });
}

// ─── Start / Pause / Stop controls ─────────────────────
$startPause.addEventListener('click', () => {
  if (!running) return;
  paused = !paused;
  $startPause.textContent = paused ? t('resume') : t('pause');
});

$stop.addEventListener('click', () => { stopExercise(); history.back(); });

function stopExercise() {
  running = false;
  paused = false;
  clearInterval(countdownInterval);
  clearTimeout(stepTimeout);
  cancelAnimationFrame(rafId);
  $ringWrap.classList.remove('breathing');
  $ringWrap.classList.remove('timer-hidden');
  $timerText.classList.remove('hidden');
  $startPause.textContent = t('start');
  $phaseLabel.className = 'phase-label';
}

function initExerciseScreen() {
  running = true; paused = false;
  $startPause.textContent = t('pause');
  $phaseLabel.textContent = t('getReady');
  $phaseLabel.className = 'phase-label';
  $roundLabel.textContent = '';
  $instrText.textContent = '';
  setTimerDisplay(0);
  setRingProgress(0);
  applyTimerVisibility(false); // start visible
  navigateTo('exercise');
}

// ═══════════════════════════════════════════════════════════
// EXERCISE RUNNERS
// ═══════════════════════════════════════════════════════════

/* ─── INTERVAL BREATH-HOLD ──────────────────────────────── */
async function startInterval(cfg) {
  initExerciseScreen();

  const holds = cfg.rests.length + 1;  // one more hold than rest periods

  // Initial 5-second get-ready
  $phaseLabel.textContent = t('getReady');
  $instrText.textContent = t('prepareYourself');
  await countdown(5, { color: 'var(--text-dim)' });

  for (let i = 0; i < holds; i++) {
    if (!running) return;

    // HOLD
    $phaseLabel.textContent = t('hold');
    $phaseLabel.className = 'phase-label hold';
    $roundLabel.textContent = t('holdOf', i + 1, holds);
    $instrText.textContent = t('holdBreath');
    beepHigh();
    await countdown(cfg.holdTime, { color: 'var(--hold)', isHoldPhase: true });

    if (!running) return;

    // REST (if not last hold)
    if (i < cfg.rests.length) {
      $phaseLabel.textContent = t('rest');
      $phaseLabel.className = 'phase-label rest';
      $instrText.textContent = t('breatheFreely');
      beepLow();
      await countdown(cfg.rests[i], { color: 'var(--rest)', isHoldPhase: false });
    }
  }

  if (!running) return;
  finishExercise();
}

/* ─── WIM HOF METHOD ────────────────────────────────────── */
async function startWimHof(cfg) {
  initExerciseScreen();

  // Get ready
  $phaseLabel.textContent = t('getReady');
  $instrText.textContent = t('sitComfortably');
  await countdown(5, { color: 'var(--text-dim)' });

  for (let round = 1; round <= cfg.rounds; round++) {
    if (!running) return;
    $roundLabel.textContent = t('roundOf', round, cfg.rounds);

    // ── Power breaths ──
    $phaseLabel.textContent = t('breathe');
    $phaseLabel.className = 'phase-label inhale';
    $instrText.textContent = t('deepBreaths', cfg.breathCount);
    $ringWrap.classList.add('breathing');

    // Animate breaths: ~1.5 s inhale, ~1 s exhale = 2.5 s / breath
    const breathDuration = 2.5;
    for (let b = 1; b <= cfg.breathCount; b++) {
      if (!running) return;
      setTimerDisplay(cfg.breathCount - b + 1);
      setRingProgress(1 - b / cfg.breathCount);

      // inhale phase label
      $phaseLabel.textContent = t('inhale');
      $phaseLabel.className = 'phase-label inhale';
      setRingColor('var(--inhale)');
      await sleep(1500);
      if (!running) return;
      // exhale
      $phaseLabel.textContent = t('exhale');
      $phaseLabel.className = 'phase-label exhale';
      setRingColor('var(--exhale)');
      await sleep(1000);

      // wait while paused
      while (paused && running) await sleep(200);
    }
    $ringWrap.classList.remove('breathing');

    if (!running) return;

    // ── Retention (hold after exhale) ──
    $phaseLabel.textContent = t('hold');
    $phaseLabel.className = 'phase-label hold';
    $instrText.textContent = t('exhaleAndHold');
    beepHigh();
    // Count UP — user decides when to stop
    await countUp('var(--hold)');

    if (!running) return;

    // ── Recovery breath ──
    $phaseLabel.textContent = t('recovery');
    $phaseLabel.className = 'phase-label inhale';
    $instrText.textContent = t('takeDeepBreath');
    beepLow();
    await countdown(cfg.recoveryHold, { color: 'var(--inhale)' });
  }

  if (!running) return;
  finishExercise();
}

/** Count-up timer for open-ended retention (Wim Hof). Resolves when user un-pauses after pausing. */
function countUp(color) {
  return new Promise(resolve => {
    setRingColor(color);
    setRingProgress(0);
    $ringFg.style.strokeDashoffset = 0;  // full ring
    applyTimerVisibility(true);  // this is a hold phase
    let elapsed = 0;
    paused = false;
    $startPause.textContent = t('stopHold');

    const iv = setInterval(() => {
      if (!running) { clearInterval(iv); resolve(); return; }
      if (paused) {
        clearInterval(iv);
        paused = false;
        $startPause.textContent = t('pause');
        beepDouble();
        resolve();
        return;
      }
      elapsed++;
      setTimerDisplay(elapsed);
    }, 1000);
  });
}

/* ─── BOX BREATHING ─────────────────────────────────────── */
async function startBox(cfg) {
  initExerciseScreen();
  $ringWrap.classList.add('breathing');

  $phaseLabel.textContent = t('getReady');
  $instrText.textContent = t('sitUpright');
  await countdown(5, { color: 'var(--text-dim)' });

  const phases = [
    { label: t('inhale'), cls: 'inhale', color: 'var(--inhale)',  instr: t('breatheInSlowly'),  isHold: false },
    { label: t('hold'),   cls: 'retain', color: 'var(--accent2)', instr: t('holdYourBreath'),   isHold: true  },
    { label: t('exhale'), cls: 'exhale', color: 'var(--exhale)',  instr: t('breatheOutSlowly'), isHold: false },
    { label: t('hold'),   cls: 'retain', color: 'var(--accent2)', instr: t('holdLungsEmpty'),   isHold: true  },
  ];

  for (let r = 1; r <= cfg.rounds; r++) {
    $roundLabel.textContent = t('roundOf', r, cfg.rounds);
    for (const p of phases) {
      if (!running) return;
      $phaseLabel.textContent = p.label;
      $phaseLabel.className = 'phase-label ' + p.cls;
      $instrText.textContent = p.instr;
      beepLow();
      await countdown(cfg.count, { color: p.color, isHoldPhase: p.isHold });
    }
  }

  $ringWrap.classList.remove('breathing');
  if (!running) return;
  finishExercise();
}

/* ─── 4-7-8 BREATHING ──────────────────────────────────── */
async function start478(cfg) {
  initExerciseScreen();
  $ringWrap.classList.add('breathing');

  $phaseLabel.textContent = t('getReady');
  $instrText.textContent = t('placeTongue');
  await countdown(5, { color: 'var(--text-dim)' });

  for (let c = 1; c <= cfg.cycles; c++) {
    if (!running) return;
    $roundLabel.textContent = t('cycleOf', c, cfg.cycles);

    // Inhale 4
    $phaseLabel.textContent = t('inhale');
    $phaseLabel.className = 'phase-label inhale';
    $instrText.textContent = t('breatheInNose');
    beepLow();
    await countdown(4, { color: 'var(--inhale)', isHoldPhase: false });

    if (!running) return;

    // Hold 7
    $phaseLabel.textContent = t('hold');
    $phaseLabel.className = 'phase-label retain';
    $instrText.textContent = t('holdYourBreath');
    beepHigh();
    await countdown(7, { color: 'var(--accent2)', isHoldPhase: true });

    if (!running) return;

    // Exhale 8
    $phaseLabel.textContent = t('exhale');
    $phaseLabel.className = 'phase-label exhale';
    $instrText.textContent = t('exhaleWhoosh');
    beepLow();
    await countdown(8, { color: 'var(--exhale)', isHoldPhase: false });
  }

  $ringWrap.classList.remove('breathing');
  if (!running) return;
  finishExercise();
}

// ─── Finish ─────────────────────────────────────────────
function finishExercise() {
  $phaseLabel.textContent = t('done');
  $phaseLabel.className = 'phase-label';
  $instrText.textContent = t('greatJob');
  $roundLabel.textContent = '';
  $startPause.textContent = t('start');
  setRingProgress(0);
  setRingColor('var(--accent)');
  applyTimerVisibility(false); // show ring on completion
  running = false;
  beep(523, 200); setTimeout(() => beep(659, 200), 220); setTimeout(() => beep(784, 300), 440);
}

// ─── Utility ────────────────────────────────────────────
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }
