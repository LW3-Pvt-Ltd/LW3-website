// Section-by-section scroll snap
// Each wheel/touch gesture scrolls exactly one snap point forward or back.
// Snap point positions are read from the DOM at scroll time so they're always accurate.
// freeScrollIds: sections that allow continuous scrolling within them (no mid-section snap).

import { useEffect, useRef } from 'react'

const COOLDOWN = 900  // ms between snaps — must cover the smooth-scroll duration
const DELTA_THRESHOLD = 5  // ignore tiny trackpad micro-events below this deltaY

export function useScrollSnap(snapIds: string[], freeScrollIds: string[] = []) {
  const busy = useRef(false)
  const touchStartY = useRef(0)
  const wasInFreeScroll = useRef(false)
  const exitedFreeId = useRef<string | null>(null)

  useEffect(() => {
    const absTop = (el: HTMLElement) => el.getBoundingClientRect().top + window.scrollY

    const currentIdx = (): number => {
      const els = snapIds.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[]
      const scrollMid = window.scrollY + window.innerHeight * 0.2
      let best = 0
      let bestDist = Infinity
      els.forEach((el, i) => {
        const dist = Math.abs(absTop(el) - scrollMid)
        if (dist < bestDist) { bestDist = dist; best = i }
      })
      return best
    }

    // Returns true when the wheel/key event should be passed through as natural scroll.
    // Uses section bounds directly — not currentIdx() — so it works anywhere inside the section.
    const isFreeScrolling = (dir: 1 | -1): boolean => {
      for (const freeId of freeScrollIds) {
        const freeEl = document.getElementById(freeId)
        if (!freeEl) continue
        const sectionTop = absTop(freeEl)
        const freeIdx = snapIds.indexOf(freeId)
        const nextEl = snapIds[freeIdx + 1] ? document.getElementById(snapIds[freeIdx + 1]) : null
        const sectionBottom = nextEl ? absTop(nextEl) : Infinity

        // Are we currently scrolled within this free zone?
        if (window.scrollY >= sectionTop - 10 && window.scrollY < sectionBottom) {
          if (dir === 1) {
            const still = window.scrollY + window.innerHeight < sectionBottom
            if (still) { wasInFreeScroll.current = true; exitedFreeId.current = freeId }
            return still
          } else {
            const still = window.scrollY > sectionTop + window.innerHeight * 0.3
            if (still) { wasInFreeScroll.current = true; exitedFreeId.current = freeId }
            return still
          }
        }
      }
      return false
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
      const dir = e.deltaY > 0 ? 1 : -1
      const free = isFreeScrolling(dir)

      if (free) {
        wasInFreeScroll.current = true
        return  // let browser handle naturally
      }

      // Just exited a free-scroll zone — snap directly to the adjacent snap point of that
      // zone (not currentIdx()+1, which is wrong when currentIdx already jumped ahead).
      if (wasInFreeScroll.current) {
        wasInFreeScroll.current = false
        if (busy.current) { e.preventDefault(); return }
        const freeId = exitedFreeId.current
        exitedFreeId.current = null
        const freeIdx = freeId ? snapIds.indexOf(freeId) : -1
        const targetId = freeIdx >= 0
          ? snapIds[dir === 1 ? freeIdx + 1 : freeIdx - 1]
          : null
        const targetEl = targetId ? document.getElementById(targetId) : null
        if (targetEl) {
          busy.current = true
          window.scrollTo({ top: absTop(targetEl), behavior: 'smooth' })
          setTimeout(() => { busy.current = false }, 1800)
        }
        e.preventDefault()
        return
      }

      e.preventDefault()
      go(dir)
    }

    const onTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY
    }

    const onTouchEnd = (e: TouchEvent) => {
      const delta = touchStartY.current - e.changedTouches[0].clientY
      if (Math.abs(delta) < 30) return
      const dir = delta > 0 ? 1 : -1
      if (isFreeScrolling(dir)) return
      e.preventDefault()
      go(dir)
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        if (isFreeScrolling(1)) return
        e.preventDefault(); go(1)
      }
      if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        if (isFreeScrolling(-1)) return
        e.preventDefault(); go(-1)
      }
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
  }, [snapIds, freeScrollIds])
}
