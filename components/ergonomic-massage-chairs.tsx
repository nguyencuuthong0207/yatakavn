import ProductCategory from "./product-category"

export default function ErgonomicMassageChairs() {
  const products = [
    {
      id: 1,
      name: "YATAKA Ergonomic Pro",
      price: "55.900.000 đ",
      originalPrice: "72.000.000 đ",
      rating: 4.7,
      reviews: 187,
      image: "/image/san-pham/s88_v2_gold.gif",
      category: "ergonomic",
    },
    {
      id: 2,
      name: "YATAKA Posture Perfect",
      price: "62.500.000 đ",
      originalPrice: "81.000.000 đ",
      rating: 4.8,
      reviews: 154,
      image: "/image/san-pham/1_1.webp",
      category: "ergonomic",
    },
    {
      id: 3,
      name: "YATAKA Comfort Zone",
      price: "58.000.000 đ",
      originalPrice: "75.000.000 đ",
      rating: 4.6,
      reviews: 203,
      image: "/image/san-pham/1_1_11zon.webp",
      category: "ergonomic",
    },
    {
      id: 4,
      name: "YATAKA Spine Support",
      price: "64.900.000 đ",
      originalPrice: "84.000.000 đ",
      rating: 4.9,
      reviews: 176,
      image: "/image/san-pham/s88_v2_gold.gif",
      category: "ergonomic",
    },
  ]

  return (
    <ProductCategory
      title="Ghế Massage Công Thái Học"
      description="Thiết kế khoa học, bảo vệ sức khỏe cột sống - Phù hợp làm việc lâu"
      products={products}
      bgColor="bg-white"
    />
  )
}
