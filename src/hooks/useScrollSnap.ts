// Section-by-section scroll snap
// Each wheel/touch gesture scrolls exactly one snap point forward or back.
// Snap point positions are read from the DOM at scroll time so they're always accurate.

import { useEffect, useRef } from 'react'

const COOLDOWN = 900  // ms between snaps — must cover the smooth-scroll duration
const DELTA_THRESHOLD = 5  // ignore tiny trackpad micro-events below this deltaY

export function useScrollSnap(snapIds: string[]) {
  const busy = useRef(false)
  const touchStartY = useRef(0)

  useEffect(() => {
    // Get absolute Y of a snap element (works for absolute/relative/static positioned elements)
    const absTop = (el: HTMLElement) => el.getBoundingClientRect().top + window.scrollY

    // Find the snap index whose top is closest to the current scroll position
    const currentIdx = (): number => {
      const els = snapIds.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[]
      const scrollMid = window.scrollY + window.innerHeight * 0.2  // slightly below top
      let best = 0
      let bestDist = Infinity
      els.forEach((el, i) => {
        const dist = Math.abs(absTop(el) - scrollMid)
        if (dist < bestDist) { bestDist = dist; best = i }
      })
      return best
    }

    const go = (dir: 1 | -1) => {
      if (busy.current) return
      const els = snapIds.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[]
      const idx = currentIdx()
      const next = Math.max(0, Math.min(els.length - 1, idx + dir))
      if (next === idx) return
      busy.current = true
      window.scrollTo({ top: absTop(els[next]), behavior: 'smooth' })
      setTimeout(() => { busy.current = false }, COOLDOWN)
    }

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < DELTA_THRESHOLD) return
      e.preventDefault()
      go(e.deltaY > 0 ? 1 : -1)
    }

    const onTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY
    }

    const onTouchEnd = (e: TouchEvent) => {
      const delta = touchStartY.current - e.changedTouches[0].clientY
      if (Math.abs(delta) < 30) return  // ignore taps
      e.preventDefault()
      go(delta > 0 ? 1 : -1)
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') { e.preventDefault(); go(1) }
      if (e.key === 'ArrowUp'   || e.key === 'PageUp'  ) { e.preventDefault(); go(-1) }
    }

    window.addEventListener('wheel',      onWheel,      { passive: false })
    window.addEventListener('touchstart', onTouchStart, { passive: true  })
    window.addEventListener('touchend',   onTouchEnd,   { passive: false })
    window.addEventListener('keydown',    onKeyDown)

    return () => {
      window.removeEventListener('wheel',      onWheel)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchend',   onTouchEnd)
      window.removeEventListener('keydown',    onKeyDown)
    }
  }, [snapIds])
}
