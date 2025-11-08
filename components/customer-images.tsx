export default function CustomerImages() {
  const images = [
    {
      id: 1,
      image: "/image/khach-hang/chup-voi-nhan-vien.jpg",
      location: "Khách hàng với nhân viên",
    },
    {
      id: 2,
      image: "/image/khach-hang/le-duong-bao-lam.jpg",
      location: "Lê Dương Bảo Lâm",
    },
    {
      id: 3,
      image: "/image/khach-hang/Ngo-Kien-Huy-su-dung-ghe-massage-osanno-Os-2000.jpg",
      location: "Ngô Kiến Huy",
    },
    {
      id: 4,
      image: "/image/khach-hang/oc-thanh-van.jpg",
      location: "Ốc Thanh Vân",
    },
    {
      id: 5,
      image: "/image/khach-hang/z6973655306375_1842fc82e6ce8eae2ec6e525e34d6ae4-600x600.jpg",
      location: "Khách hàng YATAKA",
    },
    {
      id: 6,
      image: "/image/khach-hang/chup-voi-nhan-vien.jpg",
      location: "Khách hàng tại showroom",
    },
    {
      id: 7,
      image: "/image/khach-hang/le-duong-bao-lam.jpg",
      location: "Khách hàng hài lòng",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Hình Ảnh Khách Hàng Đã Mua</h2>
          <p className="text-gray-600">Khách hàng từ khắp nơi hài lòng với sản phẩm YATAKA</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 auto-rows-fr gap-2">
          {images.map((item, index) => {
            let colSpan = ""
            let rowSpan = ""
            let colStart = ""
            let rowStart = ""
            
            if (index === 0) {
              // div1: chiếm 2 cột x 2 hàng
              colSpan = "md:col-span-2 lg:col-span-2"
              rowSpan = "md:row-span-2 lg:row-span-2"
            } else if (index === 1) {
              // div2: ở cột 3, hàng 1
              colStart = "md:col-start-3 lg:col-start-3"
            } else if (index === 2) {
              // div3: ở cột 4, hàng 1
              colStart = "md:col-start-4 lg:col-start-4"
            } else if (index === 3) {
              // div4: ở cột 4, hàng 2
              colStart = "md:col-start-4 lg:col-start-4"
              rowStart = "md:row-start-2 lg:row-start-2"
            } else if (index === 4) {
              // div5: ở cột 3, hàng 2
              colStart = "md:col-start-3 lg:col-start-3"
              rowStart = "md:row-start-2 lg:row-start-2"
            } else if (index === 5) {
              // div6: ở cột 5, hàng 1
              colStart = "md:col-start-5 lg:col-start-5"
            } else if (index === 6) {
              // div7: ở cột 5, hàng 2
              colStart = "md:col-start-5 lg:col-start-5"
              rowStart = "md:row-start-2 lg:row-start-2"
            }
            
            return (
            <div
              key={item.id}
              className={`rounded-lg overflow-hidden shadow-md hover:shadow-xl transition group cursor-pointer ${colSpan} ${rowSpan} ${colStart} ${rowStart}`}
            >
              <div className="relative aspect-square overflow-hidden bg-gray-200">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={`Customer from ${item.location}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition flex items-end">
                  <div className="p-4 w-full">
                    <p className="text-white font-semibold">{item.location}</p>
                  </div>
                </div>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
