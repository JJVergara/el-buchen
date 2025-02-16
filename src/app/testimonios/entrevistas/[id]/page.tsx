import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import { interviews } from "@/data/interviews"
import { formatDate } from "@/lib/utils"
import { notFound } from "next/navigation"
import Footer from "@/components/footer"
import ReactMarkdown from "react-markdown"

interface InterviewPageProps {
  params: {
    id: string
  }
}

export default function InterviewPage({ params }: InterviewPageProps) {
  const interview = interviews.find((i) => i.id === params.id)

  if (!interview) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <article className="relative">
          <div className="relative h-[40vh] min-h-[400px] w-full">
            <Image
              src={interview.image}
              alt={interview.name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-end">
              <div className="container px-4 md:px-6 pb-12">
                <Link href="/testimonios" className="inline-block mb-8">
                  <Button
                    variant="outline"
                    className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                  >
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Volver a Testimonios
                  </Button>
                </Link>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                  {interview.title}
                </h1>
                <div className="flex items-center space-x-4 text-white/90">
                  <div className="space-y-1">
                    <div className="font-medium">{interview.name}</div>
                    <div className="text-sm">
                      {interview.role} • {interview.country}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container px-4 md:px-6 py-12 md:py-24">
            <div className="prose prose-lg mx-auto prose-headings:text-[#1B4332] prose-p:text-[#2D6A4F] prose-strong:text-[#1B4332] prose-strong:font-bold">
              <div className="mb-8 text-[#2D6A4F] italic">
                {interview.summary}
              </div>
              <div className="text-sm text-[#2D6A4F] mb-8">
                Publicado el {formatDate(interview.date)}
              </div>
              <ReactMarkdown>{interview.content}</ReactMarkdown>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}

export function generateStaticParams() {
  return interviews.map((interview) => ({
    id: interview.id,
  }))
} 