import { useMemo } from 'react'

const SPARKLES = ['✨', '⭐', '🌟', '✧', '✦', '💫']
const COUNT = 24

interface Particle {
  id: number
  left: number
  top: number
  size: number
  delay: number
  duration: number
  emoji: string
}

export function SparkleBackground() {
  const particles = useMemo(() => {
    return Array.from({ length: COUNT }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 12 + Math.random() * 16,
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 2,
      emoji: SPARKLES[i % SPARKLES.length],
    }))
  }, [])

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden
    >
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute animate-sparkle-float sparkle-filter opacity-80"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            fontSize: `${p.size}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        >
          {p.emoji}
        </div>
      ))}
    </div>
  )
}
