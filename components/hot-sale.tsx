"use client"

import { Star, ShoppingCart, Flame, Zap } from "lucide-react"

export default function HotSale() {
  const products = [
    {
      id: 1,
      name: "Ghế Massage Osanno OS 10 DOKUJI NO GIJUSTU",
      price: "155.000.000 VND",
      originalPrice: "175.000.000 VND",
      rating: 5.0,
      reviews: 156,
      image: "/image/san-pham/1_1.webp",
      badge: "PREMIUM",
      sold: 45,
      remaining: 12,
    },
    {
      id: 2,
      name: "Ghế Massage Osanno OS 900",
      price: "55.200.000 VND",
      originalPrice: "69.900.000 VND",
      rating: 4.8,
      reviews: 98,
      image: "/image/san-pham/1_1_11zon.webp",
      badge: "BEST SELLER",
      sold: 78,
      remaining: 8,
    },
    {
      id: 3,
      name: "Ghế Massage Osanno OS 6688",
      price: "79.000.000 VND",
      originalPrice: "99.000.000 VND",
      rating: 4.7,
      reviews: 203,
      image: "/image/san-pham/s88_v2_gold.gif",
      badge: "HOT SALE",
      sold: 156,
      remaining: 25,
    },
    {
      id: 4,
      name: "Ghế Massage Osanno - Cao Cấp",
      price: "45.000.000 VND",
      originalPrice: "65.000.000 VND",
      rating: 4.6,
      reviews: 76,
      image: "/image/san-pham/1_1.webp",
      badge: "GIẢM 31%",
      sold: 32,
      remaining: 5,
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-amber-50 to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full mb-4 animate-pulse">
            <Zap size={16} className="animate-spin" />
            <span className="font-semibold">FLASH SALE HÔM NAY</span>
            <Zap size={16} className="animate-spin" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Sản Phẩm Nổi Bật</h2>
          <p className="text-gray-600">Những sản phẩm được yêu thích nhất của khách hàng</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition group relative flex flex-col h-full"
            >
              <div className="relative aspect-square bg-gray-200 overflow-hidden flex-shrink-0">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute top-3 right-3 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg">
                  <Flame size={16} className="animate-bounce" fill="currentColor" />
                  {product.badge}
                </div>
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-sm">{product.name}</h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        fill="currentColor"
                        className={i < Math.floor(product.rating) ? "" : "opacity-30"}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-600">({product.reviews})</span>
                </div>

                {/* Price */}
                <div className="mb-3">
                  <div className="flex flex-wrap gap-2 items-baseline whitespace-nowrap">
                    <span className="text-lg font-bold text-amber-600">{product.price}</span>
                    <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
                  </div>
                </div>

                <div className="mb-3 bg-gray-100 rounded p-2 text-xs">
                  <div className="flex justify-between text-gray-700 mb-1">
                    <span>
                      Đã bán: <strong className="text-red-600">{product.sold}</strong>
                    </span>
                    <span>
                      Còn lại: <strong className="text-green-600">{product.remaining}</strong>
                    </span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-1.5">
                    <div
                      className="bg-red-500 h-1.5 rounded-full transition-all"
                      style={{ width: `${(product.sold / (product.sold + product.remaining)) * 100}%` }}
                    />
                  </div>
                </div>

                <button className="w-full mt-auto bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-lg font-semibold flex items-center justify-center gap-2 transition">
                  <ShoppingCart size={16} />
                  Thêm vào giỏ
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition">
            Xem Tất Cả Sản Phẩm
          </button>
        </div>
      </div>
    </section>
  )
}
