interface BookDemoButtonProps {
  href?: string
  onClick?: () => void
}

export default function BookDemoButton({ href = '#demo', onClick }: BookDemoButtonProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="
        group inline-flex items-center gap-3
        px-8 py-3.5
        border border-white
        text-white text-[11px] uppercase tracking-[0.25em]
        hover:bg-white hover:text-black
        transition-all duration-300 ease-in-out
        cursor-pointer select-none
      "
      style={{ fontFamily: 'D-DIN-Bold, sans-serif' }}
    >
      Book a Demo
      {/* Arrow that slides in on hover */}
      <svg
        className="w-3.5 h-3.5 -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 7h12M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  )
}
