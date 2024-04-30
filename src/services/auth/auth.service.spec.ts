import { login } from './auth.service';

jest.mock('./../../environments/environment-dev', () => ({
  environment: {
    apiUri: 'http://example.com/api',
  },
}));

const mockFetch = jest.fn();

global.fetch = mockFetch;

describe('login service', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return access token', async () => {
    const mockResponseData =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

    mockFetch.mockResolvedValueOnce({
      ok: true,
      text: () => Promise.resolve(mockResponseData),
    });

    const accessToken = await login({
      email: 'adrian@gmail.com',
      password: 'casa',
    });

    expect(accessToken).toBe(mockResponseData);

    expect(global.fetch).toHaveBeenCalledWith(
      'http://example.com/api/auth/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: 'adrian@gmail.com', password: 'casa' }),
      },
    );
  });

  it('should throw error when login fails', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
    });

    await expect(
      login({
        email: 'adrian@gmail.com',
        password: 'casa',
      }),
    ).rejects.toThrow('Failed to login');
  });
});
