import * as Md from 'react-icons/md'
import type { IconType } from 'react-icons'

const ICON_MAP: Record<string, IconType> = {
  MdSmartToy: Md.MdSmartToy,
  MdCode: Md.MdCode,
  MdHub: Md.MdHub,
  MdSportsEsports: Md.MdSportsEsports,
  MdBuild: Md.MdBuild,
  MdPalette: Md.MdPalette,
  MdCloud: Md.MdCloud,
  MdAnalytics: Md.MdAnalytics,
  MdVideocam: Md.MdVideocam,
  MdSmartphone: Md.MdSmartphone,
  MdRocketLaunch: Md.MdRocketLaunch,
  MdCelebration: Md.MdCelebration,
  MdAutoAwesome: Md.MdAutoAwesome,
  MdScience: Md.MdScience,
  MdStar: Md.MdStar,
  MdAutoFixHigh: Md.MdAutoFixHigh,
}

export function getIcon(name: string): IconType {
  return ICON_MAP[name] ?? Md.MdStar
}
