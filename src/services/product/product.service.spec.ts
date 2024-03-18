import { environment } from '../../environments/environment-dev';
import { getAllProducts } from './product.service';

const mockFetch = jest.fn();

global.fetch = mockFetch;

describe('getAllProducts function', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns products when the API call is successful', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => [
        { price: 1, name: 'Product 1' },
        { price: 2, name: 'Product 2' },
      ],
    });

    const products = await getAllProducts();

    expect(products).toHaveLength(2);

    expect(mockFetch).toHaveBeenCalledWith(
      `${environment.apiUri}/product/products`,
    );
  });

  it('throws an error when the API call fails', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
    });

    await expect(getAllProducts()).rejects.toThrow('Failed to fetch products');

    expect(mockFetch).toHaveBeenCalledWith(
      `${environment.apiUri}/product/products`,
    );
  });
});
