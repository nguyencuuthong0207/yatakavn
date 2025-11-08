export default function Certificates() {
  return (
    <section className="py-8 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-6 md:gap-8">
          {/* Text Section - Top */}
          <div className="text-center md:text-left max-w-2xl mx-auto md:mx-0">
            <h2 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              TIÊU CHUẨN QUỐC TẾ CHẤT LƯỢNG DẪN ĐẦU
            </h2>
            <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed">
              Sản phẩm YATAKA được sản xuất theo quy trình nghiêm ngặt, đảm bảo chất lượng vượt trội và an toàn tuyệt đối với
              các chứng nhận quốc tế như CE, ROHS và chứng nhận sản xuất thiết bị y tế Nhật Bản. Chúng tôi cam kết mang đến
              những sản phẩm chất lượng cao nhất và sự yên tâm tuyệt đối cho khách hàng trên toàn thế giới.
            </p>
          </div>

          {/* Image Section - Bottom */}
          <div className="relative rounded-lg overflow-hidden">
            <img
              src="https://fujiluxury.vn/vnt_upload/banner/05_2025/chung_nhan_2.jpg"
              alt="Tiêu chuẩn quốc tế chất lượng"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
