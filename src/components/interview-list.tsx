import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { type Interview } from "@/types/interview"
import { formatDate } from "@/lib/utils"

interface InterviewListProps {
  interviews: Interview[]
}

export function InterviewList({ interviews }: InterviewListProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {interviews.map((interview) => (
        <Card key={interview.id} className="overflow-hidden transition-all hover:shadow-lg">
          <div className="relative h-48">
            <Image
              src={interview.image}
              alt={interview.name}
              fill
              className="object-cover"
            />
          </div>
          <CardContent className="p-6 space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#2D6A4F]">{interview.country}</span>
                <span className="text-sm text-[#2D6A4F]">{formatDate(interview.date)}</span>
              </div>
              <h3 className="text-xl font-bold line-clamp-2">{interview.title}</h3>
              <div className="flex items-center space-x-2">
                <span className="font-medium">{interview.name}</span>
                <span className="text-[#2D6A4F]">•</span>
                <span className="text-[#2D6A4F]">{interview.role}</span>
              </div>
            </div>
            <p className="text-[#2D6A4F] line-clamp-3">{interview.summary}</p>
            <Link href={`/testimonios/entrevistas/${interview.id}`}>
              <Button
                variant="ghost"
                className="w-full justify-between text-[#1B4332] hover:text-[#2D6A4F] hover:bg-[#1B4332]/5"
              >
                Leer más
                <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  )
} 