import { motion } from 'framer-motion'
import type { TechTrend } from '@/types/game'
import { BUBBLES_IMAGES, BUBBLE_PASTEL_COLORS } from '@/constants/bubblesImages'
import { getIcon } from '@/utils/icons'

interface DraggableBubbleProps {
  trend: TechTrend
  imageIndex: number
  isCorrect?: boolean
}

export function DraggableBubble({ trend, imageIndex, isCorrect }: DraggableBubbleProps) {
  const Icon = getIcon(trend.iconName)
  const colors = BUBBLE_PASTEL_COLORS[imageIndex % BUBBLE_PASTEL_COLORS.length]
  const imageSrc = BUBBLES_IMAGES[imageIndex % BUBBLES_IMAGES.length]

  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData('text/plain', trend.id)
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('application/json', JSON.stringify({ id: trend.id, category: trend.category }))
  }

  const handleDragEnd = (e: React.DragEvent) => {
    ;(e.currentTarget as HTMLElement).style.opacity = '1'
  }

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        y: [0, -6, 0],
      }}
      transition={{
        scale: { type: 'spring', stiffness: 300, damping: 20 },
        opacity: { duration: 0.3 },
        y: { repeat: Infinity, duration: 2.5 + (imageIndex % 3) * 0.5, ease: 'easeInOut' },
      }}
      whileHover={{ scale: 1.08 }}
      className="relative cursor-grab active:cursor-grabbing touch-none"
      style={{ originX: 0.5, originY: 0.5 }}
    >
      <div
        draggable
        onDragStart={(e) => {
          (e.currentTarget as HTMLElement).style.opacity = '0.85'
          handleDragStart(e)
        }}
        onDragEnd={handleDragEnd}
        role="button"
        tabIndex={0}
        aria-label={`Drag ${trend.label} to its category`}
        className="w-full h-full"
      >
        <motion.div
          whileTap={{ scale: 0.98 }}
          className="relative rounded-full overflow-visible flex flex-col items-center justify-center p-2 sparkle-overlay border-2 w-[6rem] h-[6rem] sm:w-[6.75rem] sm:h-[6.75rem] min-w-0"
          style={{
            background: colors.bg,
            borderColor: colors.border,
            boxShadow: `
              0 0 20px ${colors.glow},
              0 0 40px ${colors.glow},
              inset 0 0 20px rgba(255,255,255,0.25)
            `,
          }}
          animate={isCorrect ? { scale: [1, 1.15, 1] } : {}}
          transition={isCorrect ? { duration: 0.4, ease: 'easeOut' } : {}}
        >
          <img
            src={imageSrc}
            alt=""
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover object-top flex-shrink-0 pointer-events-none"
            style={{
              filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.6))',
            }}
            onError={(ev) => {
              const t = ev.target as HTMLImageElement
              if (imageIndex >= 9) t.src = BUBBLES_IMAGES[0]
            }}
          />
          <div className="flex items-center justify-center gap-0.5 mt-0.5 w-full min-w-0">
            <Icon className="text-gray-600 w-3 h-3 flex-shrink-0" aria-hidden />
            <span className="text-[10px] font-bold text-gray-700 drop-shadow-sm leading-none truncate max-w-[3.5rem]">
              {trend.emoji} {trend.label}
            </span>
          </div>
        </motion.div>
      </div>
      {isCorrect && (
        <motion.div
          className="absolute inset-0 rounded-full pointer-events-none border-2 border-green-400"
          initial={{ scale: 1, opacity: 0.8 }}
          animate={{ scale: 1.2, opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{ boxShadow: '0 0 20px rgba(74, 222, 128, 0.6)' }}
        />
      )}
    </motion.div>
  )
}
