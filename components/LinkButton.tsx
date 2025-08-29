import type { Link } from "../data/links"

interface LinkButtonProps {
  link: Link
}

export default function LinkButton({ link }: LinkButtonProps) {
  const { title, url, icon: Icon } = link

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group w-full max-w-md mx-auto block p-4 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-xl"
    >
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1 text-left">
          <h3 className="text-white font-medium text-lg group-hover:text-white/90 transition-colors duration-300">
            {title}
          </h3>
        </div>
        <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </a>
  )
}
