import { render, screen } from '@testing-library/react';
import React from 'react';
import CardItem from './CardItem';

describe('Card item', () => {
  test('renders card item', () => {
    render(<CardItem />);
    const titleElement = screen.getByText(/Garmin Epix Gen 2/);
    expect(titleElement).toBeInTheDocument();
  });
});
