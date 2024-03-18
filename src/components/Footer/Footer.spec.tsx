import { render } from '@testing-library/react';
import React from 'react';
import Footer from './Footer';

describe('Footer component', () => {
  it('renders correctly', () => {
    const { getByText, getByRole } = render(<Footer />);

    expect(getByText('Amazon™')).toBeInTheDocument();

    expect(getByText('About')).toBeInTheDocument();
    expect(getByText('Privacy Policy')).toBeInTheDocument();
    expect(getByText('Licensing')).toBeInTheDocument();
    expect(getByText('Contact')).toBeInTheDocument();

    const contactLink = getByText('Contact');
    expect(contactLink).toHaveClass('hover:underline');
  });
});
