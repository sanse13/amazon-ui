import { environment } from '../../../environments/environment-dev';

export const login = async (): Promise<string> => {
  const body = JSON.stringify({ email: 'test@test.test', password: 'casa' });

  const response = await fetch(`${environment.apiUri}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  });
  if (!response.ok) {
    throw new Error('Failed to login');
  }

  const data = await response.text();
  return data;
};
