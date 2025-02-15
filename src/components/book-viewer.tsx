"use client"

import { useState, useEffect } from "react"
import HTMLFlipBook from "react-pageflip"
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

interface BookViewerProps {
  url: string
  trigger: React.ReactNode
}

export function BookViewer({ url, trigger }: BookViewerProps) {
  const [pdfPages, setPdfPages] = useState<React.ReactElement[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Initialize PDF worker with HTTPS
    pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`
  }, [])

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    const pages = []
    for (let i = 1; i <= numPages; i++) {
      pages.push(
        <div className="page" key={i}>
          <Page
            pageNumber={i}
            width={400}
            loading={<LoadingSpinner />}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </div>
      )
    }
    setPdfPages(pages)
    setIsLoading(false)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-4xl h-[80vh] flex items-center justify-center p-0 bg-[#2D3436]">
        <DialogTitle className="sr-only">Visor de PDF</DialogTitle>
        {isLoading && <LoadingSpinner />}
        <Document
          file={url}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<LoadingSpinner />}
          error={<div className="text-center text-red-500">Error loading PDF</div>}
        >
          <div className="book-container">
            <HTMLFlipBook
              width={400}
              height={600}
              size="stretch"
              minWidth={300}
              maxWidth={500}
              minHeight={400}
              maxHeight={800}
              drawShadow={true}
              flippingTime={1000}
              className="demo-book"
              startPage={0}
              showCover={true}
              style={{}}
              usePortrait={true}
              startZIndex={0}
              autoSize={true}
              maxShadowOpacity={0.5}
              mobileScrollSupport={true}
              clickEventForward={true}
              useMouseEvents={true}
              swipeDistance={0}
              showPageCorners={true}
              disableFlipByClick={false}
            >
              {pdfPages}
            </HTMLFlipBook>
          </div>
        </Document>
      </DialogContent>
      <style jsx global>{`
        .page {
          padding: 20px;
          background: white;
          border-radius: 0;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
        }
        .book-container {
          display: flex;
          justify-center;
          align-items: center;
          height: 100%;
          background: #2D3436;
        }
        .demo-book {
          background: white;
          border-radius: 4px;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </Dialog>
  )
} 