import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

export default function ProductCard() {
  const { products } = useContext(ProductContext);
  const path = 'http://localhost:1337';
  const fourProducts = products.slice(0, 4);

  if(products.length){
  return (
    <>
      {fourProducts.map((product, index) => (
        <div className="card" key={index}>
          <img src={`${path}${product.attributes.image.data.attributes.formats.medium.url}`}/>
        </div>
      ))}
    </>
  )} else {
    return <h2>Loading...</h2>
  }
}
