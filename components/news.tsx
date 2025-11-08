import { ExternalLink } from "lucide-react"

export default function News() {
  const news = [
    {
      id: 1,
      title: "YATAKA ra mắt dòng ghế massage AI thế hệ mới năm 2024",
      excerpt:
        "Với công nghệ AI tiên tiến, ghế massage YATAKA giúp người dùng có trải nghiệm massage tùy chỉnh cá nhân hóa.",
      date: "15/11/2024",
      image: "/image/san-pham/1_1.webp",
      link: "#",
    },
    {
      id: 2,
      title: "Ghế massage YATAKA được vinh danh tại triển lãm quốc tế",
      excerpt:
        "Sản phẩm ghế massage YATAKA nhận giải thưởng về thiết kế và chất lượng tại triển lãm Asia Wellness Expo.",
      date: "08/11/2024",
      image: "/image/san-pham/1_1_11zon.webp",
      link: "#",
    },
    {
      id: 3,
      title: "Chuyên gia y tế khuyến cáo sử dụng ghế massage YATAKA",
      excerpt: "Các bác sĩ y học cổ truyền đã xác nhận hiệu quả của ghế massage YATAKA trong việc giảm căng thẳng cơ.",
      date: "01/11/2024",
      image: "/image/khach-hang/chup-voi-nhan-vien.jpg",
      link: "#",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Tin Tức & Bài Viết</h2>
          <p className="text-gray-600">Cập nhật thông tin mới nhất về YATAKA</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-[3/2] overflow-hidden bg-gray-200">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-amber-600 font-semibold mb-2">{item.date}</p>
                <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 hover:text-amber-600 transition">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{item.excerpt}</p>
                <a
                  href={item.link}
                  className="text-amber-600 font-semibold text-sm flex items-center gap-1 hover:text-amber-700 transition"
                >
                  Đọc tiếp <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
