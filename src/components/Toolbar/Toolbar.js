import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Toolbar = () => {
  return (
    <>
      <nav className="border-gray-200 bg-black">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <img
            src="amazon-white-logo.webp"
            alt="amazon logo"
            className="h-8 w-22 flex flex-wrap justify-between absolute left-0"
          />
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto"
            id="navbar-search"
          >
            <ul className="flex flex-col md:p-0 mt-4 ml-10 font-medium md:space-x-2 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-black">
              <li>
                <FontAwesomeIcon className="text-white" icon={faLocationDot} />
              </li>
              <li>
                <div className="flex flex-col justify-between">
                  <span className="text-gray-300 text-xs">Enviar a Adrian</span>
                  <span className="text-white text-sm">Vitoria-G...</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-[26rem] p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Buscar en Amazon.es"
              />
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col justify-between">
              <span className="text-white text-xs">Hola Adrian</span>
              <span className="text-white text-sm">Cuenta y listas</span>
            </div>
            <div className="flex flex-col justify-between mx-6">
              <span className="text-white text-xs">Devoluciones</span>
              <span className="text-white text-xs">y pedidos</span>
            </div>
            <div className="flex flex-col justify-between">
              <span className="text-white text-xs">Cesta</span>
              <FontAwesomeIcon className="text-white" icon={faShoppingCart} />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Toolbar;
