import ImageGallery from "@/components/image-gallery"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center py-8">Image Gallery</h1>
      <ImageGallery />
    </main>
  )
}
