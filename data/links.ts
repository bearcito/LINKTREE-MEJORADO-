import type { IconType } from "react-icons"
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaFacebook } from "react-icons/fa"

export interface Link {
  title: string
  url: string
  icon: IconType
}

export const links: Link[] = [
  {
    title: "Instagram Principal",
    url: "https://instagram.com/altatelefonia",
    icon: FaInstagram,
  },
  {
    title: "Instagram Repuestos",
    url: "https://instagram.com/altatelefonia_repuestos",
    icon: FaInstagram,
  },
  {
    title: "Instagram Servicios",
    url: "https://instagram.com/altatelefonia_servicios",
    icon: FaInstagram,
  },
  {
    title: "WhatsApp Ventas",
    url: "https://wa.me/595981234567",
    icon: FaWhatsapp,
  },
  {
    title: "WhatsApp Soporte",
    url: "https://wa.me/595981234568",
    icon: FaWhatsapp,
  },
  {
    title: "WhatsApp Administración",
    url: "https://wa.me/595981234569",
    icon: FaWhatsapp,
  },
  {
    title: "Nuestra Ubicación",
    url: "https://maps.google.com/?q=Alta+Telefonia+Asuncion",
    icon: FaMapMarkerAlt,
  },
  {
    title: "Facebook",
    url: "https://facebook.com/altatelefonia",
    icon: FaFacebook,
  },
]
