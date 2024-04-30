import { render } from '@testing-library/react';
import * as router from 'react-router';
import LoginEmail from './LoginEmail';
import React from 'react';
const navigate = jest.fn();

beforeEach(() => {
  jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
});

describe('LoginEmail component', () => {
  it('should render correctly', () => {
    const { getByText } = render(
      <LoginEmail
        onValueChange={function (value: string): void {
          throw new Error('Function not implemented.');
        }}
      />,
    );

    expect(getByText('Crea tu cuenta de amazon')).toBeInTheDocument();
  });
});
