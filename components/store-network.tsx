"use client"

import { useState } from "react"
import { MapPin, Phone, Clock } from "lucide-react"

export default function StoreNetwork() {
  const regions = [
    {
      id: "south",
      name: "Miền Nam",
      stores: [
        {
          id: 1,
          name: "Ghế Massage Osanno - Đông Thắp",
          address: "84 Phạm Hữu Lâu, TP. Cao Lãnh, Cao Lãnh, Đông Thắp 871000, Việt Nam",
          phone: "0969 324 086",
          time: "8h00 - 21h00 (Thứ 2 - CN)",
          avatar: "/image/chi-nhanh/yataka-showroom-experience.jpg",
        },
        {
          id: 2,
          name: "Ghế Massage Osanno - Bình Dương",
          address: "400 Đại lộ Bình Dương, Phú Lợi, Thủ Dầu Một, Bình Dương",
          phone: "0868 272 768",
          time: "8h00 - 21h00 (Thứ 2 - CN)",
          avatar: "/image/chi-nhanh/osanno-binh-duong.jpg",
        },
        {
          id: 3,
          name: "Ghế Massage Osanno - Buôn Ma Thuột",
          address: "54 đường Y Jut, phường Tân Tiến, Thành phố Buôn Ma Thuột, Đắk Lắk, Việt Nam",
          phone: "0924 949 497",
          time: "8h00 - 21h00 (Thứ 2 - CN)",
          avatar: "/image/chi-nhanh/store-dak-lak.jpg",
        },
        {
          id: 4,
          name: "Ghế Massage Osanno - TP.HCM",
          address: "435 D. Kình Dương Vương, An Lạc, Bình Tân, Hồ Chí Minh 700000, Việt Nam",
          phone: "0936 561 373",
          time: "8h00 - 21h00 (Thứ 2 - CN)",
          avatar: "/image/chi-nhanh/yataka-showroom-experience.jpg",
        },
      ],
    },
    {
      id: "west",
      name: "Miền Tây",
      stores: [
        {
          id: 5,
          name: "YATAKA CẦN THƠ",
          address: "123 Đại lộ Hòa Bình, P. An Phú, TP. Cần Thơ",
          phone: "0292.3701.123",
          time: "8h00 - 21h00 (Thứ 2 - CN)",
          avatar: "/image/chi-nhanh/yataka-showroom-experience.jpg",
        },
        {
          id: 6,
          name: "YATAKA KIÊN GIANG",
          address: "456 Quang Trung, P. Tân An, TP. Hà Tiên, Kiên Giang",
          phone: "0297.3847.321",
          time: "8h00 - 21h00 (Thứ 2 - CN)",
          avatar: "/image/chi-nhanh/osanno-binh-duong.jpg",
        },
      ],
    },
    {
      id: "central",
      name: "Miền Trung",
      stores: [
        {
          id: 7,
          name: "YATAKA ĐÀ NẴNG",
          address: "789 Nguyễn Văn Linh, P. Thạch Thang, Q. Hải Châu, TP. Đà Nẵng",
          phone: "0236.3611.555",
          time: "8h00 - 21h00 (Thứ 2 - CN)",
          avatar: "/image/chi-nhanh/yataka-showroom-experience.jpg",
        },
        {
          id: 8,
          name: "YATAKA HUẾ",
          address: "321 Lê Lợi, P. Phú Nhuận, TP. Huế",
          phone: "0234.2847.666",
          time: "8h00 - 21h00 (Thứ 2 - CN)",
          avatar: "/image/chi-nhanh/store-hue.jpg",
        },
      ],
    },
    {
      id: "highland",
      name: "Tây Nguyên",
      stores: [
        {
          id: 9,
          name: "YATAKA ĐẮK LẮK",
          address: "654 Yên Thế, P. Tây Sơn, TP. Buôn Ma Thuột, Đắk Lắk",
          phone: "0262.3811.777",
          time: "8h00 - 21h00 (Thứ 2 - CN)",
          avatar: "/image/chi-nhanh/store-dak-lak.jpg",
        },
        {
          id: 10,
          name: "YATAKA GIA LAI",
          address: "987 Hùng Vương, P. Hoa Lư, TP. Pleiku, Gia Lai",
          phone: "0269.3845.888",
          time: "8h00 - 21h00 (Thứ 2 - CN)",
          avatar: "/image/chi-nhanh/store-gia-lai.jpg",
        },
      ],
    },
  ]

  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)

  const filteredRegions = selectedRegion === null ? regions : regions.filter((region) => region.id === selectedRegion)

  const allFilteredStores = filteredRegions.flatMap((region) => region.stores)

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Hệ Thống Cửa Hàng</h2>
          <p className="text-gray-600">30+ cửa hàng trải dài khắp cả nước, phục vụ 24/7</p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-8">
          <button
            onClick={() => setSelectedRegion(null)}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              selectedRegion === null
                ? "bg-gray-900 text-white"
                : "border-2 border-gray-300 text-gray-700 hover:border-amber-600"
            }`}
          >
            TẤT CẢ CỬA HÀNG
          </button>
          {regions.map((region) => (
            <button
              key={region.id}
              onClick={() => setSelectedRegion(region.id)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                selectedRegion === region.id
                  ? "bg-amber-600 text-white"
                  : "border-2 border-gray-300 text-gray-700 hover:border-amber-600"
              }`}
            >
              {region.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {allFilteredStores.map((store) => (
            <div
              key={store.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition border-l-4 border-amber-500 flex flex-col"
            >
              <img src={store.avatar || "/placeholder.svg"} alt={store.name} className="w-full h-48 md:h-56 object-cover" />
              <div className="p-4 md:p-6 flex flex-col flex-grow">
                <h4 className="font-semibold text-gray-900 mb-3 text-sm md:text-base">{store.name}</h4>

                <div className="space-y-2 md:space-y-3 text-xs md:text-sm mb-4 flex-grow">
                  <div className="flex gap-2">
                    <MapPin size={16} className="text-amber-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-600 leading-relaxed">{store.address}</p>
                  </div>
                  <div className="flex gap-2">
                    <Phone size={16} className="text-amber-600 flex-shrink-0" />
                    <p className="text-gray-600">{store.phone}</p>
                  </div>
                  <div className="flex gap-2">
                    <Clock size={16} className="text-amber-600 flex-shrink-0" />
                    <p className="text-gray-600">{store.time}</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-2 md:gap-3 mt-auto">
                  <button className="w-full md:flex-1 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white py-2 rounded font-semibold text-xs md:text-sm transition">
                    Xem Bản Đồ
                  </button>
                  <button className="w-full md:flex-1 bg-gray-900 hover:bg-gray-800 text-white py-2 rounded font-semibold text-xs md:text-sm transition">
                    Liên hệ tư vấn
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {allFilteredStores.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Không có cửa hàng trong khu vực được chọn</p>
          </div>
        )}
      </div>
    </section>
  )
}
