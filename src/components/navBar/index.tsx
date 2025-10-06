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
    <nav className="bg-blue-400 flex justify-between items-center h-24 mx-auto px-4 text-lg text-white">
      {/* Logo */}
      <h1 className="w-auto text-3xl font-bold text-[#0026ff]">Axora</h1>

      {/* Desktop Navbar */}
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <Link key={item.id} to={item.path}>
            <li className="p-2.5 hover:bg-[#62d7f5] rounded-xl mx-2 cursor-pointer duration-300 hover:text-[#0026ff]">
              {item.text}
            </li>
          </Link>
        ))}
      </ul>

      {/* Mobile Navbar Icon */}
      <div
        onClick={handleNav}
        className="block md:hidden cursor-pointer hover:bg-[#62d7f5] p-2 rounded-sm"
      >
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>

      {/* Mobile Navbar Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full bg-blue-400 ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        <h1 className="w-full text-3xl font-bold text-[#0026ff] m-4">Axora</h1>

        {/* Mobile Navbar Items */}
        {navItems.map((item) => (
          <Link key={item.id} to={item.path}>
            <li className="p-4 border-b hover:bg-[#62d7f5] duration-300 hover:text-[#0026ff] cursor-pointer border-blue-600">
              {item.text}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
