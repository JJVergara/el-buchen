"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  href: string
  label: string
}

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  const NavLink = React.useCallback(
    ({ href, label }: NavItem) => {
      const isActive = pathname === href
      return (
        <Link
          href={href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-[#0f401e]",
            isActive ? "text-[#0f401e]" : "text-muted-foreground"
          )}
          onClick={() => setIsOpen(false)}
        >
          {label}
        </Link>
      )
    },
    [pathname]
  )

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link 
          href="/" 
          className="flex items-center space-x-2"
          onClick={() => setIsOpen(false)}
        >
          <span className="font-bold text-xl">El Buchen</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="ml-auto hidden md:flex gap-6">
          {navItems.map((item) => (
            <NavLink key={item.href} {...item} />
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden ml-auto">
            <Button 
              variant="ghost" 
              size="icon"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[240px] sm:w-[280px]">
            <nav className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => (
                <NavLink key={item.href} {...item} />
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
