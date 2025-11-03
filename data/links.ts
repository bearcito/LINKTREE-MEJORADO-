import type { IconType } from "react-icons"
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa"
import { CiShoppingCart } from "react-icons/ci"

export interface Link {
  title: string
  url: string
  icon: IconType
  color?: string
}

export const links: Link[] = [
  {
    title: "Instagram Principal",
    url: "https://www.instagram.com/altatelefoniaexpress/",
    icon: FaInstagram,
    color: "#E4405F", // Instagram brand
  },
  {
    title: "Gremio",
    url: "https://www.altatelefonia.com.ar/gremio",
    icon: FaBriefcase,
    color: "#2563eb", // Professional blue color
  },
  {
    title: "Nuestra tienda online",
    url: "https://www.altatelefonia.com.ar/",
    icon: CiShoppingCart,
  },
  {
    title: "NovaIA (consulta de precios 24/7)",
    url: "https://wa.link/fiq6wc",
    icon: FaWhatsapp,
    color: "#25D366", // WhatsApp brand
  },
  {
    title: "Milena Ventas",
    url: "https://wa.me/543764572478",
    icon: FaWhatsapp,
    color: "#25D366",
  },
  {
    title: "Nahuel Ventas",
    url: "https://wa.me/543764120900",
    icon: FaWhatsapp,
    color: "#25D366",
  },
  {
    title: "Nuestra Ubicación",
    url: "https://maps.app.goo.gl/79UuMGxJiG4VZkQM9",
    icon: FaMapMarkerAlt,
  },
  {
    title: "Canal de WhatsApp",
    url: "https://whatsapp.com/channel/0029Vb6ZBAh8aKvH1oCNHi1s",
    icon: FaWhatsapp,
    color: "#25D366",
  },
]
