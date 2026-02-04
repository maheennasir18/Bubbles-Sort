export type TechCategory = 'future' | 'fun' | 'creative' | 'science'

export interface TechTrend {
  id: string
  label: string
  emoji: string
  category: TechCategory
  /** react-icons/md icon name for Material icon */
  iconName: string
}

export type DropZoneId = TechCategory | 'pool'
