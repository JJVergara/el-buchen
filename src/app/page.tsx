'use client';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navbar from '../../components/Navbar';
import Image from 'next/image';
import { getImageUrls } from '../../lib/supabase';
import { useEffect, useState } from 'react';

export default function Home() {
  const [images, setImages] = useState<Array<{url: string; alt: string; caption: string}>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const imageUrls = await getImageUrls();
        setImages(imageUrls);
      } catch (error) {
        console.error('Error loading images:', error);
      } finally {
        setLoading(false);
      }
    };
    loadImages();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Add padding-top to account for fixed navbar */}
      <div className="pt-20">
        {loading ? (
          <div className="h-[600px] flex items-center justify-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        ) : images.length > 0 ? (
          <div className="carousel-wrapper h-[600px]">
            <Carousel
              showArrows={true}
              showStatus={false}
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={5000}
              dynamicHeight={false}
              className="h-full"
              renderArrowPrev={(clickHandler, hasPrev) => (
                <button
                  onClick={clickHandler}
                  className="absolute left-4 z-10 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all"
                  aria-label="Previous slide"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>
              )}
              renderArrowNext={(clickHandler, hasNext) => (
                <button
                  onClick={clickHandler}
                  className="absolute right-4 z-10 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all"
                  aria-label="Next slide"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              )}
            >
              {images.map((image, index) => (
                <div key={index} className="relative h-[600px] w-full">
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    priority={index === 0}
                    className="object-cover"
                    sizes="100vw"
                    quality={85}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-8">
                    <h2 className="text-3xl font-bold max-w-4xl mx-auto">{image.caption}</h2>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        ) : (
          <div className="h-[600px] flex items-center justify-center">
            <p className="text-xl text-gray-600">No images available</p>
          </div>
        )}

        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Welcome to Our Website
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
