import { environment } from '../../environments/environment-dev';
import { Product } from '../../shared/types';

export const getAllProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${environment.apiUri}/product/products`);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  const data = await response.json();
  return data as Product[];
};
