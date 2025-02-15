"use client"

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"
import { Play } from "lucide-react"

interface VideoModalProps {
  videoId: string
  title: string
  description: string
  icon: React.ReactNode
}

export function VideoModal({ videoId, title, description, icon }: VideoModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="border-2 border-[#1B4332]/10 cursor-pointer hover:border-[#1B4332]/30 transition-colors">
          <CardContent className="flex flex-col items-center space-y-4 p-6">
            <div className="relative">
              {icon}
              <Play className="h-6 w-6 text-[#1B4332] absolute -bottom-2 -right-2" />
            </div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-center text-[#2D6A4F]">
              {description}
            </p>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] p-0">
        <div className="aspect-video w-full">
          <iframe
            src={`https://player.vimeo.com/video/${videoId}?h=c97c588f43`}
            allow="autoplay; fullscreen; picture-in-picture"
            className="w-full h-full"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
} 