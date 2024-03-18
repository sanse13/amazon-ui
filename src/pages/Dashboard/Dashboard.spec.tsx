import { render } from '@testing-library/react';
import React from 'react';
import Dashboard from './Dashboard';

describe('Dashboard component', () => {
  it('renders Toolbar if user is logged in', () => {
    localStorage.setItem('userLoggedIn', 'true');

    const { getByText } = render(<Dashboard />);

    expect(getByText('Enviar a Adrian')).toBeInTheDocument();
  });
});
