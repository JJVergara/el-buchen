'use client'
import Link from 'next/link'
import { Leaf } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Menu } from 'lucide-react'

export function Navbar() {
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'Home' },
    { href: '/proyecto', label: 'Proyecto' },
    { href: '/equipamiento', label: 'Equipamiento' },
    { href: '/galeria', label: 'Galería' },
    { href: '/testimonios', label: 'Testimonios y Descargas' },
    { href: '/prensa', label: 'Prensa' },
    { href: '/contacto', label: 'Contacto' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#1B4332]/95 backdrop-blur supports-[backdrop-filter]:bg-[#1B4332]/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Leaf className="h-6 w-6 text-white" />
          <span className="text-xl font-bold text-white">El Buchén</span>
        </Link>

        <nav className="hidden items-center space-x-6 md:flex">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-[#B7E4C7] ${
                pathname === link.href ? 'text-[#B7E4C7]' : 'text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:text-[#B7E4C7]">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px] border-[#2D6A4F] bg-[#1B4332]">
              {links.map(link => (
                <DropdownMenuItem key={link.href} asChild>
                  <Link
                    href={link.href}
                    className={`text-white hover:text-[#B7E4C7] ${pathname === link.href ? 'text-[#B7E4C7]' : ''}`}
                  >
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
