"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      rating: 5,
      text: "Sản phẩm tuyệt vời! Chất lượng cao, dịch vụ hỗ trợ rất tốt. Tôi rất hài lòng với lựa chọn này.",
      avatar: "/image/khach-hang/le-duong-bao-lam.jpg",
    },
    {
      id: 2,
      name: "Trần Thị B",
      rating: 5,
      text: "Ghế massage này thực sự giúp tôi giãn cơ sau một ngày làm việc. Giá cả hợp lý, chất lượng tốt.",
      avatar: "/image/khach-hang/oc-thanh-van.jpg",
    },
    {
      id: 3,
      name: "Lê Văn C",
      rating: 4,
      text: "Tốt lắm, giao hàng nhanh, dùng được hơn 1 năm vẫn hoạt động tốt. Sẽ giới thiệu cho bạn bè.",
      avatar: "/image/khach-hang/Ngo-Kien-Huy-su-dung-ghe-massage-osanno-Os-2000.jpg",
    },
    {
      id: 4,
      name: "Phạm Văn D",
      rating: 5,
      text: "Thiết kế đẹp, công nghệ tiên tiến. Gia đình tôi đều thích. Cảm ơn YATAKA!",
      avatar: "/image/khach-hang/chup-voi-nhan-vien.jpg",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerView = 3
  const maxIndex = Math.max(0, reviews.length - itemsPerView)

  const next = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Đánh Giá Khách Hàng</h2>
          <p className="text-gray-600">Hàng nghìn khách hàng tin tưởng và yêu thích sản phẩm của chúng tôi</p>
        </div>

        <div className="relative">
          {/* Slider Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="min-w-0 flex-shrink-0 px-3"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-6 shadow-md hover:shadow-lg transition h-full">
                    {/* Rating */}
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill={i < review.rating ? "#f59e0b" : "#e5e7eb"} className="text-amber-400" />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-700 text-sm mb-4 line-clamp-3">{review.text}</p>

                    {/* User Info */}
                    <div className="flex items-center gap-3">
                      <img
                        src={review.avatar || "/placeholder.svg"}
                        alt={review.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{review.name}</p>
                        <p className="text-gray-500 text-xs">Khách hàng xác minh</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition z-10"
            aria-label="Previous"
          >
            <ChevronLeft size={24} className="text-gray-700" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition z-10"
            aria-label="Next"
          >
            <ChevronRight size={24} className="text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  )
}
