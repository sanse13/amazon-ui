import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Login from './Login';

describe('Login component', () => {
  it('sets user as logged in when "Continuar" button is clicked', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>,
    );

    fireEvent.click(getByText('Continuar'));

    expect(localStorage.getItem('userLoggedIn')).toBe('false');
  });
});
