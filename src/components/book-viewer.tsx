"use client"

import { useState } from "react"
import { Document, Page, pdfjs } from "react-pdf"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { LoadingSpinner } from "./loading-spinner"
import "react-pdf/dist/Page/AnnotationLayer.css"
import "react-pdf/dist/Page/TextLayer.css"

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

interface BookViewerProps {
  url: string
  trigger: React.ReactNode
}

export function BookViewer({ url, trigger }: BookViewerProps) {
  const [numPages, setNumPages] = useState<number>(0)
  const [pageNumber, setPageNumber] = useState(1)
  const [isLoading, setIsLoading] = useState(true)

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
    setIsLoading(false)
  }

  const nextPage = () => {
    setPageNumber((prev) => Math.min(prev + 1, numPages))
  }

  const previousPage = () => {
    setPageNumber((prev) => Math.max(prev - 1, 1))
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-4xl h-[90vh] flex flex-col items-center justify-center p-4 bg-white">
        <DialogTitle className="sr-only">Visor de PDF</DialogTitle>
        
        <div className="relative flex-1 w-full overflow-auto flex flex-col items-center">
          {isLoading && <LoadingSpinner />}
          <Document
            file={url}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={<LoadingSpinner />}
            error={
              <div className="text-center text-red-500 p-4">
                Error al cargar el PDF. Por favor, intente nuevamente.
              </div>
            }
          >
            <Page
              pageNumber={pageNumber}
              loading={<LoadingSpinner />}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              width={Math.min(window.innerWidth - 100, 800)}
            />
          </Document>
        </div>

        {numPages > 0 && (
          <div className="flex items-center gap-4 mt-4">
            <Button
              variant="outline"
              onClick={previousPage}
              disabled={pageNumber <= 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <span className="text-sm">
              Página {pageNumber} de {numPages}
            </span>

            <Button
              variant="outline"
              onClick={nextPage}
              disabled={pageNumber >= numPages}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
} 