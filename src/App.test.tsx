import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';


describe('App', () => {
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/Hola/i);
    expect(linkElement).toBeInTheDocument();
  });
});
