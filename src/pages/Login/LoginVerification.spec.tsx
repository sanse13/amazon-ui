import { render } from '@testing-library/react';
import React from 'react';
import * as router from 'react-router';
import LoginVerification from './LoginVerification';

const navigate = jest.fn();

beforeEach(() => {
  jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
});

describe('LoginVerification component', () => {
  it('renders correctly', () => {
    const customProps = {
      email: 'test@test.test',
      onValueChange: () => 'test',
    };

    const { getByText } = render(
      <LoginVerification
        email={customProps.email}
        onValueChange={customProps.onValueChange}
      />,
    );

    expect(getByText('Contraseña')).toBeInTheDocument();
  });
});
