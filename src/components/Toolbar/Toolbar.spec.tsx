import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Toolbar from './Toolbar';

describe('Toolbar component', () => {
  test('renders toolbar correctly', () => {
    render(
      <MemoryRouter>
        <Toolbar />
      </MemoryRouter>,
    );

    expect(screen.getByText('Cuenta y listas')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('Buscar en Amazon.es'),
    ).toBeInTheDocument();
    expect(screen.getByAltText('amazon logo')).toBeInTheDocument();
  });

  test('opens and closes logout menu', () => {
    render(
      <MemoryRouter>
        <Toolbar />
      </MemoryRouter>,
    );

    const logoutButton = screen.getByText('Cuenta y listas');
    fireEvent.click(logoutButton);

    const logoutMenuItem = screen.getByText('Logout');
    expect(logoutMenuItem).toBeInTheDocument();

    fireEvent.click(logoutButton);

    const accessToken = sessionStorage.getItem('access-token');
    expect(accessToken).not.toBe('eyHsdfsebldsipñhkhlwe');
  });
});
