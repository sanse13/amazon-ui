import { render } from '@testing-library/react';
import React from 'react';
import * as router from 'react-router';
import { login } from '../../services/product/auth/auth.service';
import Toolbar from './Toolbar';

const navigate = jest.fn();

beforeEach(() => {
  jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
});

jest.mock('../../services/product/auth/auth.service', () => ({
  login: jest.fn(),
}));

describe('Toolbar component', () => {
  it('renders correctly', () => {
    const { getByAltText, getByPlaceholderText, getByText } = render(
      <Toolbar />,
    );

    const logoImage = getByAltText('amazon logo');
    expect(logoImage).toBeInTheDocument();

    const searchInput = getByPlaceholderText('Buscar en Amazon.es');
    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveClass('block w-[26rem]');

    expect(getByText('Hola Adrian')).toBeInTheDocument();

    expect(document.querySelector('.fa-location-dot')).toBeInTheDocument();
  });

  it('should fetchLogin', () => {
    const accessToken = 'eyASdjflkahsdfoadsf';
    (login as jest.Mock).mockResolvedValue(accessToken);

    render(<Toolbar />);
    const accessTokenSessionStorage = sessionStorage.getItem('accessToken');
    expect(accessTokenSessionStorage).toBeDefined();
  });
});
