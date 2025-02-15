import { XIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

interface ImagePopupProps {
  image: { url: string; id: number }
  onClose: () => void
  onNavigate: (direction: "prev" | "next") => void
}

export default function ImagePopup({ image, onClose, onNavigate }: ImagePopupProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative max-w-4xl w-full h-full flex items-center justify-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300"
          aria-label="Close popup"
        >
          <XIcon size={24} />
        </button>
        <button
          onClick={() => onNavigate("prev")}
          className="absolute left-4 text-white hover:text-gray-300"
          aria-label="Previous image"
        >
          <ChevronLeftIcon size={36} />
        </button>
        <button
          onClick={() => onNavigate("next")}
          className="absolute right-4 text-white hover:text-gray-300"
          aria-label="Next image"
        >
          <ChevronRightIcon size={36} />
        </button>
        <img
          src={image.url || "/placeholder.svg"}
          alt={`Full size image ${image.id}`}
          className="max-h-full max-w-full object-contain"
        />
      </div>
    </div>
  )
}

