import { useEffect, useRef, useState } from 'react'
import iitDefault from '@/assets/iit/iit-pedigree.svg'
import iitMarungsha from '@/assets/iit/iit-marungsha.svg'
import iitAnurag from '@/assets/iit/iit-anurag.svg'
import iitSandeep from '@/assets/iit/iit-sandeep.svg'

const FW = 1984
const FH = 1521

// Right-side name box hit areas (canvas coordinates)
const BOX_X = 1189.34
const BOX_W = 644

const BOXES = [
  { id: 'abhijit',  y: 444, h: 109, svg: iitDefault   },
  { id: 'marungsha', y: 553, h: 119, svg: iitMarungsha },
  { id: 'anurag',   y: 672, h: 119, svg: iitAnurag    },
  { id: 'sandeep',  y: 791, h: 129, svg: iitSandeep   },
]

export default function IITPedigreeSection() {
  const containerRef = useRef(null)
  const [scale, setScale] = useState(1)
  const [activeId, setActiveId] = useState('abhijit')

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new ResizeObserver(entries => {
      setScale(entries[0].contentRect.width / FW)
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const px = v => v * scale
  const activeSvg = BOXES.find(b => b.id === activeId).svg

  return (
    <section
      ref={containerRef}
      style={{ width: '100%', height: FH * scale, position: 'relative', overflow: 'hidden' }}
      aria-label="IIT Pedigree"
    >
      {/* All SVGs stacked, only active one visible */}
      {BOXES.map(box => (
        <img
          key={box.id}
          src={box.svg}
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: FW * scale,
            height: FH * scale,
            display: 'block',
            pointerEvents: 'none',
            opacity: box.id === activeId ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }}
        />
      ))}

      {/* Transparent hover zones over each name box */}
      {BOXES.map(box => (
        <div
          key={box.id}
          onMouseEnter={() => setActiveId(box.id)}
          style={{
            position: 'absolute',
            left: px(BOX_X),
            top: px(box.y),
            width: px(BOX_W),
            height: px(box.h),
            cursor: 'pointer',
          }}
        />
      ))}
    </section>
  )
}
