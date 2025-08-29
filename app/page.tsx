"use client"
import { links } from "../data/links"
import LinkButton from "../components/LinkButton"
import BackgroundCarousel from "../components/background-carousel"

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
          <div className="text-center mb-8 animate-fade-in">
            <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg border border-white/30 animate-pulse-subtle">
              <div className="text-red-700 text-3xl font-bold">AT</div>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Alta Telefonía</h1>
            <p className="text-white/80 text-base leading-relaxed">
              Especialistas en reparación de celulares de alta gama
            </p>
          </div>

          <div className="space-y-4">
            {links.map((link, index) => (
              <div
                key={index}
                className="animate-slide-up opacity-0"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <LinkButton link={link} />
              </div>
            ))}
          </div>

          <div className="text-center mt-8 pt-6 animate-fade-in-delayed">
            <p className="text-white/60 text-sm">© 2024 Alta Telefonía</p>
          </div>
        </div>
      </div>
    </BackgroundCarousel>
  )
}
