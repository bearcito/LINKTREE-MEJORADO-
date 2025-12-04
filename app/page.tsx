import { links } from "../data/links"
import LinkButton from "../components/LinkButton"
import BackgroundCarousel from "../components/background-carousel"
import Image from "next/image"

export default function LinktreePage() {
  const carouselImages = [
    "/hands-holding-smartphone-repair-tools-blurred-back.png",
    "/smartphone-repair-workshop-with-tools-and-devices.png",
    "/mobile-phone-circuit-board-and-repair-equipment.png",
    "/technician-repairing-smartphone-screen-replacement.png",
  ]

  return (
    <BackgroundCarousel images={carouselImages} autoSlideInterval={6000}>
      <div className="min-h-screen flex items-center justify-center py-8 px-4">
        <div className="max-w-md mx-auto w-full">
          <div className="text-center mb-6">
            <div className="w-28 h-28 bg-white/10 backdrop-blur-xl rounded-full mx-auto mb-4 flex items-center justify-center shadow-2xl border border-white/20 overflow-hidden transition-transform duration-300 hover:scale-105">
              <Image
                src="/Avatar.png"
                alt="Logo Alta Telefonía"
                width={96}
                height={96}
                className="object-contain"
                priority
              />
            </div>

            <h1 className="text-2xl font-bold text-white mb-1">Alta Telefonía</h1>

            <p className="text-white/80 text-sm leading-relaxed">
              Especialistas en reparación de celulares de alta gama
            </p>
          </div>

          <div className="space-y-2">
            {links.map((link, index) => (
              <div key={index} className="animate-slideUp" style={{ animationDelay: `${index * 0.1}s` }}>
                <LinkButton link={link} />
              </div>
            ))}
          </div>

          <div className="text-center mt-4 pt-2">
            <p className="text-white/60 text-xs">© 2025 Alta Software</p>
          </div>
        </div>
      </div>
    </BackgroundCarousel>
  )
}
