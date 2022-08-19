import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

export default function ProductCard() {
  const { products, loading } = useContext(ProductContext);
  const path = 'http://localhost:1337';
  const fourProducts = products.slice(0, 4);

  if (loading === true) {
    return <h2>Loading...</h2>;
  } else if (products.length === 0) {
    return <h2>No Products to Show</h2>;
  } else {
    return (
      <div className="product-gallery">
        {fourProducts.map((product, index) => (
          <div className="product-card" key={index}>
            <img
              src={`${path}${product.attributes.image.data.attributes.formats.small.url}`}
              className="product-image"
            />
            <div className="product-details">
              <h4>{product.attributes.name}</h4>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
