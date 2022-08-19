import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCards'
import ProductFeature from '../components/ProductFeature'
import ProductProvider from '../context/ProductContext'

export default function Home() {
  return (
    <ProductProvider>
      <Navbar />
      <div className="body-container">
        <Hero />
        <ProductCard />
      </div>
    </ProductProvider>
  )
}
