import { XIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

interface ImagePopupProps {
  image: { url: string; id: number }
  onClose: () => void
  onNavigate: (direction: 'prev' | 'next') => void
}

export default function ImagePopup({ image, onClose, onNavigate }: ImagePopupProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="relative flex h-full w-full max-w-4xl items-center justify-center">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-white hover:text-gray-300"
          aria-label="Close popup"
        >
          <XIcon size={24} />
        </button>
        <button
          onClick={() => onNavigate('prev')}
          className="absolute left-4 text-white hover:text-gray-300"
          aria-label="Previous image"
        >
          <ChevronLeftIcon size={36} />
        </button>
        <button
          onClick={() => onNavigate('next')}
          className="absolute right-4 text-white hover:text-gray-300"
          aria-label="Next image"
        >
          <ChevronRightIcon size={36} />
        </button>
        <img
          src={image.url || '/placeholder.svg'}
          alt={`Full size image ${image.id}`}
          className="max-h-full max-w-full object-contain"
        />
      </div>
    </div>
  )
}
