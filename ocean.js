/* =========================================================
   DIVE — Ocean background  (ocean.js)
   Canvas bubbles + light rays
   CSS-based sea creatures spawned at random intervals
   ========================================================= */
(() => {
  /* ======================================================
     PART 1 — Canvas: bubbles + light rays
     ====================================================== */
  const canvas = document.getElementById('oceanCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H;
  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  // ─── Bubbles ──────────────────────────────────────────
  class Bubble {
    constructor() { this.reset(true); }
    reset(init = false) {
      this.r  = 1.5 + Math.random() * 4;
      this.x  = Math.random() * W;
      this.y  = init ? Math.random() * H : H + this.r + Math.random() * 40;
      this.vy = -(0.15 + Math.random() * 0.45);
      this.vx = (Math.random() - 0.5) * 0.2;
      this.wobbleAmp   = 0.3 + Math.random() * 0.6;
      this.wobbleSpeed = 0.005 + Math.random() * 0.015;
      this.wobbleOff   = Math.random() * Math.PI * 2;
      this.alpha = 0.08 + Math.random() * 0.18;
    }
    update(t) {
      this.y += this.vy;
      this.x += this.vx + Math.sin(t * this.wobbleSpeed + this.wobbleOff) * this.wobbleAmp;
      if (this.y < -this.r * 2) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(180,240,255,${this.alpha})`;
      ctx.fill();
      ctx.beginPath();
      ctx.arc(this.x - this.r * 0.3, this.y - this.r * 0.3, this.r * 0.3, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${this.alpha * 0.6})`;
      ctx.fill();
    }
  }

  // ─── Light rays ─────────────────────────────────────────
  class LightRay {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * W;
      this.width = 40 + Math.random() * 100;
      this.alpha = 0.012 + Math.random() * 0.025;
      this.drift = (Math.random() - 0.5) * 0.08;
    }
    update() { this.x += this.drift; if (this.x < -200 || this.x > W + 200) this.reset(); }
    draw() {
      const grad = ctx.createLinearGradient(this.x, 0, this.x, H * 0.75);
      grad.addColorStop(0, `rgba(45,212,191,${this.alpha})`);
      grad.addColorStop(1, 'rgba(45,212,191,0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.moveTo(this.x - this.width / 2, 0);
      ctx.lineTo(this.x + this.width / 2, 0);
      ctx.lineTo(this.x + this.width * 0.8, H * 0.75);
      ctx.lineTo(this.x - this.width * 0.3, H * 0.75);
      ctx.closePath();
      ctx.fill();
    }
  }

  const bubbleCount = Math.min(60, Math.floor(W * H / 18000));
  const bubbles = Array.from({ length: bubbleCount }, () => new Bubble());
  const rays    = Array.from({ length: 5 }, () => new LightRay());

  let frame = 0;
  function canvasLoop() {
    frame++;
    ctx.clearRect(0, 0, W, H);
    rays.forEach(r    => { r.update(); r.draw(); });
    bubbles.forEach(b => { b.update(frame); b.draw(); });
    requestAnimationFrame(canvasLoop);
  }
  canvasLoop();

  /* ======================================================
     PART 2 — CSS Creatures spawned into the DOM
     ====================================================== */

  // Container for all swimming creatures (sits between canvas and content)
  const ocean = document.createElement('div');
  ocean.id = 'oceanCreatures';
  // Insert right after the canvas so DOM order matches z-index layering
  canvas.insertAdjacentElement('afterend', ocean);

  // ─── Creature HTML builders ─────────────────────────────

  function buildShark() {
    const el = document.createElement('div');
    el.className = 'creature creature-shark';
    el.innerHTML = `
      <div class="s-bubbles"></div>
      <div class="s-body"></div>
      <div class="s-eye"></div>
      <div class="s-aleta"></div>
      <div class="s-tail"></div>
      <div class="s-fin"></div>
      <div class="s-gill s-gill-1"></div>
      <div class="s-gill s-gill-2"></div>
      <div class="s-gill s-gill-3"></div>
    `;
    return el;
  }

  function buildFish() {
    const el = document.createElement('div');
    el.className = 'creature creature-fish';
    const hues = ['#3fbfad','#47c9d0','#5eb8d4','#4db89a','#70c4b0','#5cc6d8','#4aa8c7','#5fcfb8'];
    const hue = hues[Math.floor(Math.random() * hues.length)];
    el.style.setProperty('--fish-color', hue);
    el.innerHTML = `
      <div class="fish-body"></div>
      <div class="fish-tail"></div>
      <div class="fish-eye"></div>
      <div class="fish-dorsal"></div>
      <div class="fish-ventral"></div>
    `;
    return el;
  }

  function buildTurtle() {
    const el = document.createElement('div');
    el.className = 'creature creature-turtle';
    el.innerHTML = `
      <div class="t-head">
        <div class="t-eyes"></div>
      </div>
      <div class="t-leg1"></div>
      <div class="t-leg2"></div>
      <div class="t-leg3"></div>
      <div class="t-leg4"></div>
      <div class="t-tail"></div>
      <div class="t-body">
        <span></span>
      </div>
      <div class="t-body-tail"></div>
    `;
    return el;
  }

  // ─── Creature definitions with weights ──────────────────
  const CREATURE_BUILDERS = [
    { build: buildFish,   weight: 5, name: 'fish' },
    { build: buildShark,  weight: 2, name: 'shark' },
    { build: buildTurtle, weight: 2, name: 'turtle' },
  ];
  const totalWeight = CREATURE_BUILDERS.reduce((s, c) => s + c.weight, 0);

  function pickRandom() {
    let r = Math.random() * totalWeight;
    for (const c of CREATURE_BUILDERS) {
      r -= c.weight;
      if (r <= 0) return c;
    }
    return CREATURE_BUILDERS[0];
  }

  // ─── Spawn logic ────────────────────────────────────────
  const MAX_CREATURES = 8;
  let activeCount = 0;

  function spawnCreature() {
    if (activeCount >= MAX_CREATURES) return;

    const def = pickRandom();
    const el = def.build();

    // Random vertical position (10%–80% of viewport)
    const topPct = 10 + Math.random() * 70;

    // Random direction
    const goRight = Math.random() < 0.5;

    // Per-creature scale ranges
    let scale;
    switch (def.name) {
      case 'shark':  scale = 0.55 + Math.random() * 0.5;  break; // 0.55–1.05
      case 'turtle': scale = 0.25 + Math.random() * 0.25; break; // 0.25–0.50 (it's 70vmin wide)
      default:       scale = 0.6  + Math.random() * 0.6;  break; // 0.6–1.2
    }

    // Random speed: duration of swim across screen
    let baseDuration;
    switch (def.name) {
      case 'shark':  baseDuration = 18 + Math.random() * 12; break;
      case 'turtle': baseDuration = 28 + Math.random() * 14; break;
      default:       baseDuration = 12 + Math.random() * 14; break;
    }
    const duration = baseDuration / scale;

    // Opacity
    const opacity = 0.25 + Math.random() * 0.2;

    // Per-creature wobble (randomised amplitude)
    const wobbleY = (0.4 + Math.random() * 1.6).toFixed(2);   // vh
    const wobbleR = (1   + Math.random() * 3).toFixed(2);      // deg

    el.style.top = `${topPct}%`;
    el.style.opacity = opacity;
    el.style.setProperty('--scale', scale);
    el.style.setProperty('--wy', wobbleY + 'vh');
    el.style.setProperty('--wr', wobbleR + 'deg');

    // Turtles need two animation durations: swim + bob
    if (def.name === 'turtle') {
      el.style.animationDuration = `${duration}s, 5s`;
    } else {
      el.style.animationDuration = `${duration}s`;
    }

    if (goRight) {
      el.classList.add('swim-right');
    } else {
      el.classList.add('swim-left');
    }

    ocean.appendChild(el);
    activeCount++;

    el.addEventListener('animationend', () => {
      el.remove();
      activeCount--;
    });
  }

  // Spawn a few initially with stagger
  for (let i = 0; i < 3; i++) {
    setTimeout(() => spawnCreature(), i * 2500);
  }

  // Keep spawning at random intervals (3–10 s)
  function scheduleNext() {
    const delay = 3000 + Math.random() * 7000;
    setTimeout(() => {
      spawnCreature();
      scheduleNext();
    }, delay);
  }
  scheduleNext();

})();
