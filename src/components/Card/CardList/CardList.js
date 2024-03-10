import axios from 'axios';
import { useEffect, useState } from 'react';
import { environment } from '../../../environments/environment-dev';

const CardList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`${environment.apiUri}/product/products`).then((productsData) => {
      setProducts(productsData.data);
    });
  }, []);

  return (
    <div className="m-8">
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CardList;
