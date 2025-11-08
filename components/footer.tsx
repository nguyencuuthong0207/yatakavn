
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand & Company Info */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="mb-4">
              <img 
                src="https://yatakavietnam.vn/wp-content/uploads/2022/07/logo.png" 
                alt="YATAKA Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed text-gray-400 mb-4">
              YATAKA® | Thuộc sở hữu của Công Ty Thương Mại Quốc Tế Imaxcare là một trong những nhà phân phối ghế massage và
              các thiết bị massage thông minh uy tín tại Việt Nam. Sở hữu những sản phẩm và công nghệ độc quyền, YATAKA tiên
              phong trong việc ứng dụng công nghệ 4.0 vào lĩnh vực chăm sóc sức khỏe tại Việt Nam.
            </p>
          </div>

          {/* Column 1: THƯƠNG HIỆU YATAKA */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm">Thương Hiệu YATAKA</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-amber-500 transition">
                  Giới Thiệu
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-500 transition">
                  Sản Phẩm Khuyến Mãi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-500 transition">
                  Tại Sao Nên Chọn YATAKA
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-500 transition">
                  Tin Tức
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-500 transition">
                  Liên Hệ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-500 transition">
                  Trung Tâm Bảo Hành
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: SẢN PHẨM */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm">Sản Phẩm</h4>
            <div className="mb-4">
              <h5 className="text-white font-semibold mb-2 text-xs">Sản Phẩm Ghế Massage</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-amber-500 transition">
                    Ghế Massage Giá Rẻ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-500 transition">
                    Ghế Massage Phổ Thông
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-500 transition">
                    Ghế Massage Cao Cấp
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-2 text-xs">Sản Phẩm Tập Thể Dục</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-amber-500 transition">
                    Máy Chạy Bộ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-500 transition">
                    Xe Đạp Tập Thể Dục
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: HỖ TRỢ KHÁCH HÀNG */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm">Hỗ Trợ Khách Hàng</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-amber-500 transition">
                  Điều Khoản Dịch Vụ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-500 transition">
                  Chính Sách Bảo Hành
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-500 transition">
                  Chính Sách Thanh Toán
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-500 transition">
                  Chính Sách Vận Chuyển
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-500 transition">
                  Chính Sách Bảo Mật
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-500 transition">
                  Chính Sách Đổi Sản Phẩm
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8">
          <div className="text-center text-xs text-gray-500">
            <p>© 2025 YATAKA. Tất cả các quyền được bảo lưu.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
