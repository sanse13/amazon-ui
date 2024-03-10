import { Link } from 'react-router-dom';

const changeUserLoggedStatus = (status) => {
  localStorage.setItem('userLoggedIn', status);
};

const Login = () => {
  const setUserLoggedIn = () => {
    localStorage.setItem('userLoggedIn', true);
  };

  changeUserLoggedStatus(false);

  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src="amazon-entire-logo.png"
        alt="Amazon logo"
        className="w-28 h-10 mt-4"
      />
      <div className="border rounded-lg content-center w-[21rem] mt-4 p-5">
        <div className="text-center">
          <h1 className="text-xl pt-4 mb-2 text-left">Iniciar sesión</h1>
          <div>
            <label
              htmlFor="email-input"
              className="font-bold text-xs text-left block mb-2"
            >
              Direccion de e-mail o numero de telefono movil
            </label>
            <input
              id="email-input"
              className="border bg-gray-50 border-gray-400 focus:border-blue-300 px-2.5 py-1 w-full text-sm"
              type="email"
            />
          </div>
          <Link to="/">
            <button
              type="button"
              className="rounded-lg w-full shadow border mb-4 border-gray-100 bg-yellow-300 hover:bg-yellow-500 px-2 py-1 mt-2 text-sm"
              onClick={setUserLoggedIn}
            >
              Continuar
            </button>
          </Link>
        </div>
        <div className="">
          <p className="text-xs text-left mb-8">
            Al continuar, aceptas las Condiciones de uso y venta de Amazon.
            Consulta el Aviso de privacidad, el Aviso de cookies y el Aviso de
            anuncios basados en intereses.
          </p>
          <p className="text-xs text-left mb-8 hover:cursor-pointer hover:underline text-blue-500">
            ¿Necesitas ayuda?
          </p>
          <hr className="border border-gray-200 mb-8" />
          <p className="text-xs mb-2 font-bold">¿Compras para tu empresa?</p>
          <p className="text-xs text-blue-600 hover:cursor-pointer hover:underline mb-4">
            Comprar en Amazon Business
          </p>
        </div>
      </div>
      <div className="flex flex-col w-[21rem]">
        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-full h-px my-8 bg-gray-300 border-0" />
          <span className="absolute px-3 text-xs text-gray-500 -translate-x-1/2 bg-white left-1/2">
            ¿Eres nuevo en Amazon?
          </span>
        </div>
        <button
          type="button"
          className="rounded-lg shadow border px-2 py-1 w-full text-sm"
        >
          Crea tu cuenta de amazon
        </button>
      </div>
    </div>
  );
};

export default Login;
