import GalleryBlock from '../components/GalleryBlock'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCards'
import ImageProvider from '../context/ImageContext'
import ProductProvider from '../context/ProductContext'

export default function Home() {
  return (
    <ProductProvider>
      <ImageProvider>
        <Navbar />
        <div className="body-container">
          <Hero />
          <ProductCard />
          <GalleryBlock />
        </div>
      </ImageProvider>
    </ProductProvider>
  )
}
