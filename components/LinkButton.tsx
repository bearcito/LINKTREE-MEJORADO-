import type { Link } from "../data/links"

interface LinkButtonProps {
  link: Link
  tint?: string
}

export default function LinkButton({ link, tint = "255,255,255" }: LinkButtonProps) {
  const { title, url, icon: Icon } = link

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group relative w-full max-w-md mx-auto block py-3 px-4 rounded-xl overflow-hidden
        bg-[rgba(${tint},0.08)] backdrop-blur-3xl border border-white/5
        shadow-xl shadow-black/40
        transition-all duration-300 ease-out
        hover:scale-[1.02] hover:shadow-2xl

        before:absolute before:inset-0 before:rounded-xl before:z-0
        before:opacity-100 before:bg-[radial-gradient(600px_circle_at_center,rgba(${tint},0.03),transparent_80%)]

        after:absolute after:inset-0 after:rounded-xl after:z-0
        after:opacity-0 group-hover:after:opacity-100 after:transition-opacity after:duration-700
        after:bg-[radial-gradient(400px_circle_at_50%_50%,rgba(${tint},0.2),transparent_70%)]
        after:filter after:blur-2xl
      `}
    >
      <div className="relative z-10 flex items-center space-x-4">
        <div className="flex-shrink-0 w-11 h-11 rounded-full bg-[rgba(255,255,255,0.08)] border border-white/10 flex items-center justify-center backdrop-blur-sm shadow-inner transition-transform duration-300 group-hover:scale-110">
          <Icon className="w-5 h-5 text-white drop-shadow-md" />
        </div>

        <div className="flex-1 text-left">
          <h3 className="text-white font-semibold text-base tracking-wide drop-shadow-md">{title}</h3>
        </div>

        <svg
          className="w-5 h-5 text-white/60 group-hover:text-white transition-all duration-300 group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </a>
  )
}
