import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ImageProvider from '../context/ImageContext'
import ProductProvider from '../context/ProductContext'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCards'
import GalleryBlock from '../components/GalleryBlock'
import FeatureBlock from '../components/FeatureBlock'

export default function Home() {
  return (
    <ProductProvider>
      <ImageProvider>
        <Navbar />
        <div className="body-container">
          <Hero />
          <ProductCard />
          <GalleryBlock />
          <FeatureBlock />
        </div>
        <Footer />
      </ImageProvider>
    </ProductProvider>
  )
} 
