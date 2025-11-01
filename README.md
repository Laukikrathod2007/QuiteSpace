# QuietSpace ✨

**An intelligent productivity & automation dashboard**

*Focus meets intelligent automation — built for distraction-free work and effortless workflows.*

---

[Live preview → [https://quickspace007.netlify.app/](https://quickspace007.netlify.app/)]

---

## 🚀 Overview

QuietSpace is a client-side productivity dashboard focused on helping you track focus sessions, run simple automations, and surface AI-driven productivity insights — all with a premium glassmorphic UI and zero backend required.

**Tech highlights:** React + TypeScript, Tailwind CSS, Framer Motion, shadcn/ui, Spline for 3D hero.

## 🎯 Key Features

* **Interactive 3D Hero** — Spline-based immersive landing experience.
* **Focus Session Tracking** — Start/stop timers, local session history and summary stats.
* **Smart Automations** — Create, test, and manage simple triggers & actions client-side.
* **AI Insights** — Productivity recommendations and trend analysis (client-side / optional cloud functions).
* **Glassmorphic UI** — Clean, premium visuals with soft gradients, backdrop blur and subtle motion.
* **No Backend Required** — Works instantly in the browser; opt-in cloud sync available.
* **Client-Side Storage Options** — React state + LocalStorage, with optional IndexedDB for larger data.

## 🔧 Quick Start

Install dependencies and run locally:

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Open the live preview to see a deployed demo: [https://quickspace007.netlify.app/](https://quickspace007.netlify.app/)

## 📁 Project Structure

```
src/
├── components/
│   ├── landing/          # Hero, FeaturesSection, HowItWorks, Testimonials, Footer
│   ├── dashboard/        # SessionList, SessionModal, AutomationsPanel
│   ├── ui/               # GlassCard.tsx, GlowButton.tsx, shared shadcn components
│   └── Navigation.tsx
├── pages/
│   ├── Index.tsx         # Landing with embedded Spline
│   ├── Dashboard.tsx     # Focus sessions & quick actions
│   ├── Automations.tsx   # Create/manage automations
│   ├── Insights.tsx      # AI-driven insights and charts
│   └── Settings.tsx      # App preferences
├── lib/
│   └── utils.ts
└── index.css             # design tokens & global styles
```

## 🎨 Design System

**Typography & Colors**

* Font: Inter (weights 300–700)
* Palette: soft blues & purples, glass gradients

**Utility classes**

* `.glass-card` — glassmorphic card (backdrop blur + translucent background)
* `.neuro-button` — 3D neumorphic CTA
* `.hover-scale` — subtle interactive scale on hover
* `.animate-fade-in` — smooth entry animation

**Motion**

* Framer Motion for scroll reveal, interactive micro-animations and hover states.

## 💾 Storage & Persistence

By default QuietSpace keeps everything client-side and ephemeral (React state). For persistence across refreshes or devices, integrate one of the following:

* **LocalStorage** — simple key/value persistence (small data)
* **IndexedDB** — larger structured data, offline-capable
* **Appwrite / Supabase** — authenticated cloud sync for multi-device use

> Tip: Use a lightweight sync toggle in Settings so users can choose local-only or cloud sync.

## ⚙️ Appwrite (optional) — Quick Setup

If you want to enable multi-device sync, use Appwrite (instructions below assume a Vite environment):

1. Add to `.env.local`:

```env
VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your_project_id
```

2. Recommended database/collections:

* **Database ID**: `quietspace`
* **Collections**:

  * `focusSessions` — fields: `userId (string)`, `title (string)`, `notes (string?)`, `durationSec (int)`, `startedAt (datetime)`, `endedAt (datetime)`
  * `automations` — fields: `userId (string)`, `name (string)`, `description (string?)`, `status (enum: active|paused)`, `trigger (string)`, `action (string)`

3. Permissions: documents readable/writable by owner (userId).

4. Optional Function `insights`: aggregate sessions and return JSON to the UI. Call from React using your function client or a small backend wrapper.

## 🧩 Integrations & Extensibility

* **OpenAI / Gemini**: optional for richer insights (server-side recommended for API key safety)
* **Calendar / iCal export**: export session summaries to calendars
* **Pomodoro presets** and **Theme toggles** (dark/light)

## ✅ Deployment

Recommended hosts: **Vercel**, **Netlify**, **Cloudflare Pages**, **GitHub Pages**.

**Netlify quick deploy**

1. Build: `npm run build`
2. Deploy the `dist` (or `build`) folder to Netlify
3. The demo site is available at: [https://quickspace007.netlify.app/](https://quickspace007.netlify.app/)

## 🛠 CLI & Scripts

* `npm run dev` — Start local dev server
* `npm run build` — Build production bundle
* `npm run preview` — Preview production build locally (if configured)

## ♻️ Accessibility & Performance

* Use semantic HTML and ARIA attributes on interactive controls.
* Lazy-load the Spline iframe and heavy components.
* Use `prefers-reduced-motion` to disable non-essential motion.

## 🔮 Roadmap (Prioritized)

1. LocalStorage / IndexedDB persistent sync
2. Dark/Light theme with auto-detect
3. Export/Import sessions & CSV export
4. Pomodoro modes and shortcuts
5. Calendar view and session heatmaps
6. Optional server-side AI insights (secure API keys)

## 📦 Contributing

Contributions welcome! Please:

1. Open an issue describing the change.
2. Fork → feature branch → PR with a clear title & description.
3. Keep changes small and focused; add tests where applicable.

## 📝 License

MIT — feel free to use, modify and ship commercially.

---

If you'd like, I can also:

* export this README as `README.md` file,
* add a `LICENSE` file,
* prepare a small `netlify.toml` for the demo,
* or convert this into a ready-to-publish GitHub repo README with badges and screenshots.

Tell me which one and I’ll add it to the repo.
