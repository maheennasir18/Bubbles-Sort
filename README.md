# Bubble's Bubble Sorting ✨

A cute drag-and-drop game: sort tech bubbles into **Future Tech**, **Fun Tech**, **Creative**, and **Science**. Includes bubble images, sounds, sparkle effects, and PWA support so you can install and play on mobile.

## Features

- **Drag & drop** — Move bubbles from the pool into the correct category zones
- **Feedback** — Correct drops play a sound and celebration; wrong drops give gentle feedback
- **PWA** — Install on your phone and use like an app (works offline when cached)
- **Responsive** — Works on desktop and mobile

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Use on mobile (Android & iPhone)

The app is a **PWA** — you can install it on your phone and open it like an app.

### Important

- Open the app in your **browser** over **HTTPS** (e.g. your deployed URL or a tunnel like ngrok).
- The in-app banner on mobile shows step-by-step instructions; you can dismiss it with ✕.

### iPhone / iPad (Safari)

1. Open the app in **Safari**.
2. Tap the **Share** button (□↑) at the bottom.
3. Scroll and tap **“Add to Home Screen”**.
4. Tap **Add**. The Bubbles icon appears on your home screen; open it to use the app full screen.

### Android (Chrome)

1. Open the app in **Chrome**.
2. Tap the **⋮** menu (top right).
3. Tap **“Install app”** or **“Add to Home screen”**.
4. Confirm. The app is added to your home screen and can open in full screen.

After installing, you can use it offline (cached) and from your home screen like a normal app.

## Deploy for mobile testing

To test the PWA on your phone, you need a **public HTTPS URL**:

- Deploy to **Vercel**, **Netlify**, **GitHub Pages**, or similar, then open that URL on your phone, or
- Use **ngrok**: `npx ngrok http 5173` and open the `https://…` URL on your phone.

Then follow the steps above for your device.

## Tech stack

- **React 18** + **TypeScript**
- **Vite** — build and dev server
- **Tailwind CSS** — styling
- **Framer Motion** — animations
- **vite-plugin-pwa** — PWA and offline support

## Scripts

| Command           | Description              |
|------------------|--------------------------|
| `npm run dev`    | Start dev server         |
| `npm run build`  | Production build         |
| `npm run preview`| Preview production build |
| `npm run lint`   | Run ESLint               |
