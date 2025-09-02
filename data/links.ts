import type { IconType } from "react-icons"
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaFacebook } from "react-icons/fa"
import { CiShoppingCart } from "react-icons/ci";
import { FaTelegram } from "react-icons/fa";


export interface Link {
  title: string
  url: string
  icon: IconType
}

export const links: Link[] = [
  {
    title: "Instagram Principal",
    url: "https://www.instagram.com/altatelefoniaexpress/",
    icon: FaInstagram,
  },
  {
    title: "Nuestra tienda online",
    url: "https://www.altatelefonia.com.ar/",
    icon: CiShoppingCart,
  },{
    title: "Nova ( IA bot )",
    url: "https://wa.me/5493765124730",
    icon: FaWhatsapp,
  },
  {
    title: "Milena Ventas",
    url: "https://wa.me/543764572478",
    icon: FaWhatsapp,
  },
  {
    title: "Nahuel Ventas",
    url: "https://wa.me/543764120900",
    icon: FaWhatsapp,
  },
 
  {
    title: "Nova(telegram)",
    url: "https://wa.me/543764572478",
    icon: FaTelegram,
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
  },
]
