# DIVE — Breathing & Breath-Hold Trainer

A minimalist, mobile-friendly web app for guided breathing and breath-hold exercises.  
Built with vanilla HTML / CSS / JS — **no build step required**.

## Exercises

| Exercise | Description |
|---|---|
| **Interval Breath-Hold** | Hold your breath for a set time with progressively shorter rest periods between holds. Fully customizable intervals. |
| **Wim Hof Method** | 30 deep power breaths → exhale & hold (open-ended) → 15 s recovery breath. Repeat for multiple rounds. |
| **Box Breathing** | Inhale · Hold · Exhale · Hold — each for the same duration (default 4 s). Used by Navy SEALs. |
| **4-7-8 Breathing** | Inhale 4 s · Hold 7 s · Exhale 8 s. Based on pranayama, popularized by Dr. Andrew Weil. |

## Features

- 🎯 **Customizable settings** — adjust times, rounds, and intervals per exercise
- 👁️ **Show / hide timer** — optionally hide the countdown so you rely on audio cues only
- 🔊 **Audio cues** — beeps mark phase transitions and the final 3-second countdown
- 💾 **Auto-save** — your settings persist in `localStorage`
- 📱 **Mobile-first** — responsive design that works on any screen size
- ⚡ **Zero dependencies** — pure HTML/CSS/JS, works on GitHub Pages out of the box

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Under *Source*, select **Deploy from a branch** → `main` / `/ (root)`.
4. Your site will be live at `https://<username>.github.io/<repo>/`.

## Local Development

Simply open `index.html` in a browser, or run a local server:

```bash
npx serve
```

## License

MIT
