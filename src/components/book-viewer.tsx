"use client"

import { useState } from "react"
import { Document, Page, pdfjs } from "react-pdf"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog"
import { LoadingSpinner } from "./loading-spinner"
import "react-pdf/dist/Page/AnnotationLayer.css"
import "react-pdf/dist/Page/TextLayer.css"

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

interface BookViewerProps {
  url: string
  trigger: React.ReactNode
}

export function BookViewer({ url, trigger }: BookViewerProps) {
  const [numPages, setNumPages] = useState<number>(0)
  const [pageNumber, setPageNumber] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null)

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
    setIsLoading(false)
  }

  const handlePageClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left
    
    if (x < rect.width / 2) {
      if (pageNumber > 1) {
        setSlideDirection('left')
        setPageNumber((prev) => Math.max(prev - 1, 1))
      }
    } else {
      if (pageNumber < numPages) {
        setSlideDirection('right')
        setPageNumber((prev) => Math.min(prev + 1, numPages))
      }
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-4xl h-[90vh] flex flex-col items-center justify-center p-4 bg-white">
        <DialogTitle className="sr-only">Visor de PDF</DialogTitle>
        
        <div 
          className="relative flex-1 w-full overflow-hidden flex flex-col items-center cursor-pointer"
          onClick={handlePageClick}
        >
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
            <div 
              className={`transition-transform duration-300 ease-in-out
                ${slideDirection === 'left' ? 'translate-x-[-100%] opacity-0' : ''}
                ${slideDirection === 'right' ? 'translate-x-[100%] opacity-0' : ''}
              `}
              onTransitionEnd={() => setSlideDirection(null)}
            >
              <Page
                pageNumber={pageNumber}
                loading={<LoadingSpinner />}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                width={Math.min(window.innerWidth - 100, 800)}
              />
            </div>
          </Document>
        </div>

        {numPages > 0 && (
          <div className="flex items-center gap-4 mt-4">
            <span className="text-sm">
              Página {pageNumber} de {numPages}
            </span>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
} 