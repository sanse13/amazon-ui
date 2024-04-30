import { environment } from '../../environments/environment-dev';

export const login = async (loginPayload: {
  email: string;
  password: string;
}): Promise<string> => {
  const body = JSON.stringify({
    email: loginPayload.email,
    password: loginPayload.password,
  });

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
