/* =========================================================
   DIVE — Internationalization (i18n.js)
   Supports: de (default), en, es, fr
   ========================================================= */

const TRANSLATIONS = {
  de: {
    // ── HTML / Global ──
    pageTitle: 'DIVE — Atem- & Atemanhalte-Trainer',
    tagline: 'Atem- & Atemanhalte-Trainer',

    // ── Home cards ──
    intervalTitle: 'Intervall-Atemanhalten',
    intervalDesc: 'Halte die Luft an mit abnehmenden Ruhepausen',
    wimhofTitle: 'Wim-Hof-Methode',
    wimhofDesc: '30 Power-Atemzüge, Anhalten & Erholung — 3 Runden',
    boxTitle: 'Box-Atmung',
    boxDesc: 'Einatmen · Halten · Ausatmen · Halten — gleiche Zeiten',
    '478Title': '4-7-8 Atmung',
    '478Desc': 'Beruhige dein Nervensystem & schlafe schneller ein',

    // ── Navigation ──
    back: '← Zurück',

    // ── Settings: Interval ──
    intervalSettingsTitle: '⏱️ Intervall-Atemanhalten',
    intervalSettingsDesc: 'Halte die Luft für eine feste Zeit an. Zwischen den Atemanhaltungen gibt es Ruhephasen mit abnehmender Dauer. Passe die Anhaltezeit und jede Ruhezeit unten an.',
    holdTimeLabel: 'Anhaltezeit (Sekunden)',
    restPeriodsLabel: 'Ruhepausen (Sekunden) — von lang nach kurz',
    restPrefix: 'Pause',
    addRest: '+ Ruhepause hinzufügen',
    showTimerDuringHold: 'Restzeit während des Anhaltens anzeigen',

    // ── Settings: Wim Hof ──
    wimhofSettingsTitle: '❄️ Wim-Hof-Methode',
    wimhofSettingsDesc: 'Atme tief und rhythmisch ein, dann atme aus und halte so lange du kannst. Beende jede Runde mit einem Erholungsatemzug von 15 s. Wiederhole über mehrere Runden.',
    breathsPerRound: 'Atemzüge pro Runde',
    rounds: 'Runden',
    recoveryHold: 'Erholungs-Anhalten (Sekunden)',
    showTimerDuringRetention: 'Timer während des Anhaltens anzeigen',

    // ── Settings: Box ──
    boxSettingsTitle: '⬜ Box-Atmung',
    boxSettingsDesc: 'Auch „Quadrat-Atmung" genannt — von Navy SEALs genutzt, um unter Druck ruhig zu bleiben. Einatmen, halten, ausatmen, halten — jeweils gleich lang.',
    secondsPerSide: 'Sekunden pro Seite',

    // ── Settings: 4-7-8 ──
    '478SettingsTitle': '🌙 4-7-8 Atmung',
    '478SettingsDesc': 'Entwickelt von Dr. Andrew Weil, basierend auf Pranayama-Yoga.<br>4 s durch die Nase einatmen, 7 s halten, 8 s durch den Mund ausatmen.',
    cycles: 'Zyklen',
    showTimer: 'Timer anzeigen',

    // ── Common settings ──
    startExercise: 'Übung starten',

    // ── Exercise screen ──
    getReady: 'BEREIT MACHEN',
    hold: 'HALTEN',
    rest: 'RUHE',
    breathe: 'ATMEN',
    inhale: 'EINATMEN',
    exhale: 'AUSATMEN',
    recovery: 'ERHOLUNG',
    done: '🎉 FERTIG',

    // ── Instructions ──
    prepareYourself: 'Mach dich bereit …',
    holdBreath: 'Halte die Luft an',
    breatheFreely: 'Atme frei',
    holdOf: 'Anhalten {0} von {1}',
    roundOf: 'Runde {0} von {1}',
    cycleOf: 'Zyklus {0} von {1}',
    sitComfortably: 'Sitz bequem — atme normal',
    deepBreaths: '{0} tiefe Atemzüge — durch die Nase ein, durch den Mund aus',
    exhaleAndHold: 'Vollständig ausatmen und halten — tippe auf Pause wenn du atmen musst',
    takeDeepBreath: 'Nimm einen tiefen Atemzug und halte',
    sitUpright: 'Sitz aufrecht, Füße flach auf dem Boden',
    breatheInSlowly: 'Atme langsam durch die Nase ein',
    holdYourBreath: 'Halte die Luft an',
    breatheOutSlowly: 'Atme langsam durch den Mund aus',
    holdLungsEmpty: 'Halten — Lunge leer',
    placeTongue: 'Lege die Zunge hinter die oberen Schneidezähne',
    breatheInNose: 'Atme ruhig durch die Nase ein',
    exhaleWhoosh: 'Atme kräftig durch den Mund aus — „Wuusch"',
    greatJob: 'Super gemacht! Übung abgeschlossen.',

    // ── Controls ──
    start: 'Start',
    pause: 'Pause',
    resume: 'Fortsetzen',
    stopHold: 'Anhalten beenden',

    // ── Language menu ──
    language: 'Sprache',
  },

  en: {
    pageTitle: 'DIVE — Breathing & Breath-Hold Trainer',
    tagline: 'Breathing & Breath-Hold Trainer',

    intervalTitle: 'Interval Breath-Hold',
    intervalDesc: 'Hold your breath with decreasing rest periods',
    wimhofTitle: 'Wim Hof Method',
    wimhofDesc: '30 power breaths, retention & recovery — 3 rounds',
    boxTitle: 'Box Breathing',
    boxDesc: 'Inhale · Hold · Exhale · Hold — equal counts',
    '478Title': '4-7-8 Breathing',
    '478Desc': 'Calm your nervous system & fall asleep faster',

    back: '← Back',

    intervalSettingsTitle: '⏱️ Interval Breath-Hold',
    intervalSettingsDesc: 'Hold your breath for a fixed time, resting between holds with decreasing rest durations. Adjust the hold time and each rest period below.',
    holdTimeLabel: 'Hold time (seconds)',
    restPeriodsLabel: 'Rest periods (seconds) — from longest to shortest',
    restPrefix: 'Rest',
    addRest: '+ Add rest period',
    showTimerDuringHold: 'Show remaining time during hold',

    wimhofSettingsTitle: '❄️ Wim Hof Method',
    wimhofSettingsDesc: 'Take deep, rhythmic breaths, then exhale and hold as long as you can. Finish each round with a recovery breath held for 15 s. Repeat for multiple rounds.',
    breathsPerRound: 'Breaths per round',
    rounds: 'Rounds',
    recoveryHold: 'Recovery hold (seconds)',
    showTimerDuringRetention: 'Show timer during retention',

    boxSettingsTitle: '⬜ Box Breathing',
    boxSettingsDesc: 'Also called "square breathing" — used by Navy SEALs to stay calm under pressure. Inhale, hold, exhale, hold — each for the same count.',
    secondsPerSide: 'Seconds per side',

    '478SettingsTitle': '🌙 4-7-8 Breathing',
    '478SettingsDesc': 'Developed by Dr. Andrew Weil, based on pranayama yoga.<br>Inhale through the nose for 4 s, hold for 7 s, exhale through the mouth for 8 s.',
    cycles: 'Cycles',
    showTimer: 'Show timer',

    startExercise: 'Start Exercise',

    getReady: 'GET READY',
    hold: 'HOLD',
    rest: 'REST',
    breathe: 'BREATHE',
    inhale: 'INHALE',
    exhale: 'EXHALE',
    recovery: 'RECOVERY',
    done: '🎉 DONE',

    prepareYourself: 'Prepare yourself…',
    holdBreath: 'Hold your breath',
    breatheFreely: 'Breathe freely',
    holdOf: 'Hold {0} of {1}',
    roundOf: 'Round {0} of {1}',
    cycleOf: 'Cycle {0} of {1}',
    sitComfortably: 'Sit comfortably — breathe normally',
    deepBreaths: '{0} deep breaths — in through nose, out through mouth',
    exhaleAndHold: 'Exhale fully and hold — tap Pause when you need to breathe',
    takeDeepBreath: 'Take one deep breath and hold',
    sitUpright: 'Sit upright, feet flat on the floor',
    breatheInSlowly: 'Breathe in slowly through your nose',
    holdYourBreath: 'Hold your breath',
    breatheOutSlowly: 'Breathe out slowly through your mouth',
    holdLungsEmpty: 'Hold — lungs empty',
    placeTongue: 'Place tongue behind upper front teeth',
    breatheInNose: 'Breathe in quietly through the nose',
    exhaleWhoosh: 'Exhale forcefully through mouth — "whoosh"',
    greatJob: 'Great job! Exercise complete.',

    start: 'Start',
    pause: 'Pause',
    resume: 'Resume',
    stopHold: 'Stop hold',

    language: 'Language',
  },

  es: {
    pageTitle: 'DIVE — Entrenador de Respiración y Apnea',
    tagline: 'Entrenador de Respiración y Apnea',

    intervalTitle: 'Apnea por Intervalos',
    intervalDesc: 'Aguanta la respiración con descansos decrecientes',
    wimhofTitle: 'Método Wim Hof',
    wimhofDesc: '30 respiraciones profundas, retención y recuperación — 3 rondas',
    boxTitle: 'Respiración Cuadrada',
    boxDesc: 'Inhalar · Aguantar · Exhalar · Aguantar — tiempos iguales',
    '478Title': 'Respiración 4-7-8',
    '478Desc': 'Calma tu sistema nervioso y duerme más rápido',

    back: '← Atrás',

    intervalSettingsTitle: '⏱️ Apnea por Intervalos',
    intervalSettingsDesc: 'Aguanta la respiración durante un tiempo fijo, descansando entre retenciones con duraciones decrecientes. Ajusta el tiempo de retención y cada periodo de descanso abajo.',
    holdTimeLabel: 'Tiempo de retención (segundos)',
    restPeriodsLabel: 'Periodos de descanso (segundos) — de mayor a menor',
    restPrefix: 'Descanso',
    addRest: '+ Añadir descanso',
    showTimerDuringHold: 'Mostrar tiempo restante durante la retención',

    wimhofSettingsTitle: '❄️ Método Wim Hof',
    wimhofSettingsDesc: 'Respira profundo y rítmicamente, luego exhala y aguanta todo lo que puedas. Termina cada ronda con una respiración de recuperación de 15 s. Repite durante varias rondas.',
    breathsPerRound: 'Respiraciones por ronda',
    rounds: 'Rondas',
    recoveryHold: 'Retención de recuperación (segundos)',
    showTimerDuringRetention: 'Mostrar temporizador durante la retención',

    boxSettingsTitle: '⬜ Respiración Cuadrada',
    boxSettingsDesc: 'También llamada "respiración en caja" — usada por los Navy SEALs para mantener la calma bajo presión. Inhalar, aguantar, exhalar, aguantar — cada uno el mismo tiempo.',
    secondsPerSide: 'Segundos por lado',

    '478SettingsTitle': '🌙 Respiración 4-7-8',
    '478SettingsDesc': 'Desarrollada por el Dr. Andrew Weil, basada en el yoga pranayama.<br>Inhala por la nariz 4 s, aguanta 7 s, exhala por la boca 8 s.',
    cycles: 'Ciclos',
    showTimer: 'Mostrar temporizador',

    startExercise: 'Iniciar Ejercicio',

    getReady: 'PREPÁRATE',
    hold: 'AGUANTA',
    rest: 'DESCANSO',
    breathe: 'RESPIRA',
    inhale: 'INHALA',
    exhale: 'EXHALA',
    recovery: 'RECUPERACIÓN',
    done: '🎉 HECHO',

    prepareYourself: 'Prepárate…',
    holdBreath: 'Aguanta la respiración',
    breatheFreely: 'Respira libremente',
    holdOf: 'Retención {0} de {1}',
    roundOf: 'Ronda {0} de {1}',
    cycleOf: 'Ciclo {0} de {1}',
    sitComfortably: 'Siéntate cómodamente — respira normalmente',
    deepBreaths: '{0} respiraciones profundas — inhala por la nariz, exhala por la boca',
    exhaleAndHold: 'Exhala completamente y aguanta — toca Pausa cuando necesites respirar',
    takeDeepBreath: 'Toma una respiración profunda y aguanta',
    sitUpright: 'Siéntate erguido, pies planos en el suelo',
    breatheInSlowly: 'Inhala lentamente por la nariz',
    holdYourBreath: 'Aguanta la respiración',
    breatheOutSlowly: 'Exhala lentamente por la boca',
    holdLungsEmpty: 'Aguanta — pulmones vacíos',
    placeTongue: 'Coloca la lengua detrás de los dientes frontales superiores',
    breatheInNose: 'Inhala silenciosamente por la nariz',
    exhaleWhoosh: 'Exhala con fuerza por la boca — "fuuush"',
    greatJob: '¡Buen trabajo! Ejercicio completado.',

    start: 'Iniciar',
    pause: 'Pausa',
    resume: 'Reanudar',
    stopHold: 'Detener retención',

    language: 'Idioma',
  },

  fr: {
    pageTitle: 'DIVE — Entraîneur de Respiration et d\'Apnée',
    tagline: 'Entraîneur de Respiration et d\'Apnée',

    intervalTitle: 'Apnée par Intervalles',
    intervalDesc: 'Retenez votre souffle avec des repos décroissants',
    wimhofTitle: 'Méthode Wim Hof',
    wimhofDesc: '30 respirations profondes, rétention & récupération — 3 tours',
    boxTitle: 'Respiration Carrée',
    boxDesc: 'Inspirer · Retenir · Expirer · Retenir — durées égales',
    '478Title': 'Respiration 4-7-8',
    '478Desc': 'Calmez votre système nerveux & endormez-vous plus vite',

    back: '← Retour',

    intervalSettingsTitle: '⏱️ Apnée par Intervalles',
    intervalSettingsDesc: 'Retenez votre souffle pendant un temps fixe, en vous reposant entre les rétentions avec des durées décroissantes. Ajustez le temps de rétention et chaque période de repos ci-dessous.',
    holdTimeLabel: 'Temps de rétention (secondes)',
    restPeriodsLabel: 'Périodes de repos (secondes) — de la plus longue à la plus courte',
    restPrefix: 'Repos',
    addRest: '+ Ajouter une pause',
    showTimerDuringHold: 'Afficher le temps restant pendant la rétention',

    wimhofSettingsTitle: '❄️ Méthode Wim Hof',
    wimhofSettingsDesc: 'Respirez profondément et rythmiquement, puis expirez et retenez aussi longtemps que possible. Terminez chaque tour par une respiration de récupération de 15 s. Répétez sur plusieurs tours.',
    breathsPerRound: 'Respirations par tour',
    rounds: 'Tours',
    recoveryHold: 'Rétention de récupération (secondes)',
    showTimerDuringRetention: 'Afficher le chrono pendant la rétention',

    boxSettingsTitle: '⬜ Respiration Carrée',
    boxSettingsDesc: 'Aussi appelée "respiration en boîte" — utilisée par les Navy SEALs pour rester calme sous pression. Inspirer, retenir, expirer, retenir — chacun pour le même temps.',
    secondsPerSide: 'Secondes par côté',

    '478SettingsTitle': '🌙 Respiration 4-7-8',
    '478SettingsDesc': 'Développée par le Dr Andrew Weil, basée sur le yoga pranayama.<br>Inspirez par le nez 4 s, retenez 7 s, expirez par la bouche 8 s.',
    cycles: 'Cycles',
    showTimer: 'Afficher le chrono',

    startExercise: 'Démarrer l\'exercice',

    getReady: 'PRÉPAREZ-VOUS',
    hold: 'RETENIR',
    rest: 'REPOS',
    breathe: 'RESPIREZ',
    inhale: 'INSPIREZ',
    exhale: 'EXPIREZ',
    recovery: 'RÉCUPÉRATION',
    done: '🎉 TERMINÉ',

    prepareYourself: 'Préparez-vous…',
    holdBreath: 'Retenez votre souffle',
    breatheFreely: 'Respirez librement',
    holdOf: 'Rétention {0} sur {1}',
    roundOf: 'Tour {0} sur {1}',
    cycleOf: 'Cycle {0} sur {1}',
    sitComfortably: 'Asseyez-vous confortablement — respirez normalement',
    deepBreaths: '{0} respirations profondes — inspirez par le nez, expirez par la bouche',
    exhaleAndHold: 'Expirez complètement et retenez — appuyez sur Pause quand vous avez besoin de respirer',
    takeDeepBreath: 'Prenez une grande inspiration et retenez',
    sitUpright: 'Asseyez-vous droit, pieds à plat sur le sol',
    breatheInSlowly: 'Inspirez lentement par le nez',
    holdYourBreath: 'Retenez votre souffle',
    breatheOutSlowly: 'Expirez lentement par la bouche',
    holdLungsEmpty: 'Retenez — poumons vides',
    placeTongue: 'Placez la langue derrière les incisives supérieures',
    breatheInNose: 'Inspirez doucement par le nez',
    exhaleWhoosh: 'Expirez fortement par la bouche — "wouch"',
    greatJob: 'Bravo ! Exercice terminé.',

    start: 'Démarrer',
    pause: 'Pause',
    resume: 'Reprendre',
    stopHold: 'Arrêter la rétention',

    language: 'Langue',
  },
};

