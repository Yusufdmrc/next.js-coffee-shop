import { useState } from "react";
import Logo from "../UI/Logo";
import { FaUser, FaShoppingBasket } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import Search from "../UI/Search";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";

const Header = () => {
  const [isSearch, setIsSearch] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  return (
    <div className="bg-secondary h-[5rem]">
      <div className="container text-white h-full mx-auto flex items-center justify-between">
        <Logo />
        <nav
          className={`sm:static absolute top-0 left-0 sm:w-auto sm:h-auto w-full h-full sm:text-white 
        text-black sm:bg-transparent bg-white sm:flex hidden ${
          isMenu === true && "!grid place-content-center"
        }
        `}
        >
          <ul className="flex gap-x-3 sm:flex-row flex-col items-center">
            <li className="uppercase cursor-pointer px-[0.3rem] py-[0.6rem] hover:text-primary">
              <a href="">Ana Sayfa</a>
            </li>
            <li className="uppercase cursor-pointer px-[0.3rem] py-[0.6rem] hover:text-primary">
              <a href="">Menü</a>
            </li>
            <li className="uppercase cursor-pointer px-[0.3rem] py-[0.6rem] hover:text-primary">
              <a href="">Hakkında</a>
            </li>
            <li className="uppercase cursor-pointer px-[0.3rem] py-[0.6rem] hover:text-primary">
              <a href="">Book Table</a>
            </li>
          </ul>
          {isMenu && (
            <button
              className="absolute top-3 right-3 z-50"
              onClick={() => setIsMenu(false)}
            >
              <GiCancel size={22} className="transition-all" />
            </button>
          )}
        </nav>
        <div className="flex items-center gap-x-3">
          <a href="#">
            <FaUser className="hover:text-primary transition-all" />
          </a>
          <a href="#">
            <FaShoppingBasket className="hover:text-primary transition-all" />
          </a>

          <button onClick={() => setIsSearch(true)}>
            <FiSearch className="hover:text-primary transition-all" />
          </button>
          <a href="#" className="md:inline-block hidden sm">
            <button className="btn-primary">Sipariş Ver</button>
          </a>
          <button
            className="sm:hidden inline-block"
            onClick={() => setIsMenu(true)}
          >
            <GiHamburgerMenu className="text-xl hover:text-primary transition-all" />
          </button>
        </div>
      </div>
      {isSearch && <Search setIsSearch={setIsSearch} />}
    </div>
  );
};

export default Header;
