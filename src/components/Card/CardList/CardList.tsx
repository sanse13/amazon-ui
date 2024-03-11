import axios from 'axios';
import { useEffect, useState } from 'react';
import { environment } from '../../../environments/environment-dev';
import CardItem from '../CardItem/CardItem';
import React from 'react';

const CardList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`${environment.apiUri}/product/products`).then((productsData) => {
      setProducts(productsData.data);
    });
  }, []);

  return (
    <div className="m-8">
      <CardItem />
    </div>
  );
};

export default CardList;
