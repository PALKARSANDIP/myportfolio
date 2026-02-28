# Sandip Palkar — Portfolio

A clean, modern, dark/light themed portfolio built with **Next.js 14** + **Tailwind CSS**.

---

## 🗂 Folder Structure

```
portfolio/
├── app/
│   ├── globals.css       # Global styles + Google Fonts
│   ├── layout.tsx        # Root layout with ThemeProvider
│   └── page.tsx          # Main page (assembles all sections)
├── components/
│   ├── ThemeProvider.tsx  # Dark/light mode provider
│   ├── Navbar.tsx         # Navigation + theme toggle
│   ├── Hero.tsx           # Hero with typewriter effect
│   ├── About.tsx          # About me + stats
│   ├── Skills.tsx         # Tech stack + skill bars
│   ├── Experience.tsx     # Work timeline
│   ├── Projects.tsx       # Project cards
│   ├── Contact.tsx        # Contact form + links
│   └── Footer.tsx         # Footer
├── public/
│   └── photo.jpg          # ← Add your photo here!
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.mjs
```

---

## 🚀 Setup Steps

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### 3. Add your photo
- Copy your profile photo to `/public/photo.jpg`
- Then in `components/About.tsx`, replace the placeholder div with:
```tsx
<Image
  src="/photo.jpg"
  alt="Sandip Palkar"
  width={192}
  height={192}
  className="w-48 h-48 rounded-2xl object-cover border-2 border-accent/30"
/>
```
- Also add `import Image from "next/image";` at the top of `About.tsx`

---

## 🌐 Deploy to Vercel (Free)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Click Deploy — done! ✅

Your portfolio will be live at `your-name.vercel.app`

---

## ✏️ How to Update Content

| What to change | File |
|---|---|
| Your name, title, summary | `components/Hero.tsx` |
| About me text | `components/About.tsx` |
| Skills & percentages | `components/Skills.tsx` |
| Work experience | `components/Experience.tsx` |
| Projects | `components/Projects.tsx` |
| Contact info | `components/Contact.tsx` |

---

## 🎨 Color Customization

The accent color (green `#00FF94`) is set in:
- `tailwind.config.ts` → `colors.accent`
- `app/globals.css` → `:root { --accent: #00FF94; }`

Change both to your preferred color.
