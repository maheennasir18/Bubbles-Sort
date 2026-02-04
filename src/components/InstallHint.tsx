import { useState, useEffect } from 'react'

/** Detect if running as standalone PWA (already installed) */
function isStandalone(): boolean {
  if (typeof window === 'undefined') return false
  return (
    (window.navigator as unknown as { standalone?: boolean }).standalone === true ||
    window.matchMedia('(display-mode: standalone)').matches ||
    (window as unknown as { matchMedia?: (q: string) => { matches: boolean } }).matchMedia?.('(display-mode: standalone)')?.matches === true
  )
}

/** Rough mobile detection for showing install hint */
function isMobile(): boolean {
  if (typeof window === 'undefined') return false
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

export function InstallHint() {
  const [dismissed, setDismissed] = useState(false)
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (isStandalone() || dismissed) {
      setShow(false)
      return
    }
    if (isMobile()) setShow(true)
  }, [dismissed])

  if (!show) return null

  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
  const isAndroid = /Android/.test(navigator.userAgent)

  return (
    <div className="fixed bottom-4 left-4 right-4 z-20 mx-auto max-w-sm rounded-2xl border-2 border-pink-200 bg-white/95 p-4 shadow-xl backdrop-blur sm:left-auto sm:right-4">
      <div className="mb-2 flex items-center justify-between">
        <span className="font-bold text-pink-600">📱 Add to Home Screen</span>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="rounded-full p-1 text-gray-400 hover:bg-pink-100 hover:text-gray-600"
          aria-label="Dismiss"
        >
          ✕
        </button>
      </div>
      <p className="text-sm text-gray-600">
        {isIOS && (
          <>
            <strong>iPhone / iPad:</strong> Tap the <strong>Share</strong> button (□↑) at the bottom of Safari, then tap <strong>“Add to Home Screen”</strong>.
          </>
        )}
        {isAndroid && (
          <>
            <strong>Android:</strong> Tap the <strong>⋮</strong> menu in Chrome, then <strong>“Install app”</strong> or <strong>“Add to Home screen”</strong>.
          </>
        )}
        {!isIOS && !isAndroid && (
          <>
            Use your browser’s menu to <strong>Add to Home screen</strong> or <strong>Install app</strong>.
          </>
        )}
      </p>
    </div>
  )
}
