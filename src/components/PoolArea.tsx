import type { TechTrend } from '@/types/game'
import { DraggableBubble } from '@/components/DraggableBubble'
import { TECH_TRENDS } from '@/constants/game'

interface PoolAreaProps {
  inPool: TechTrend[]
  lastCorrectId: string | null
  onDropToPool: (trendId: string) => void
  onTouchDrop?: (trendId: string, clientX: number, clientY: number) => void
}

export function PoolArea({ inPool, lastCorrectId, onDropToPool, onTouchDrop }: PoolAreaProps) {
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
  }
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const id = e.dataTransfer.getData('text/plain')
    if (id) onDropToPool(id)
  }

  return (
    <section>
      <h2 className="text-center font-bold text-gray-600 mb-2 text-sm uppercase tracking-wide sparkle-filter">
        🫧 Drag from here (or drop back)
      </h2>
      <div
        data-drop-zone="pool"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className="flex flex-wrap justify-center gap-3 min-h-[100px] p-4 rounded-2xl bg-white/50 border-2 border-dashed border-pink-200 sparkle-zone transition-colors hover:border-pink-300"
      >
        {inPool.map((trend) => (
          <DraggableBubble
            key={trend.id}
            trend={trend}
            imageIndex={TECH_TRENDS.indexOf(trend)}
            isCorrect={lastCorrectId === trend.id}
            onTouchEnd={onTouchDrop ? (x, y) => onTouchDrop(trend.id, x, y) : undefined}
          />
        ))}
        {inPool.length === 0 && (
          <p className="text-gray-400 text-sm self-center">All sorted! Drag from zones to put back.</p>
        )}
      </div>
    </section>
  )
}
