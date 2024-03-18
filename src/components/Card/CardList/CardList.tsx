import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../../../services/product.service';
import { Product } from '../../../shared/types';

const CardList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    const fetchedProducts = await getAllProducts();
    setProducts(fetchedProducts);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="m-8 grid-cols-3">
      {products.map((product, index) => (
        <p key={index}>{product.name}</p>
      ))}
    </div>
  );
};

export default CardList;
