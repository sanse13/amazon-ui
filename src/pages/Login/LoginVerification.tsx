import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/auth/auth.service';

export interface LoginVerificationProps {
  email: string;
  onValueChange: (value: string) => void;
}

const LoginVerification = (props: LoginVerificationProps) => {
  const changeEmail = () => {
    props.onValueChange('');
  };

  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState<string>('');

  const passwordFormHandler = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const passwordValue = formData.get('password-input')?.toString().trim();

    if (!passwordValue) {
      setErrorMessage('Por favor, indica tu contraseña.');
    } else {
      setErrorMessage('');

      login({
        email: props.email,
        password: passwordValue,
      })
        .then((accessToken) => {
          sessionStorage.setItem('access-token', accessToken);
          navigate('/');
        })
        .catch(() => {
          setErrorMessage(
            'La contraseña no coincide con el email introducido.',
          );
        });
    }
  };

  const verifyLogin = async () => {};

  return (
    <>
      <div className="border rounded-lg content-center w-[21rem] mt-4 p-5">
        <div className="text-center">
          <form onSubmit={passwordFormHandler}>
            <h1 className="text-xl pt-4 mb-2 text-left">Iniciar sesión</h1>
            <div>
              <div className="text-xs text-left flex">
                {props.email}
                <button
                  type="button"
                  className="text-xs ml-2 text-blue-600 hover:cursor-pointer"
                  onClick={changeEmail}
                >
                  Cambiar
                </button>
              </div>

              <div className="justify-between flex flex-row mt-4">
                <label
                  htmlFor="password-input"
                  className="font-bold text-xs text-left block"
                >
                  Contraseña
                </label>

                <span className="text-xs block text-blue-600 hover:cursor-pointer">
                  ¿Has olvidado la contraseña?
                </span>
              </div>
              <input
                id="password-input"
                name="password-input"
                className="border bg-gray-50 border-gray-400 focus:border-blue-300 px-2.5 py-1 w-full text-sm"
                type="password"
              />
            </div>
            <button
              type="submit"
              className="rounded-lg w-full shadow border mb-4 border-gray-100 bg-yellow-300 hover:bg-yellow-500 px-2 py-1 mt-2 text-sm"
            >
              Iniciar sesión
            </button>
            {errorMessage && (
              <span className="text-xs text-red-500">{errorMessage}</span>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginVerification;
