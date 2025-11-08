export default function AboutUs() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src="/image/chi-nhanh/yataka-showroom-experience.jpg" alt="Về chúng tôi" className="w-full h-96 object-cover" />
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Về Chúng Tôi</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              YATAKA là thương hiệu ghế massage hàng đầu tại Việt Nam với hơn 10 năm kinh nghiệm. Chúng tôi cam kết mang
              lại những sản phẩm chất lượng cao nhất với công nghệ massage tiên tiến nhất.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Với mạng lưới showroom rộng khắp cả nước, hàng chục nghìn khách hàng hài lòng đã tin tưởng chúng tôi. Mỗi
              sản phẩm của YATAKA đều được kiểm định chất lượng kỹ lưỡng và đảm bảo bảo hành toàn diện.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-amber-600">10+</h3>
                <p className="text-gray-600 text-sm">Năm kinh nghiệm</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-amber-600">50.000+</h3>
                <p className="text-gray-600 text-sm">Khách hàng hài lòng</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-amber-600">30+</h3>
                <p className="text-gray-600 text-sm">Showroom toàn quốc</p>
              </div>
            </div>

            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition">
              Tìm Hiểu Thêm
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
