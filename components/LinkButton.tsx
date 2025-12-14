import type { Link } from "../data/links"

interface LinkButtonProps {
  link: Link
  tint?: string
}

export default function LinkButton({ link, tint = "255,255,255" }: LinkButtonProps) {
  const { title, url, icon: Icon, color } = link

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group relative w-full max-w-md mx-auto block py-3 px-4 rounded-2xl overflow-hidden
        bg-white/10 backdrop-blur-lg border border-white/20
        shadow-lg shadow-black/20
        transition-all duration-300 ease-in-out
        hover:scale-[1.03] hover:shadow-xl hover:bg-white/20

        before:absolute before:inset-0 before:rounded-2xl before:z-0
        before:opacity-50 before:bg-[radial-gradient(400px_circle_at_center,rgba(255,255,255,0.1),transparent_80%)]

        after:absolute after:inset-0 after:rounded-2xl after:z-0
        after:opacity-0 group-hover:after:opacity-100 after:transition-opacity after:duration-500
        after:bg-[radial-gradient(300px_circle_at_50%_40%,white,transparent_60%)]
        after:filter after:blur-3xl
      `}
    >
      <div className="relative z-10 flex items-center space-x-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-md shadow-inner transition-transform duration-300 group-hover:scale-110">
          <Icon className="w-6 h-6 drop-shadow-lg" style={{ color: color ?? "#ffffff" }} />
        </div>

        <div className="flex-1 text-left">
          <h3 className="text-white font-semibold text-base tracking-wide drop-shadow-md">
            {title}
          </h3>
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
