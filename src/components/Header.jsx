import Li from "./Li";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);

  const navigate = useNavigate();

  function expandNavbar() {
    setIsNavbarExpanded(!isNavbarExpanded);
  }

  function openCart() {
    navigate("/cart");
  }

  return (
    <header className="w-screen z-20 px-3 py-4 bg-violet-600/50 backdrop-blur-xl fixed top-0 border-b-2 border-violet-500">
      <nav className="flex justify-between items-center">
        <h1 className="text-white justify-self-start ml-10 font-semibold cursor-pointertext-center">
          HiperPrice
        </h1>

        <div className="grid items-center text-white not-md:hidden grid-cols-2">
          <ul className="flex justify-center gap-8 items-center text-gray-200 text-lg list-none">
            <Li>
              <a href="#home">Início</a>
            </Li>
            <Li>
              <a href="#products">Produtos</a>
            </Li>
            <Li>
              <a href="#about">Sobre</a>
            </Li>
          </ul>
          <button
            onClick={openCart}
            className="font-semibold bg-amber-400 bg-opacity-50 w-fit px-4 py-2 rounded-md shadow justify-self-end cursor-pointer transition-[colors, shadow] ease-in duration-200 hover:bg-amber-500 hover:shadow-amber-500"
          >
            CARRINHO
          </button>
        </div>

        <button
          onClick={expandNavbar}
          className="text-white font-black cursor-pointer justify-self-end not-md:block hidden hidden-navbar-button"
        >
          | | |
        </button>
      </nav>

      <div
        className={`flex flex-col items-center justify-center text-white md:hidden gap-3 ${
          isNavbarExpanded && "hidden"
        }`}
      >
        <ul className="flex justify-center flex-col gap-8 items-center text-gray-200 text-lg list-none">
          <Li>
            <a href="#home">Início</a>
          </Li>
          <Li>
            <a href="#products">Produtos</a>
          </Li>
          <Li>
            <a href="#about">Sobre</a>
          </Li>
        </ul>
        <button
          onClick={openCart}
          className="font-semibold bg-amber-400 bg-opacity-50 w-fit px-4 py-2 rounded-md shadow justify-self-end cursor-pointer transition-[colors, shadow] ease-in duration-200 hover:bg-amber-500 hover:shadow-amber-500"
        >
          CARRINHO
        </button>
      </div>
    </header>
  );
}

export default Header;
