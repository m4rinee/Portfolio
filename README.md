# Mariane Panaligan — Portfolio v2

A professional redesign built with **React 18**, **Vite 5**, and **Tailwind CSS 3**.

## Design Direction
Dark editorial aesthetic — deep navy background, crisp offwhite typography, mint/teal accent. Inspired by high-end design studio portfolios.

---

## 🚀 Setup

```bash
npm install
npm run dev       # localhost:5173
npm run build     # production build → /dist
npm run preview   # preview production build
```

---

## 📸 Adding Your Profile Photo

1. Place your photo at **`/public/profile.jpg`** (or `.png`, `.webp`)
2. Open `src/components/Hero.jsx`
3. Find the comment block that says `── SWAP THIS BLOCK WITH YOUR PHOTO ──`
4. Replace the inner `<div>` with:
```jsx
<img src="/profile.jpg" alt="Mariane Panaligan" className="w-full h-full object-cover object-top" />
```

---

## 📄 Resume Download

1. Add your resume PDF at **`/public/resume.pdf`**
2. The "Download Résumé" button in the Skills section will automatically link to it

---

## 🎨 Color Tokens (`tailwind.config.js`)

| Token       | Hex       | Usage               |
|-------------|-----------|---------------------|
| `navy`      | `#0A0F1E` | Main background     |
| `mint`      | `#5FFBF1` | Primary accent      |
| `offwhite`  | `#EEF0F5` | Heading text        |
| `muted`     | `#8892A4` | Body / label text   |
| `border`    | `#1E2D4A` | Card / line borders |

---

## 📁 File Structure

```
src/
├── components/
│   ├── Navbar.jsx    # Sticky nav with frosted glass
│   ├── Hero.jsx      # Landing: typewriter, avatar, stats
│   ├── About.jsx     # Bio + timeline
│   ├── Projects.jsx  # Project cards with links
│   ├── Skills.jsx    # Skill grid + proficiency bars
│   └── Contact.jsx   # Form + socials + footer
├── useInView.js      # Scroll reveal hook
├── App.jsx
├── main.jsx
└── index.css
public/
├── profile.jpg       ← Add your photo here
└── resume.pdf        ← Add your resume here
```

---

## 🌐 Deployment

**Vercel (recommended):**
```bash
npm run build
# Push to GitHub → Import on vercel.com → Auto-deploys
```

**GitHub Pages:**
Add `base: '/Portfolio/'` to `vite.config.js`, then `npm run build` and push `/dist` to `gh-pages` branch.
