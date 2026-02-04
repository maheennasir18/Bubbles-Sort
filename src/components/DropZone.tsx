import type { TechCategory } from '@/types/game'
import { CATEGORY_LABELS } from '@/constants/game'
import { getIcon } from '@/utils/icons'

interface DropZoneProps {
  category: TechCategory
  children: React.ReactNode
  onDrop: (trendId: string, expectedCategory: TechCategory) => void
  isOver?: boolean
}

export function DropZone({ category, children, onDrop, isOver }: DropZoneProps) {
  const { title, iconName } = CATEGORY_LABELS[category]
  const Icon = getIcon(iconName)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const id = e.dataTransfer.getData('text/plain')
    if (id) onDrop(id, category)
  }

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className={`
        min-h-[120px] sm:min-h-[140px] rounded-2xl border-2 border-dashed
        flex flex-wrap items-center justify-center gap-2 p-3 transition-colors
        sparkle-zone
        ${isOver ? 'border-pink-400 bg-pink-50/80' : 'border-pink-200/80 bg-white/50'}
      `}
    >
      <div className="w-full flex items-center justify-center gap-2 mb-1">
        <Icon className="w-5 h-5 text-pink-500 sparkle-filter" />
        <span className="text-base font-bold text-gray-600">{title}</span>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {children}
      </div>
    </div>
  )
}
