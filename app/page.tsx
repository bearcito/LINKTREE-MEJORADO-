"use client"

import { links } from "../data/links"
import LinkButton from "../components/LinkButton"
import BackgroundCarousel from "../components/background-carousel"
import Image from "next/image" // Se importa el componente Image de Next.js

export default function LinktreePage() {
  const carouselImages = [
    "/hands-holding-smartphone-repair-tools-blurred-back.png",
    "/smartphone-repair-workshop-with-tools-and-devices.png",
    "/mobile-phone-circuit-board-and-repair-equipment.png",
    "/technician-repairing-smartphone-screen-replacement.png",
  ]

  return (
    <BackgroundCarousel images={carouselImages} autoSlideInterval={6000}>
      <div className="min-h-screen flex items-center justify-center py-2 px-4">
        <div className="max-w-md mx-auto w-full">
          <div className="text-center mb-4 animate-fade-in">
            {/* Contenedor del avatar corregido */}
            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full mx-auto mb-3 flex items-center justify-center shadow-lg border border-white/30 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-white/50">
              <Image 
                src="/Avatar.png"      // Ruta directa al archivo en /public
                alt="Logo Alta Telefonía" 
                width={80}              // Tamaño explícito para la optimización
                height={80}
                className="object-contain" // Clases de estilo unificadas
                priority // Hace que la imagen cargue más rápido (ideal para logos)
              />
            </div>
            
            <h1 className="text-2xl font-bold text-white mb-1">Alta Telefonía</h1>
            <p className="text-white/80 text-sm leading-relaxed">
              Especialistas en reparación de celulares de alta gama
            </p>
          </div>

          <div className="space-y-2">
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

          <div className="text-center mt-4 pt-2 animate-fade-in-delayed">
            <p className="text-white/60 text-xs">© 2025 Alta Software</p>
          </div>
        </div>
      </div>
    </BackgroundCarousel>
  )
}