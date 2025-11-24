import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Alta Telefonía - Links",
  description: "Todos nuestros enlaces en un solo lugar",
  generator: 'v0.app',
  icons: {
    icon: '/favicon.ico', // Favicon principal
    apple: '/apple-touch-icon.png', // Apple Touch Icon
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="nebula-background">{children}</body>
    </html>
  )
}