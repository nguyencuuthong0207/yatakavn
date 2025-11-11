import ProductCategory from "./product-category"

export default function VersatileMassageChairs() {
  const products = [
    {
      id: 1,
      name: "YATAKA Universal Max",
      price: "68.000.000 đ",
      originalPrice: "88.000.000 đ",
      rating: 4.8,
      reviews: 142,
      image: "/image/san-pham/1_1_11zon.webp",
      category: "versatile",
    },
    {
      id: 2,
      name: "YATAKA All-in-One Pro",
      price: "75.900.000 đ",
      originalPrice: "98.000.000 đ",
      rating: 4.7,
      reviews: 165,
      image: "/image/san-pham/s88_v2_gold.gif",
      category: "versatile",
    },
    {
      id: 3,
      name: "YATAKA Complete Therapy",
      price: "82.500.000 đ",
      originalPrice: "108.000.000 đ",
      rating: 4.9,
      reviews: 201,
      image: "/image/san-pham/1_1.webp",
      category: "versatile",
    },
    {
      id: 4,
      name: "YATAKA Total Wellness",
      price: "71.000.000 đ",
      originalPrice: "92.000.000 đ",
      rating: 4.6,
      reviews: 118,
      image: "/image/san-pham/1_1_11zon.webp",
      category: "versatile",
    },
  ]

  return (
    <ProductCategory
      title="Ghế Massage Toàn Năng"
      description="Đa chức năng, tích hợp nhiều chế độ massage để chăm sóc toàn bộ cơ thể"
      products={products}
      bgColor="bg-gray-50"
    />
  )
}
