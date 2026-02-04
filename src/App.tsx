import { useCallback, useState } from 'react'
import { DraggableBubble } from '@/components/DraggableBubble'
import { DropZone } from '@/components/DropZone'
import { PoolArea } from '@/components/PoolArea'
import { SparkleBackground } from '@/components/SparkleBackground'
import { InstallHint } from '@/components/InstallHint'
import { SuccessCelebration } from '@/components/SuccessCelebration'
import { TECH_TRENDS } from '@/constants/game'
import type { TechCategory } from '@/types/game'
import { playCorrectSound, playWrongSound } from '@/utils/sound'

type Placement = TechCategory | 'pool'

const CATEGORIES: TechCategory[] = ['future', 'fun', 'creative', 'science']

function App() {
  const [placements, setPlacements] = useState<Record<string, Placement>>(() =>
    Object.fromEntries(TECH_TRENDS.map((t) => [t.id, 'pool' as Placement]))
  )
  const [lastCorrectId, setLastCorrectId] = useState<string | null>(null)
  const [showCelebration, setShowCelebration] = useState(false)
  const [themeEffect, setThemeEffect] = useState<'correct' | 'wrong' | null>(null)

  const handleDropZone = useCallback((trendId: string, zoneCategory: TechCategory) => {
    const trend = TECH_TRENDS.find((t) => t.id === trendId)
    if (!trend) return
    setPlacements((prev) => ({ ...prev, [trendId]: zoneCategory }))
    if (zoneCategory === trend.category) {
      setLastCorrectId(trendId)
      setShowCelebration(true)
      setThemeEffect('correct')
      playCorrectSound()
      setTimeout(() => setShowCelebration(false), 400)
      setTimeout(() => setThemeEffect(null), 1200)
    } else {
      setThemeEffect('wrong')
      playWrongSound()
      setTimeout(() => setThemeEffect(null), 1200)
    }
  }, [])

  const handleTouchDrop = useCallback((trendId: string, clientX: number, clientY: number) => {
    const el = document.elementFromPoint(clientX, clientY)
    const zoneEl = el?.closest?.('[data-drop-zone]')
    const zone = zoneEl?.getAttribute('data-drop-zone')
    if (zone === 'pool') {
      setPlacements((prev) => ({ ...prev, [trendId]: 'pool' }))
      return
    }
    if (zone && CATEGORIES.includes(zone as TechCategory)) {
      handleDropZone(trendId, zone as TechCategory)
    }
  }, [handleDropZone])

  const inZone = (zone: TechCategory) =>
    TECH_TRENDS.filter((t) => placements[t.id] === zone)
  const inPool = TECH_TRENDS.filter((t) => placements[t.id] === 'pool')

  const allCorrect =
    TECH_TRENDS.every((t) => placements[t.id] === t.category) &&
    TECH_TRENDS.every((t) => placements[t.id] !== 'pool')

  return (
    <div
      className={`min-h-screen bubbles-bg font-cute flex flex-col items-center py-6 px-4 relative sparkle-dust theme-root ${themeEffect ? `theme-effect-${themeEffect}` : ''}`}
    >
      {themeEffect && (
        <div
          className={`theme-overlay theme-overlay-${themeEffect}`}
          aria-hidden
        />
      )}
      <SparkleBackground />

      <header className="text-center mb-6 relative z-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-blue-400 to-yellow-400 drop-shadow-sm sparkle-filter">
        ✨ Bubble's Bubble Sorting ✨
        </h1>
        <p className="text-gray-500 mt-1 text-sm sm:text-base">
          Sort tech bubbles into the right category!
        </p>
      </header>

      <main className="w-full space-y-5 relative z-10">
        <PoolArea
          inPool={inPool}
          lastCorrectId={lastCorrectId}
          onDropToPool={(trendId) => {
            setPlacements((prev) => ({ ...prev, [trendId]: 'pool' }))
          }}
          onTouchDrop={handleTouchDrop}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CATEGORIES.map((category) => (
            <DropZone key={category} category={category} onDrop={handleDropZone}>
              {inZone(category).map((trend) => (
                <DraggableBubble
                  key={trend.id}
                  trend={trend}
                  imageIndex={TECH_TRENDS.indexOf(trend)}
                  isCorrect={lastCorrectId === trend.id}
                  onTouchEnd={(x, y) => handleTouchDrop(trend.id, x, y)}
                />
              ))}
            </DropZone>
          ))}
        </div>

        {allCorrect && (
          <div className="text-center py-4 px-4 rounded-2xl bg-green-50 border-2 border-green-200 animate-glitter sparkle-filter">
            <p className="text-green-700 font-bold text-lg">🎉🎉 You did it! All sorted! 🎉🎉</p>
          </div>
        )}
      </main>

      <SuccessCelebration active={showCelebration} />
      <InstallHint />

      <footer className="mt-8 text-center text-gray-400 text-xs relative z-10">
        Drag bubbles into the right category · Cute &amp; fun
      </footer>
    </div>
  )
}

export default App
