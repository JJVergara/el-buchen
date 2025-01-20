import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "El Buchen - Nature Conservation",
  description: "Dedicated to preserving and protecting our natural environment",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Layout UI */}
        <main>{children}</main>
      </body>
    </html>
  )
}