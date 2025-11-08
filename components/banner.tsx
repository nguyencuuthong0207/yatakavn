"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Banner() {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  const banners = [
    {
      type: "video",
      videoId: "1118953784",
    },
    {
      type: "image",
      image:
        "https://yatakavietnam.vn/wp-content/uploads/2024/02/z5194049642661_09eaf3bd86567eb4b5bda76b8cfc2d99-1536x517.jpg",
    },
  ]

  useEffect(() => {
    if (!autoPlay) return
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [autoPlay, banners.length])

  const next = () => {
    setCurrent((prev) => (prev + 1) % banners.length)
    setAutoPlay(false)
  }
  const prev = () => {
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length)
    setAutoPlay(false)
  }

  return (
    <section className="relative w-full bg-black overflow-hidden">
      <div className="w-full aspect-[21/9]">
        {current === 0 && (
          <div className="relative w-full h-full">
            <iframe
              src={`https://player.vimeo.com/video/1118953784?h=8b8a5d5e0a&autoplay=1&loop=1&muted=1`}
              className="absolute inset-0 w-full h-full object-cover"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}

        {banners.map((banner, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              idx === current ? "opacity-100" : "opacity-0"
            }`}
          >
            {banner.type === "image" && (
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('${banner.image}')`,
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition z-10"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition z-10"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {banners.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCurrent(idx)
              setAutoPlay(false)
            }}
            className={`w-3 h-3 rounded-full transition ${idx === current ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </section>
  )
}
