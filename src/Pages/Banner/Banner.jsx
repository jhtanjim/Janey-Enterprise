"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import img2 from "../../assets/images/banner/port-1845350_1280.jpg"
import img3 from "../../assets/images/banner/port-6670684_1280.jpg"
import img5 from "../../assets/images/4af16d153eb84bb9ad060d4bd0100629.jpg"
import img1 from "../../assets/images/5a75c2571e84441aad18025e5f9363fd.jpg"
import img6 from "../../assets/images/IMG-20250219-WA0005.jpg"
import { Link } from "react-router-dom"

const Banner = () => {
  const slides = [
    {
      image: img1,
      title: "CUSTOMER SATISFACTION GUARANTEED",
      subtitle:
        "We guarantee 100% satisfaction & secured supply. Our team has a high level of service to cater to your needs.",
    },
    {
      image: img2,
      title: "GLOBAL MARITIME LOGISTICS",
      subtitle: "Comprehensive solutions for seamless global shipping and logistics.",
    },
    {
      image: img3,
      title: "INNOVATIVE SHIPPING TECHNOLOGIES",
      subtitle: "Cutting-edge solutions ensuring efficient and secure transportation.",
    },
    {
      image: img5,
      title: "PROFESSIONAL MARINE SOLUTIONS",
      subtitle: "Complete vessel supply solutions including provisions, stores, and equipment.",
    },
    {
      image: img6,
      title: "QUALITY GAS SUPPLY SERVICES",
      subtitle: "Oxygen, Acetylene, L.P.G, and all types of gas supply with commission agent services.",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  const minSwipeDistance = 50

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1))
  }

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1))
  }, [slides.length])

  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }
  }

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000)
    return () => clearInterval(slideInterval)
  }, [nextSlide])

  return (
    <div className="relative w-full min-h-[600px] h-screen md:h-[calc(100vh-3rem)] overflow-hidden bg-black">
      {/* Slides */}
      <div className="h-full w-full" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 
              ${index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={slide.image || "/placeholder.svg"}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>

            {/* Content */}
            <div className="relative h-full z-10 flex items-center">
              <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="px-4 sm:px-6">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg text-white/90 mb-8 leading-relaxed">{slide.subtitle}</p>

                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <Link to="/learn-more">
                      <button className="w-full sm:w-auto border-2 border-white text-white px-6 py-2.5 text-sm font-medium hover:bg-white hover:text-blue-900 transition-all duration-300 min-w-[160px]">
                        LEARN MORE
                      </button>
                    </Link>

                    <Link to="/contact">
                      <button className="w-full sm:w-auto bg-yellow-500 text-blue-900 px-6 py-2.5 text-sm font-medium hover:bg-yellow-400 transition-all duration-300 min-w-[160px]">
                        GET A QUOTE
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Hidden on mobile */}
      <div className="hidden sm:flex absolute inset-0 items-center justify-between px-4 z-20 pointer-events-none">
        <button
          onClick={prevSlide}
          className="p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-all transform hover:scale-110 pointer-events-auto"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-all transform hover:scale-110 pointer-events-auto"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-28 sm:bottom-24 left-0 right-0 flex justify-center gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 
              ${index === currentIndex ? "bg-white w-6" : "bg-white/50 hover:bg-white/75"}`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Bottom Banner */}
      <div className="absolute bottom-0 w-full bg-yellow-500 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 px-4 sm:px-6">
          <p className="text-sm sm:text-base md:text-lg font-medium text-blue-900">
            All marine solutions at one place with client satisfaction.
          </p>
          <Link to="/get-quote">
            <button className="w-full sm:w-auto border-2 border-blue-900 text-blue-900 px-6 py-2 text-sm font-medium hover:bg-blue-900 hover:text-white transition-all duration-300 min-w-[160px]">
              GET A QUOTE
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Banner

