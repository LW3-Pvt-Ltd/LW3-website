import { type ReactNode } from 'react'

interface NavLink {
  label: string
  href: string
}

interface NavColumnProps {
  icon: ReactNode
  title: string
  links: NavLink[]
}

/**
 * NavColumn — matches Figma layout:
 * [  bordered icon box  ]  Title
 *                          link 1
 *                          link 2
 *                          ...
 *
 * Icon box is 90×90 — large enough to display the 80px SVG icons without cropping.
 * No overflow-hidden so no clipping occurs.
 */
export default function NavColumn({ icon, title, links }: NavColumnProps) {
  return (
    <div className="flex items-stretch gap-3">
      {/* Icon box — bordered square, sized to fit 80px SVGs without clipping */}
      <div className="border border-white/40 flex items-center justify-center shrink-0 w-[90px] h-[90px] p-[5px]">
        {icon}
      </div>

      {/* Right: title on top, links stacked below */}
      <div className="flex flex-col justify-between py-1 min-w-[110px]">
        {/* Column title — CSS text only */}
        <span
          className="text-white text-[13px] uppercase tracking-[0.2em] leading-none"
          style={{ fontFamily: 'D-DINCondensed, sans-serif' }}
        >
          {title}
        </span>

        {/* Sub-links — CSS text only */}
        <ul className="flex flex-col gap-[4px] mt-2">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-white/60 text-[11px] hover:text-white transition-colors duration-150 leading-snug block uppercase tracking-[0.1em]"
                style={{ fontFamily: 'D-DINCondensed, sans-serif' }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
