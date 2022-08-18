import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import ProductProvider from '../context/ProductContext'

export default function Home() {
  return (
    <>
      <ProductProvider>
        <Navbar />
        <div className="container">
          <div className="hero">
            <Hero />
          </div>
          <div className="product-gallery">
            <ProductCard />
          </div>
        </div>
      </ProductProvider>
    </>
  )
}
