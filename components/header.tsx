"use client"

import { useState } from "react"
import { Menu, X, Phone, Search, ShoppingCart } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = ["GHẾ MASSAGE", "SẢN PHẨM KHÁC", "KIỂM TRA BẢO HÀNH", "KHÁCH HÀNG TIN DÙNG", "SHOWROOM", "TIN TỨC"]

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-end gap-6 text-sm">
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>0829 161 616</span>
          </div>
          <span>Hỗ trợ 24/7</span>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img 
                src="https://yatakavietnam.vn/wp-content/uploads/2022/07/logo.png" 
                alt="YATAKA Logo" 
                className="h-12 w-auto"
              />
            </div>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex gap-8 items-center">
              {menuItems.map((item) => (
                <a key={item} href="#" className="text-sm font-medium text-gray-700 hover:text-amber-600 transition">
                  {item}
                </a>
              ))}
            </nav>

            {/* Search, Cart and Mobile Menu */}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex bg-gray-100 rounded-lg px-3 py-2">
                <input type="text" placeholder="Tìm kiếm..." className="bg-transparent outline-none text-sm w-40" />
                <Search size={16} className="text-gray-400" />
              </div>

              {/* Shopping Cart */}
              <button className="relative p-2 hover:text-amber-600 transition">
                <ShoppingCart size={24} className="text-gray-700" />
                <span className="absolute top-0 right-0 bg-amber-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </button>

              {/* Mobile Menu Button */}
              <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <nav className="lg:hidden mt-4 space-y-2 border-t pt-4">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-amber-50 rounded"
                >
                  {item}
                </a>
              ))}
            </nav>
          )}
        </div>
      </header>
    </>
  )
}
