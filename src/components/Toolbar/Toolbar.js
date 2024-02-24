import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Toolbar = () => {
  return (
    <>
      <nav class="border-gray-200 bg-black">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto"
            id="navbar-search"
          >
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-black">
              <li>
                <span class="block hover:cursor-pointer py-2 px-3 text-white md:bg-transparent md:text-blue-700 md:p-0">
                  Home
                </span>
              </li>
              <li>
                <span class="block hover:cursor-pointer py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:hover:text-blue-700 text-white">
                  About
                </span>
              </li>
              <li>
                <span class="block hover:cursor-pointer py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 text-white">
                  Services
                </span>
              </li>
            </ul>
          </div>
          <div class="flex">
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                class="block w-[26rem] p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
