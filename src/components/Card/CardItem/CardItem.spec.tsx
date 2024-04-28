import { render, screen } from '@testing-library/react';
import React from 'react';
import CardItem from './CardItem';

describe('Card item', () => {
  test('renders card item with share button', () => {
    render(<CardItem image="airpods.jpeg" name="" description="" price={2} />);

    // Busca el botón de compartir
    const shareButton = screen.getByRole('button', { name: /share/i });

    // Verifica si el botón de compartir está presente en el DOM
    expect(shareButton).toBeInTheDocument();
  });
});