// ─── i18n engine ────────────────────────────────────────
const LANG_STORAGE_KEY = 'dive_lang';
let currentLang = 'de';
try { currentLang = localStorage.getItem(LANG_STORAGE_KEY) || 'de'; } catch (_) { /* storage blocked */ }

/** Get translated string; supports {0}, {1} placeholders */
function t(key, ...args) {
  let str = (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key])
         || (TRANSLATIONS['de'] && TRANSLATIONS['de'][key])
         || key;
  args.forEach((val, i) => { str = str.replace(`{${i}}`, val); });
  return str;
}

/** Change language and persist */
function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  try { localStorage.setItem(LANG_STORAGE_KEY, lang); } catch (_) { /* storage blocked */ }
  document.documentElement.lang = lang;
  document.title = t('pageTitle');
  applyStaticTranslations();
}

/** Apply translations to static DOM elements with data-i18n attributes */
function applyStaticTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = t(key);
    } else {
      el.textContent = t(key);
    }
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = t(el.getAttribute('data-i18n-html'));
  });

  // Update the language picker display
  const activeLabel = document.getElementById('langActiveLabel');
  if (activeLabel) {
    const names = { de: 'DE', en: 'EN', es: 'ES', fr: 'FR' };
    activeLabel.textContent = names[currentLang] || currentLang.toUpperCase();
  }
}

/** Get current language */
function getLang() { return currentLang; }
