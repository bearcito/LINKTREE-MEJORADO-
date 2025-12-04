"use client"

import type React from "react"

import { useState, useEffect } from "react"

interface BackgroundCarouselProps {
  images: string[]
  autoSlideInterval?: number
  children: React.ReactNode
}

export default function BackgroundCarousel({
  images,
  autoSlideInterval = 5000,
  children,
}: BackgroundCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  useEffect(() => {
    if (images.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, autoSlideInterval)

    return () => clearInterval(interval)
  }, [images.length, autoSlideInterval])

  return (
    <div className="min-h-screen relative">
      {/* Background Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url('${image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
