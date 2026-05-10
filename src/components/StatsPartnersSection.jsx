import { useRef, useEffect, useState } from 'react'
import statsBg from '@/assets/stats/stats-bg.jpg'

const W = 1905
const H = 1367

const CIRCLE_ARCS = [
  {
    sw: '0.719602',
    d: 'M466.946 1120.79C533.05 1108.66 596.117 1083.63 652.547 1047.13C708.977 1010.62 757.664 963.361 795.83 908.041C833.995 852.722 860.89 790.426 874.98 724.712C889.07 658.998 890.079 591.153 877.949 525.049C865.819 458.945 840.787 395.878 804.284 339.448C767.78 283.018 720.519 234.33 665.199 196.165C609.88 158 547.584 131.105 481.87 117.014C416.156 102.924 348.311 101.916 282.207 114.046C216.103 126.176 153.036 151.207 96.6057 187.711C40.1757 224.215 -8.5118 271.476 -46.677 326.795C-84.8421 382.115 -111.738 444.41 -125.828 510.124C-139.918 575.838 -140.926 643.684 -128.796 709.788C-116.666 775.892 -91.6346 838.959 -55.1309 895.389C-18.6273 951.819 28.6336 1000.51 83.9534 1038.67C139.273 1076.84 201.568 1103.73 267.282 1117.82C332.996 1131.91 400.842 1132.92 466.946 1120.79L466.946 1120.79Z',
  },
  {
    sw: '0.440013',
    d: 'M478.18 870.75C527.752 861.653 575.046 842.882 617.363 815.508C659.68 788.134 696.191 752.693 724.811 711.208C753.431 669.724 773.6 623.008 784.166 573.729C794.732 524.45 795.489 473.572 786.392 424.001C777.296 374.43 758.525 327.135 731.151 284.818C703.777 242.501 668.335 205.99 626.851 177.37C585.367 148.75 538.651 128.581 489.372 118.015C440.093 107.449 389.215 106.692 339.644 115.789C290.072 124.885 242.778 143.656 200.461 171.031C158.144 198.405 121.633 233.846 93.013 275.33C64.3929 316.815 44.224 363.53 33.6578 412.809C23.0916 462.088 22.3352 512.966 31.4316 562.537C40.528 612.109 59.2992 659.403 86.6734 701.72C114.048 744.037 149.489 780.548 190.973 809.168C232.458 837.788 279.173 857.957 328.452 868.523C377.731 879.09 428.609 879.846 478.18 870.75L478.18 870.75Z',
  },
  {
    sw: '0.440013',
    d: 'M298.553 1112.38C315.095 1109.34 330.878 1103.08 345 1093.94C359.122 1084.81 371.306 1072.98 380.857 1059.14C390.408 1045.29 397.139 1029.7 400.665 1013.26C404.191 996.813 404.444 979.834 401.408 963.291C398.372 946.748 392.108 930.965 382.973 916.844C373.838 902.722 362.01 890.538 348.166 880.987C334.322 871.436 318.733 864.705 302.288 861.179C285.842 857.653 268.864 857.4 252.321 860.436C235.778 863.471 219.995 869.736 205.873 878.871C191.752 888.006 179.567 899.833 170.016 913.677C160.465 927.521 153.735 943.111 150.209 959.556C146.683 976.001 146.43 992.98 149.466 1009.52C152.501 1026.07 158.766 1041.85 167.901 1055.97C177.036 1070.09 188.863 1082.28 202.707 1091.83C216.551 1101.38 232.141 1108.11 248.586 1111.64C265.031 1115.16 282.01 1115.41 298.553 1112.38L298.553 1112.38Z',
  },
]

const BARS = [
  { x: 1716.09, w: 36.4798 },
  { x: 1758.18, w: 29.9321 },
  { x: 1793.73, w: 23.3845 },
  { x: 1820.85, w: 15.9014 },
  { x: 1840.5,  w: 13.0953 },
  { x: 1857.33, w: 10.2892 },
  { x: 1871.37, w: 6.54765 },
  { x: 1881.65, w: 5.61227 },
  { x: 1891.01, w: 2.80614 },
  { x: 1897.55, w: 1.87076 },
  { x: 1903.17, w: 0.935379 },
]

const STATS = [
  {
    number: '155+',
    numLeft: 1037, numTop: 575,
    label: 'EV Battery Modules Tracked',
    labelLeft: 1038, labelTop: 653, labelWidth: 344,
  },
  {
    number: '21T',
    numLeft: 1494, numTop: 575,
    label: 'Tonnes CO₂e Avoided\n(Documented)',
    labelLeft: 1494, labelTop: 652, labelWidth: 270,
  },
  {
    number: '90%',
    numLeft: 1037, numTop: 1050,
    label: 'Faster Payments in Pilots',
    labelLeft: 1042, labelTop: 1138, labelWidth: 344,
  },
  {
    number: '1K',
    numLeft: 1494, numTop: 1050,
    label: 'Mainnet Blockchain\nTransactions',
    labelLeft: 1505, labelTop: 1135, labelWidth: 270,
  },
]

