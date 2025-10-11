import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import DarkModeBtn from "../darkModeBtn";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // State to control dark mode
  const [dark, setDark] = useState<boolean>(false);

  // function to control dark mode
  const darkModeHandler = () => {
    setDark(!dark);
  };

  // Array containing navbar items
  const navItems = [
    { id: 1, text: "Home", path: "/" },
    { id: 2, text: "Airdrop", path: "/pages/airdrop" },
    { id: 3, text: "ICO", path: "/pages/ico" },
    { id: 4, text: "Stacking", path: "/pages/stacking" },
    { id: 5, text: "White Paper", path: "/pages/whitepaper" },
  ];

  return (
    <nav
      className={`${
        dark ? "bg-[#1c1f27] text-[#e0e0e0]" : "bg-blue-400 text-white"
      } flex justify-between items-center h-24 mx-auto px-4 text-lg`}
    >
      {/* Logo */}
      <h1
        className={`${
          dark ? "text-[#00bcd4]" : "text-[#0026ff]"
        } w-auto mr-auto text-3xl font-bold`}
      >
        Axora
      </h1>

      {/* Desktop Navbar */}
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <Link key={item.id} to={item.path}>
            <li
              className={`${
                dark
                  ? "hover:text-black hover:bg-[#3aabbb]"
                  : "hover:text-[#0026ff] hover:bg-[#62d7f5]"
              } p-2.5  rounded-xl mx-2 cursor-pointer duration-300 `}
            >
              {item.text}
            </li>
          </Link>
        ))}
      </ul>

      {/* Mobile Navbar Icon */}
      <div
        onClick={handleNav}
        className={`${
          dark ? "hover:bg-[#3aabbb]" : "hover:bg-[#62d7f5]"
        } block md:hidden cursor-pointer p-2 rounded-sm mr-1`}
      >
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>

      {/* Dark mode button */}
      <DarkModeBtn dark={dark} darkModeHandler={darkModeHandler} />

      {/* Mobile Navbar Menu */}
      <ul
        className={
          nav
            ? `fixed md:hidden left-0 top-0 w-[60%] h-full ease-in-out duration-500 ${
                dark ? "bg-[#1c1f27] text-[#e0e0e0]" : "bg-blue-400 text-white"
              }`
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        <h1
          className={`${
            dark ? "text-[#00bcd4]" : "text-[#0026ff]"
          } w-full text-3xl font-bold m-4`}
        >
          Axora
        </h1>

        {/* Mobile Navbar Items */}
        {navItems.map((item) => (
          <Link key={item.id} to={item.path}>
            <li
              className={`${
                dark
                  ? "hover:bg-[#3aabbb] hover:text-black border-[#3b5168]"
                  : "hover:bg-[#62d7f5] hover:text-[#0026ff] border-blue-600"
              } p-4 border-b  duration-300 cursor-pointer`}
            >
              {item.text}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
