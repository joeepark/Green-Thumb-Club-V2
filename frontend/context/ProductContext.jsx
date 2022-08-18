import { createContext, useEffect, useState } from 'react';
import { PRODUCT_QUERY } from '../pages/query';

export const ProductContext = createContext();

export default function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:1337/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: PRODUCT_QUERY,
        }),
      });
      const data = await response.json();
      setProducts(data.data.products.data);
    } catch (err) {
      console.error(err);
    }
  };
  // console.log('outside fetch', products);

  return <ProductContext.Provider value={{ products }}>{children}</ProductContext.Provider>;
}
