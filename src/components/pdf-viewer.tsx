"use client"
import { useState, useCallback } from "react"
import { Document, Page, pdfjs } from "react-pdf"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react"
import { LoadingSpinner } from "./loading-spinner"
import "react-pdf/dist/Page/AnnotationLayer.css"
import "react-pdf/dist/Page/TextLayer.css"
import getPdfs from "@/lib/queries/get-pdfs"

// Use HTTPS CDN URL
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

interface PDFViewerProps {
  url: string
}

const SCALE_STEP = 0.1
const MIN_SCALE = 0.5
const MAX_SCALE = 2.0

export function PDFViewer({ url }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number>(0)
  const [pageNumber, setPageNumber] = useState<number>(1)
  const [scale, setScale] = useState<number>(1.0)
  const [error, setError] = useState<string | null>(null)

  const onDocumentLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(numPages)
    setError(null)
  }, [])

  const onDocumentLoadError = useCallback((error: Error) => {
    setError("Error loading PDF. Please check your connection and try again.")
    console.error("PDF load error:", error)
  }, [])

  const changePage = useCallback((offset: number) => {
    setPageNumber((prevPageNumber) => {
      const newPage = prevPageNumber + offset
      return Math.min(Math.max(1, newPage), numPages)
    })
  }, [numPages])

  const adjustScale = useCallback((delta: number) => {
    setScale((currentScale) => {
      const newScale = currentScale + delta
      return Math.min(Math.max(MIN_SCALE, newScale), MAX_SCALE)
    })
  }, [])

  async function getPdfUrl() {
    const documents = await getPdfs()
    console.log(documents)
    const pdfUrl = documents[0].name
    console.log(pdfUrl)
    return pdfUrl
  }

  const pdfUrl = getPdfUrl()
  console.log("El pdf url es: ", pdfUrl)

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
            {error ? (
              <div className="text-center text-red-500 p-4">
                {error}
              </div>
            ) : (
              <Document
                file={url}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onDocumentLoadError}
                loading={<LoadingSpinner />}
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
            )}
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <div className="inline-flex items-center rounded-lg border border-input bg-background p-1 shadow-sm">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => adjustScale(-SCALE_STEP)} 
              disabled={scale <= MIN_SCALE}
              className="h-8 w-8"
            >
              <ZoomOut className="h-4 w-4" />
            </Button>
            <span className="px-4 text-sm">{Math.round(scale * 100)}%</span>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => adjustScale(SCALE_STEP)} 
              disabled={scale >= MAX_SCALE}
              className="h-8 w-8"
            >
              <ZoomIn className="h-4 w-4" />
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
