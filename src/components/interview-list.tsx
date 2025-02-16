'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import { formatDate } from '@/lib/utils'
import { cn } from '@/lib/utils'
import { Interview } from '../../dtos/interview.dto'

interface InterviewListProps {
  interviews: Interview[]
}

export function InterviewList({ interviews }: InterviewListProps) {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({})

  const handleImageLoad = (id: string) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }))
  }

  const handleImageError = (id: string) => {
    console.error(`Failed to load image for interview ${id}`)
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {interviews.map(interview => (
        <Card key={interview.id} className="overflow-hidden transition-all hover:shadow-lg">
          <div className="relative h-48">
            <div
              className={cn(
                'absolute inset-0 animate-pulse bg-gray-200',
                loadedImages[interview.id] && 'hidden'
              )}
              aria-hidden="true"
            />
            <Image
              src={interview.image}
              alt={interview.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={cn(
                'object-cover transition-opacity duration-300',
                loadedImages[interview.id] ? 'opacity-100' : 'opacity-0'
              )}
              onLoad={() => handleImageLoad(interview.id)}
              onError={() => handleImageError(interview.id)}
            />
          </div>
          <CardContent className="space-y-4 p-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#2D6A4F]">{interview.country}</span>
                <span className="text-sm text-[#2D6A4F]">{formatDate(interview.date)}</span>
              </div>
              <h3 className="line-clamp-2 text-xl font-bold">{interview.title}</h3>
              <div className="flex items-center space-x-2">
                <span className="font-medium">{interview.name}</span>
                <span className="text-[#2D6A4F]">•</span>
                <span className="text-[#2D6A4F]">{interview.role}</span>
              </div>
            </div>
            <p className="line-clamp-3 text-[#2D6A4F]">{interview.summary}</p>
            <Link href={`/testimonios/entrevistas/${interview.id}`}>
              <Button
                variant="ghost"
                className="w-full justify-between text-[#1B4332] hover:bg-[#1B4332]/5 hover:text-[#2D6A4F]"
              >
                Leer más
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
