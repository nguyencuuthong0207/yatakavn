import ProductCategory from "./product-category"

export default function OtherProducts() {
  const products = [
    {
      id: 1,
      name: "YATAKA Foot Spa Deluxe",
      price: "8.500.000 VND",
      originalPrice: "11.000.000 VND",
      rating: 4.7,
      reviews: 89,
      image: "/image/san-pham/1_1.webp",
      category: "other",
    },
    {
      id: 2,
      name: "YATAKA Neck & Shoulder Massager",
      price: "4.200.000 VND",
      originalPrice: "5.500.000 VND",
      rating: 4.6,
      reviews: 156,
      image: "/image/san-pham/1_1_11zon.webp",
      category: "other",
    },
    {
      id: 3,
      name: "YATAKA Heat Belt Pro",
      price: "3.500.000 VND",
      originalPrice: "4.500.000 VND",
      rating: 4.8,
      reviews: 201,
      image: "/image/san-pham/s88_v2_gold.gif",
      category: "other",
    },
    {
      id: 4,
      name: "YATAKA Portable Mini Massager",
      price: "2.800.000 VND",
      originalPrice: "3.500.000 VND",
      rating: 4.5,
      reviews: 118,
      image: "/image/san-pham/1_1.webp",
      category: "other",
    },
  ]

  return (
    <ProductCategory
      title="Sản Phẩm Khác"
      description="Các thiết bị massage bổ sung để nâng cao chất lượng sức khỏe"
      products={products}
      bgColor="bg-gray-50"
    />
  )
}
