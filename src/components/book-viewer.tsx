"use client"

import { useState, useEffect } from "react"
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
  const [scale, setScale] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateScale = () => {
  
      const isMobile = window.innerWidth < 768;
      const maxWidth = isMobile 
        ? window.innerWidth * 0.95 - 16
        : Math.min(window.innerWidth * 0.85, 1280) - 32;
      
      const maxHeight = window.innerHeight * 0.85;
      setScale({ width: maxWidth, height: maxHeight })
    }

    updateScale()
    window.addEventListener('resize', updateScale)
    return () => window.removeEventListener('resize', updateScale)
  }, [])

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
      <DialogContent className="w-[95vw] md:max-w-7xl h-[90vh] flex flex-col items-center p-2 pt-8 bg-white dark:bg-gray-900 overflow-y-scroll scrollbar-hide">
        <DialogTitle className="sr-only">Visor de PDF</DialogTitle>
        
        <div 
          className="relative w-full flex flex-col items-center cursor-pointer"
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
                width={scale.width}
                height={scale.height}
                className="max-w-full h-auto shadow-lg rounded-lg"
              />
            </div>
          </Document>
        </div>

        {numPages > 0 && (
          <div className="flex items-center gap-4 mt-4 text-foreground">
            <span className="text-sm font-medium">
              Página {pageNumber} de {numPages}
            </span>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
} 