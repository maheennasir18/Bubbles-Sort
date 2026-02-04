import { useEffect, useState } from 'react'

const HEARTS = ['💕', '💗', '💖', '✨', '💝', '⭐', '🌟', '✧', '✦', '💫']
const DURATION_MS = 2400

interface Particle {
  id: number
  left: number
  delay: number
  emoji: string
}

export function SuccessCelebration({ active }: { active: boolean }) {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    if (!active) {
      setParticles([])
      return
    }
    const next: Particle[] = Array.from({ length: 20 }, (_, i) => ({
      id: Date.now() + i,
      left: 10 + Math.random() * 80,
      delay: Math.random() * 300,
      emoji: HEARTS[i % HEARTS.length],
    }))
    setParticles(next)
    const t = setTimeout(() => setParticles([]), DURATION_MS)
    return () => clearTimeout(t)
  }, [active])

  if (particles.length === 0) return null

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-50 flex items-center justify-center"
      aria-hidden
    >
      <div className="absolute inset-0 flex items-end justify-center">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute animate-heart-float sparkle-filter text-2xl"
            style={{
              left: `${p.left}%`,
              animationDelay: `${p.delay}ms`,
              animationDuration: `${DURATION_MS}ms`,
            }}
          >
            {p.emoji}
          </div>
        ))}
      </div>
    </div>
  )
}
