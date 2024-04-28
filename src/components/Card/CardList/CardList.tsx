import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../../../services/product/product.service';
import { Product } from '../../../shared/types';
import CardItem from '../CardItem/CardItem';

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
    <div className="m-8 grid grid-cols-4 gap-8">
      {products.map((product, index) => (
        <CardItem
          key={index}
          name={product.name}
          description={product.description}
          image={product.imageRef}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default CardList;
