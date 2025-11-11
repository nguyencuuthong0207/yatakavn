"use client"

import { Star, ShoppingCart } from "lucide-react"

interface Product {
  id: number
  name: string
  price: string
  originalPrice?: string
  rating: number
  reviews: number
  image: string
  category: string
}

interface ProductCategoryProps {
  title: string
  description: string
  products: Product[]
  bgColor?: string
}

export default function ProductCategory({
  title,
  description,
  products,
  bgColor = "bg-gray-50",
}: ProductCategoryProps) {
  return (
    <section className={`py-16 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition group flex flex-col h-full"
            >
              <div className="relative aspect-square bg-gray-200 overflow-hidden flex-shrink-0">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-sm min-h-[40px]">
                  {product.name}
                </h3>

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

                <div className="mb-4">
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-amber-600">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
                    )}
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
            Xem Tất Cả {title}
          </button>
        </div>
      </div>
    </section>
  )
}
