import { render } from '@testing-library/react';
import React from 'react';
import Toolbar from './Toolbar';

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
});
