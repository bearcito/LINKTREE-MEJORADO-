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
    title: "nuestra tienda online",
    url: "https://wa.me/543764572478",
    icon: CiShoppingCart,
  },{
    title: "Nova ( IA bot )",
    url: "https://wa.me/5493765124730",
    icon: FaWhatsapp,
  },
  {
    title: "milena Ventas",
    url: "https://wa.me/543764572478",
    icon: FaWhatsapp,
  },
  {
    title: "Nahuel Ventas",
    url: "https://wa.me/543764120900",
    icon: FaWhatsapp,
  },
 
  {
    title: " nova (telegram)",
    url: "https://wa.me/543764572478",
    icon: FaTelegram,
  },
   {
    title: "Nuestra Ubicación",
    url: "https://maps.app.goo.gl/79UuMGxJiG4VZkQM9",
    icon: FaMapMarkerAlt,
  },
]
