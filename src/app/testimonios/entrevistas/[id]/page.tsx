import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronLeft } from 'lucide-react'
import { interviews } from '../../../../../mock-data/interviews'
import { formatDate } from '@/lib/utils'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'

interface InterviewPageProps {
  params: {
    id: string
  }
}

export default function InterviewPage({ params }: InterviewPageProps) {
  const interview = interviews.find(i => i.id === params.id)

  if (!interview) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
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
              <div className="container px-4 pb-12 md:px-6">
                <Link href="/testimonios" className="mb-8 inline-block">
                  <Button
                    variant="outline"
                    className="border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
                  >
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Volver a Testimonios
                  </Button>
                </Link>
                <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
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

          <div className="container px-4 py-12 md:px-6 md:py-24">
            <div className="prose prose-lg prose-headings:text-[#1B4332] prose-p:text-[#2D6A4F] prose-strong:text-[#1B4332] prose-strong:font-bold mx-auto">
              <div className="mb-8 italic text-[#2D6A4F]">{interview.summary}</div>
              <div className="mb-8 text-sm text-[#2D6A4F]">
                Publicado el {formatDate(interview.date)}
              </div>
              <ReactMarkdown>{interview.content}</ReactMarkdown>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}

export function generateStaticParams() {
  return interviews.map(interview => ({
    id: interview.id,
  }))
}
