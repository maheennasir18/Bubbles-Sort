import type { TechTrend } from '@/types/game'

/** 10 trends = 10 Bubbles images (one per trend). 4 categories. */
export const TECH_TRENDS: TechTrend[] = [
  { id: 'ai', label: 'AI', emoji: '🤖', category: 'future', iconName: 'MdSmartToy' },
  { id: 'react', label: 'React', emoji: '⚛️', category: 'fun', iconName: 'MdCode' },
  { id: 'web3', label: 'Web3', emoji: '🔗', category: 'future', iconName: 'MdHub' },
  { id: 'gaming', label: 'Gaming', emoji: '🎮', category: 'fun', iconName: 'MdSportsEsports' },
  { id: 'robotics', label: 'Robotics', emoji: '🦾', category: 'future', iconName: 'MdBuild' },
  { id: 'design', label: 'Design', emoji: '🎨', category: 'creative', iconName: 'MdPalette' },
  { id: 'cloud', label: 'Cloud', emoji: '☁️', category: 'science', iconName: 'MdCloud' },
  { id: 'data', label: 'Data', emoji: '📊', category: 'science', iconName: 'MdAnalytics' },
  { id: 'vr', label: 'VR/AR', emoji: '🥽', category: 'creative', iconName: 'MdVideocam' },
  { id: 'mobile', label: 'Mobile', emoji: '📱', category: 'fun', iconName: 'MdSmartphone' },
]

export const CATEGORY_LABELS: Record<TechTrend['category'], { title: string; emoji: string; iconName: string }> = {
  future: { title: 'Future Tech', emoji: '🚀', iconName: 'MdRocketLaunch' },
  fun: { title: 'Fun Tech', emoji: '🎉', iconName: 'MdCelebration' },
  creative: { title: 'Creative', emoji: '✨', iconName: 'MdAutoAwesome' },
  science: { title: 'Science', emoji: '🔬', iconName: 'MdScience' },
}