export default function StatsPartnersSection() {
  const containerRef = useRef(null)
  const [scale, setScale] = useState(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const ro = new ResizeObserver(([entry]) => {
      setScale(entry.contentRect.width / W)
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <section
      ref={containerRef}
      aria-label="Statistics and partners section"
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: `${W} / ${H}`,
        overflow: 'hidden',
        lineHeight: 0,
        backgroundColor: '#000',
      }}
    >
      <div
        style={{
          position: 'absolute', top: 0, left: 0,
          width: W, height: H,
          transform: scale ? `scale(${scale})` : undefined,
          transformOrigin: 'top left',
          opacity: scale ? 1 : 0,
        }}
      >

        {/* ── 1. Circle arcs (behind image) ─────────────────────────────── */}
        <svg
          aria-hidden="true"
          style={{ position: 'absolute', top: 0, left: 0, width: W, height: H, display: 'block', pointerEvents: 'none' }}
          viewBox={`0 0 ${W} ${H}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {CIRCLE_ARCS.map((arc, i) => (
            <path key={i} d={arc.d} stroke="white" strokeWidth={arc.sw} fill="none" />
          ))}
        </svg>

        {/* ── 2. JPEG background (left/circle area) ─────────────────────── */}
        <img
          src={statsBg}
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: 125, top: 509,
            width: 743, height: 710,
            display: 'block',
            objectFit: 'fill',
          }}
        />

        {/* ── 2. "The Statistics" headline ──────────────────────────────── */}
        <p style={{
          position: 'absolute',
          left: 172, top: 320,
          margin: 0,
          fontFamily: '"D-DIN", sans-serif',
          fontWeight: 700,
          fontSize: 70,
          lineHeight: 1,
          color: '#F5F2EC',
          whiteSpace: 'nowrap',
        }}>
          The Statistics
        </p>

        {/* ── 3. Stats grid lines ────────────────────────────────────────── */}
        {/* Horizontal lines */}
        <div style={{ position: 'absolute', left: 968, top: 508.5, width: 820, height: 1, background: 'white' }} />
        <div style={{ position: 'absolute', left: 969, top: 947.5, width: 819, height: 1, background: 'white' }} />
        <div style={{ position: 'absolute', left: 969, top: 1218.5, width: 819, height: 1, background: 'white' }} />
        {/* Vertical lines */}
        <div style={{ position: 'absolute', left: 968.5, top: 509, width: 1, height: 710, background: 'white' }} />
        <div style={{ position: 'absolute', left: 1432.5, top: 509, width: 1, height: 710, background: 'white' }} />
        <div style={{ position: 'absolute', left: 1787.5, top: 508, width: 1, height: 711, background: 'white' }} />

        {/* ── 4. Corner L-bracket (top-right of stats grid) ─────────────── */}
        <div style={{ position: 'absolute', left: 1799, top: 462.5, width: 38, height: 1, background: 'white' }} />
        <div style={{ position: 'absolute', left: 1836.5, top: 463, width: 1, height: 35, background: 'white' }} />

        {/* ── 5. Stat numbers and labels ────────────────────────────────── */}
        {STATS.map((stat, i) => (
          <div key={i}>
            <p style={{
              position: 'absolute',
              left: stat.numLeft,
              top: stat.numTop,
              margin: 0,
              fontFamily: '"D-DIN", sans-serif',
              fontWeight: 700,
              fontSize: 70,
              lineHeight: 1,
              color: 'white',
              whiteSpace: 'nowrap',
            }}>
              {stat.number}
            </p>
            <p style={{
              position: 'absolute',
              left: stat.labelLeft,
              top: stat.labelTop,
              width: stat.labelWidth,
              margin: 0,
              fontFamily: '"D-DIN", sans-serif',
              fontWeight: 700,
              fontSize: 13,
              lineHeight: 1.56,
              color: 'white',
              whiteSpace: 'pre-line',
            }}>
              {stat.label}
            </p>
          </div>
        ))}

        {/* ── 6. SVG overlay: white bars ─────────────────────────────────── */}
        <svg
          aria-hidden="true"
          style={{ position: 'absolute', top: 0, left: 0, width: W, height: H, display: 'block', pointerEvents: 'none' }}
          viewBox={`0 0 ${W} ${H}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {BARS.map((bar, i) => (
            <rect
              key={i}
              x={bar.x}
              y={235.919}
              width={bar.w}
              height={174.916}
              fill="white"
            />
          ))}
        </svg>

      </div>
    </section>
  )
}
