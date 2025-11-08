import Header from "@/components/header"
import Banner from "@/components/banner"
import HotSale from "@/components/hot-sale"
import JapanMassageChairs from "@/components/japan-massage-chairs"
import VersatileMassageChairs from "@/components/versatile-massage-chairs"
import ErgonomicMassageChairs from "@/components/ergonomic-massage-chairs"
import OtherProducts from "@/components/other-products"
import AboutUs from "@/components/about-us"
import Certificates from "@/components/certificates"
import Reviews from "@/components/reviews"
import CustomerImages from "@/components/customer-images"
import Press from "@/components/press"
import News from "@/components/news"
import StoreNetwork from "@/components/store-network"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <HotSale />
      <JapanMassageChairs />
      <VersatileMassageChairs />
      <ErgonomicMassageChairs />
      <OtherProducts />
      <AboutUs />
      <Certificates />
      <Reviews />
      <CustomerImages />
      <Press />
      <News />
      <StoreNetwork />
      <Footer />
    </>
  )
}
