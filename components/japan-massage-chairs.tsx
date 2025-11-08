import ProductCategory from "./product-category"

export default function JapanMassageChairs() {
  const products = [
    {
      id: 1,
      name: "YATAKA Sakura Deluxe",
      price: "72.500.000 VND",
      originalPrice: "95.000.000 VND",
      rating: 4.9,
      reviews: 124,
      image: "/image/san-pham/1_1.webp",
      category: "japan",
    },
    {
      id: 2,
      name: "YATAKA Tokyo Premium",
      price: "85.000.000 VND",
      originalPrice: "110.000.000 VND",
      rating: 4.8,
      reviews: 98,
      image: "/image/san-pham/1_1_11zon.webp",
      category: "japan",
    },
    {
      id: 3,
      name: "YATAKA Fuji Elite",
      price: "78.900.000 VND",
      originalPrice: "102.000.000 VND",
      rating: 4.7,
      reviews: 156,
      image: "/image/san-pham/s88_v2_gold.gif",
      category: "japan",
    },
    {
      id: 4,
      name: "YATAKA Kyoto Master",
      price: "95.500.000 VND",
      originalPrice: "125.000.000 VND",
      rating: 4.9,
      reviews: 87,
      image: "/image/san-pham/1_1.webp",
      category: "japan",
    },
  ]

  return (
    <ProductCategory
      title="Ghế Massage Nhật Bản"
      description="Công nghệ massage tiên tiến từ Nhật Bản - Giảm căng thẳng, cải thiện sức khỏe"
      products={products}
      bgColor="bg-white"
    />
  )
}
