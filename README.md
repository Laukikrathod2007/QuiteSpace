# QuietSpace ✨

**An intelligent productivity and automation dashboard**  
_"Focus Meets Intelligent Automation"_

Built with React, TypeScript, Tailwind CSS, and Framer Motion.

---

## 🎯 Features

✅ **Spline 3D Hero** - Immersive 3D interactive landing experience  
✅ **Focus Session Tracking** - Real-time timer with local session history  
✅ **Smart Automations** - Create and manage intelligent workflows  
✅ **AI Insights** - Productivity analysis and recommendations  
✅ **Glassmorphic Design** - Premium luxury UI with glass effects  
✅ **No Setup Required** - Works instantly without authentication  
✅ **Client-Side Storage** - All data stored locally in your browser  

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

That's it! No backend setup, no API keys, no configuration required.

---

## 🎨 Design System

**Premium Glassmorphic Aesthetic**

- **Font**: Inter (300-700 weights)
- **Colors**: Soft blues, purples, gradient overlays
- **Effects**: Glass cards with backdrop blur
- **Animations**: Framer Motion scroll & hover effects
- **Buttons**: Neumorphic glow with 3D depth
- **Icons**: Lucide React

**Key Classes:**
- `.glass-card` - Glassmorphic card effect
- `.neuro-button` - 3D neumorphic button
- `.hover-scale` - Interactive scale animation
- `.animate-fade-in` - Smooth entry animation

---

## 📁 Project Structure

```
src/
├── components/
│   ├── landing/          # Landing page sections
│   │   ├── TestimonialsSection.tsx
│   │   ├── HowItWorksSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   └── Footer.tsx
│   ├── dashboard/        # Dashboard components
│   │   └── SessionModal.tsx
│   ├── ui/              # Reusable UI components
│   │   ├── GlassCard.tsx
│   │   ├── GlowButton.tsx
│   │   └── ... (shadcn components)
│   └── Navigation.tsx
├── pages/
│   ├── Index.tsx         # Landing page with Spline 3D
│   ├── Dashboard.tsx     # Main dashboard
│   ├── Automations.tsx   # Automation management
│   ├── Insights.tsx      # AI insights
│   └── Settings.tsx      # App settings
├── lib/
│   └── utils.ts
└── index.css             # Global styles & design tokens
```

---

## 💾 Data Storage

All data is stored locally in your browser using React state. Sessions and automations are preserved during your browsing session but reset on page refresh. 

To add persistent storage, you can integrate:
- **LocalStorage** for simple client-side persistence
- **IndexedDB** for larger datasets
- **Appwrite/Supabase** for cloud sync and multi-device access

---

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **UI Components**: shadcn/ui, Radix UI
- **Icons**: Lucide React
- **Build Tool**: Vite
- **3D Graphics**: Spline (embedded iframe)

---

## 📦 Deployment

### Recommended Platforms
- **Vercel** (recommended for best performance)
- **Netlify**
- **Cloudflare Pages**
- **GitHub Pages**

### Deployment Steps
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting platform
3. No environment variables or backend setup required!

---

## 🔮 Future Enhancements

- [ ] LocalStorage/IndexedDB for persistent data
- [ ] OpenAI/Gemini AI integration for real insights
- [ ] Export/Import sessions data
- [ ] Dark/Light theme toggle
- [ ] Pomodoro timer integration
- [ ] Calendar view for sessions
- [ ] Statistics and charts
- [ ] Mobile responsive improvements

---

## 📄 License

MIT License - Feel free to use for personal or commercial projects

---

## 🤝 Contributing

Contributions welcome! Please open an issue or submit a PR.

---

**Built with ❤️ using Lovable**

## Appwrite Setup

Add the following to your `.env.local` (Vite uses import.meta.env with VITE_ prefix):

```
VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your_project_id
```

Create a database and collections:
- Database ID: quietspace (or your choice)
- Collections:
  - focusSessions: fields { userId (string, indexed), title (string), notes (string, optional), durationSec (int), startedAt (datetime), endedAt (datetime) }
  - automations: fields { userId (string), name (string), description (string, optional), status (enum: active/paused), trigger (string), action (string) }

Permissions: set documents readable/writable by owner (the userId).

Functions (optional but recommended):
- Create a Function `insights` that aggregates past sessions and returns JSON.
- Call it from the UI via `useInsights({ functionId: '<FUNCTION_ID>' })`.
