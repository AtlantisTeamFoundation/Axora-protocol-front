import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
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
    <nav className="flex justify-between items-center h-24 mx-auto px-4 text-lg  transition-colors duration-300 border-b-1">
      {/* Logo */}
      <h1 className=" w-auto mr-auto text-3xl font-bold">Axora</h1>

      {/* Desktop Navbar */}
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <Link key={item.id} to={item.path}>
            <li className="p-2.5 rounded-xl mx-2 cursor-pointer duration-300 ">
              {item.text}
            </li>
          </Link>
        ))}
      </ul>

      {/* Mobile Navbar Icon */}
      <div
        onClick={handleNav}
        className="block md:hidden cursor-pointer p-2 rounded-sm mr-1 "
      >
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>

      {/* Mobile Navbar Menu */}
      <ul
        className={`fixed md:hidden top-0 left-0 w-[60%] h-full ease-in-out duration-500 dark:bg-gray-900 dark:text-white bg-gray-300/95 text-black
        ${nav ? "translate-x-0" : "-translate-x-full"}  transition-all`}
      >
        {/* Mobile Logo */}
        <h1 className=" w-full text-3xl font-bold m-4">Axora</h1>

        {/* Mobile Navbar Items */}
        {navItems.map((item) => (
          <Link key={item.id} to={item.path}>
            <li className="p-4 border-b duration-300 cursor-pointer">
              {item.text}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
