import { ExternalLink } from "lucide-react"

export default function Press() {
  const articles = [
    {
      id: 1,
      title: "YATAKA - Thương Hiệu Ghế Massage Số 1 Tại Việt Nam",
      source: "Tạp chí Sức Khỏe",
      date: "15/11/2024",
      image: "/image/chi-nhanh/yataka-showroom-experience.jpg",
    },
    {
      id: 2,
      title: "Công Nghệ Massage Mới Của YATAKA Được Giáo Sư Quốc Tế Công Nhận",
      source: "Báo Công Nghệ",
      date: "10/11/2024",
      image: "/image/khach-hang/le-duong-bao-lam.jpg",
    },
    {
      id: 3,
      title: "Làm Thế Nào Để Chọn Ghế Massage Phù Hợp - Hướng Dẫn Từ YATAKA",
      source: "Sống Khỏe",
      date: "05/11/2024",
      image: "/image/khach-hang/Ngo-Kien-Huy-su-dung-ghe-massage-osanno-Os-2000.jpg",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Báo Chí Nói Gì Về Chúng Tôi</h2>
          <p className="text-gray-600">YATAKA được các tờ báo lớn nhất nước đưa tin</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition group"
            >
              {/* Image */}
              <div className="relative aspect-[3/2] overflow-hidden bg-gray-200">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <p className="text-xs text-amber-600 font-semibold mb-2">{article.source}</p>
                <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2 text-sm">{article.title}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">{article.date}</span>
                  <ExternalLink size={16} className="text-amber-600" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
