/** Bubbles character images in public/assets (use all 10) */
export const BUBBLES_IMAGES = [
  '/assets/Bubbles1.png',
  '/assets/Bubbles2.png',
  '/assets/Bubbles3.jpg',
  '/assets/Bubbles4.png',
  '/assets/Bubbles5.png',
  '/assets/Bubbles6.png',
  '/assets/Bubbles7.png',
  '/assets/Bubbles8.png',
  '/assets/Bubbles9.png',
  '/assets/Bubbles10.jpg',
] as const

export const BUBBLES_MAIN_IMAGE = BUBBLES_IMAGES[0]!

/** Pastel glow colors for each bubble (cycle by index) */
export const BUBBLE_PASTEL_COLORS = [
  { bg: 'rgba(255, 182, 230, 0.5)', glow: 'rgba(255, 182, 230, 0.8)', border: 'rgba(255, 182, 230, 0.9)' },   // pink
  { bg: 'rgba(179, 229, 252, 0.5)', glow: 'rgba(179, 229, 252, 0.8)', border: 'rgba(179, 229, 252, 0.9)' },   // sky
  { bg: 'rgba(197, 202, 233, 0.5)', glow: 'rgba(197, 202, 233, 0.8)', border: 'rgba(197, 202, 233, 0.9)' },   // lavender
  { bg: 'rgba(255, 204, 188, 0.5)', glow: 'rgba(255, 204, 188, 0.8)', border: 'rgba(255, 204, 188, 0.9)' },   // peach
  { bg: 'rgba(178, 223, 219, 0.5)', glow: 'rgba(178, 223, 219, 0.8)', border: 'rgba(178, 223, 219, 0.9)' },   // mint
  { bg: 'rgba(209, 196, 233, 0.5)', glow: 'rgba(209, 196, 233, 0.8)', border: 'rgba(209, 196, 233, 0.9)' },   // light purple
  { bg: 'rgba(255, 236, 179, 0.5)', glow: 'rgba(255, 236, 179, 0.8)', border: 'rgba(255, 236, 179, 0.9)' },   // soft yellow
  { bg: 'rgba(179, 224, 255, 0.5)', glow: 'rgba(179, 224, 255, 0.8)', border: 'rgba(179, 224, 255, 0.9)' },   // light blue
  { bg: 'rgba(248, 187, 208, 0.5)', glow: 'rgba(248, 187, 208, 0.8)', border: 'rgba(248, 187, 208, 0.9)' },   // rose
  { bg: 'rgba(185, 246, 202, 0.5)', glow: 'rgba(185, 246, 202, 0.8)', border: 'rgba(185, 246, 202, 0.9)' },   // light green
] as const
