"use client"

import Link from "next/link"

import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl">El Buchen</span>
        </Link>
        <nav className="ml-auto flex gap-6">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors hover:text-[#0f401e] ${
              pathname === "/" ? "text-[#0f401e]" : "text-muted-foreground"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`text-sm font-medium transition-colors hover:text-[#0f401e] ${
              pathname === "/about" ? "text-[#0f401e]" : "text-muted-foreground"
            }`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`text-sm font-medium transition-colors hover:text-[#0f401e] ${
              pathname === "/contact" ? "text-[#0f401e]" : "text-muted-foreground"
            }`}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
