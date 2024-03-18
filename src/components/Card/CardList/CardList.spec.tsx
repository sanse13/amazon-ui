import { render, waitFor } from '@testing-library/react';
import React from 'react';
import { getAllProducts } from '../../../services/product/product.service';
import { Product } from '../../../shared/types';
import CardList from './CardList';

jest.mock('../../../services/product/product.service.ts', () => ({
  getAllProducts: jest.fn(),
}));

describe('Card list', () => {
  it('renders products', async () => {
    const mockProducts: Product[] = [
      { name: 'Product 1', price: 1 },
      { name: 'Product 2', price: 2 },
    ];
    (getAllProducts as jest.Mock).mockResolvedValue(mockProducts);

    const { getByText } = render(<CardList />);

    await waitFor(() => {
      expect(getByText('Product 1')).toBeInTheDocument();
      expect(getByText('Product 2')).toBeInTheDocument();
    });
  });
});
