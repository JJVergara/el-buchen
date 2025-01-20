import { Navbar } from "@/components/navbar"
import { PDFViewer } from "@/components/pdf-viewer"
import { Leaf } from "lucide-react"
import Link from "next/link"

export default function PressPage() {
  // In a real application, you would get this URL from your CMS or API
  const pdfUrl = "/sample.pdf"

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0f401e]/5">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Press Kit & Publications
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our press releases, publications, and media coverage about our environmental conservation
                  efforts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PDF Viewer Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <PDFViewer url={pdfUrl} />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row md:py-0">
          <div className="flex items-center gap-4 px-8 md:px-0">
            <Leaf className="h-6 w-6 text-[#0f401e]" />
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} El Buchen. All rights reserved.
            </p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:text-[#0f401e]" href="/about">
              About
            </Link>
            <Link className="text-sm font-medium hover:text-[#0f401e]" href="/contact">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

