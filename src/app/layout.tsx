import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Providers } from "@/components/providers"
import { Navbar } from "@/components/navbar"
import "./globals.css"

const montserrat = Montserrat({ 
  subsets: ["latin"],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "El Buchen - Turismo y Conservación",
  description: "El Buchen es un proyecto de turismo y conservación ubicado en la Región de Los Lagos, Chile. Ofrecemos experiencias únicas en la naturaleza mientras protegemos nuestro entorno.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={montserrat.className}>
      <body className="min-h-screen bg-white text-[#1B4332]">
        <Providers>
          <Navbar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  )
}