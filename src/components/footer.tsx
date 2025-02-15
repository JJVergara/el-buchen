import { Leaf } from "lucide-react";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#1B4332]/20 py-6">
    <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row md:py-0">
      <div className="flex items-center gap-4 px-8 md:px-0">
        <Leaf className="h-6 w-6 text-[#1B4332]" />
        <p className="text-sm text-[#2D6A4F]">
          © {new Date().getFullYear()} El Buchen. Todos los derechos reservados.
        </p>
      </div>
      <nav className="flex items-center gap-4 sm:gap-6">
        <Link className="text-sm font-medium text-[#2D6A4F] hover:text-[#1B4332]" href="/about">
          Quiénes Somos
        </Link>
        <Link className="text-sm font-medium text-[#2D6A4F] hover:text-[#1B4332]" href="/contact">
          Contacto
        </Link>
        <Link 
          className="text-[#2D6A4F] hover:text-[#1B4332]" 
          href="https://www.facebook.com/elbuchen"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <Facebook className="h-5 w-5" />
        </Link>
        <Link 
          className="text-[#2D6A4F] hover:text-[#1B4332]" 
          href="https://www.instagram.com/elbuchen/?hl=es"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <Instagram className="h-5 w-5" />
        </Link>
      </nav>
    </div>
    </footer>
  )
}

