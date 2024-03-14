import axios from 'axios';
import { environment } from '../environments/environment-dev';
import { Product } from '../shared/types';

export const getAllProducts = async (): Promise<Product[]> => {
  const response = await axios.get(`${environment.apiUri}/product/products`);
  return response.data as Product[];
};
