import React, { useState } from 'react';
import LoginEmail from './LoginEmail';
import LoginVerification from './LoginVerification';

const Login = () => {
  const changeUserLoggedStatus = (status: string) => {
    localStorage.setItem('userLoggedIn', status);
  };

  const setUserLoggedIn = () => {
    changeUserLoggedStatus('true');
  };

  const [email, setEmail] = useState<string>('');

  const handleEmailValue = (value: string) => {
    setEmail(value);
  };

  changeUserLoggedStatus('false');

  const renderLoginPage = () => {
    if (email === '') {
      return (
        <div>
          <LoginEmail onValueChange={handleEmailValue} />
        </div>
      );
    } else {
      return (
        <div>
          <LoginVerification email={email} onValueChange={handleEmailValue} />
        </div>
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src="amazon-entire-logo.png"
        alt="Amazon logo"
        className="w-28 h-10 mt-4"
      />
      {renderLoginPage()}
    </div>
  );
};

export default Login;
