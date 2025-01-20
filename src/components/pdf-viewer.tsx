"use client"

import { useState } from "react"
import { Document, Page, pdfjs } from "react-pdf"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { LoadingSpinner } from "./loading-spinner"
import "react-pdf/dist/Page/AnnotationLayer.css"
import "react-pdf/dist/Page/TextLayer.css"

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

interface PDFViewerProps {
  url: string
}

export function PDFViewer({ url }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number>(0)
  const [pageNumber, setPageNumber] = useState<number>(1)
  const [scale, setScale] = useState<number>(1.0)

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
  }

  function changePage(offset: number) {
    setPageNumber((prevPageNumber) => {
      const newPage = prevPageNumber + offset
      return Math.min(Math.max(1, newPage), numPages)
    })
  }

  return (
    <div className="flex flex-col items-center">
      <div className="relative max-w-4xl w-full">
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center rounded-lg border border-input bg-background p-1 shadow-sm">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => changePage(-1)}
              disabled={pageNumber <= 1}
              className="h-8 w-8"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="px-4 text-sm">
              Page {pageNumber} of {numPages}
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => changePage(1)}
              disabled={pageNumber >= numPages}
              className="h-8 w-8"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div
            className="shadow-lg transition-transform duration-500"
            style={{
              transform: `perspective(1000px) rotateY(${pageNumber % 2 === 0 ? "1deg" : "-1deg"})`,
            }}
          >
            <Document
              file={url}
              onLoadSuccess={onDocumentLoadSuccess}
              loading={<LoadingSpinner />}
              error={<div className="text-center text-red-500">Error loading PDF. Please try again.</div>}
            >
              <Page
                pageNumber={pageNumber}
                scale={scale}
                loading={<LoadingSpinner />}
                className="page"
                renderTextLayer={true}
                renderAnnotationLayer={true}
              />
            </Document>
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <div className="inline-flex items-center rounded-lg border border-input bg-background p-1 shadow-sm">
            <Button variant="ghost" size="sm" onClick={() => setScale((s) => Math.max(0.5, s - 0.1))} className="h-8">
              Zoom Out
            </Button>
            <span className="px-4 text-sm">{Math.round(scale * 100)}%</span>
            <Button variant="ghost" size="sm" onClick={() => setScale((s) => Math.min(2, s + 0.1))} className="h-8">
              Zoom In
            </Button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .react-pdf__Page__canvas {
          margin: 0 auto;
          border-radius: 8px;
        }
        .page {
          margin: 1em 0;
        }
      `}</style>
    </div>
  )
}

