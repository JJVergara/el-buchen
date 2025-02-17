import ImageGallery from '@/components/image-gallery'

export default function GalleryPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full bg-[#1B4332] py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Nuestra galería </h1>
              <p className="max-w-[900px] text-xl/relaxed text-[#B7E4C7]">
                Explora nuestra colección de fotografías de la naturaleza que muestran la increíble
                biodiversidad y paisajes que se encuentran en El Buchén.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <ImageGallery />
          </div>
        </section>
      </main>
    </div>
  )
}
