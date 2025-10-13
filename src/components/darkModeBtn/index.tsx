import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useEffect, useState } from "react";

const DarkModeBtn = () => {
  const [dark, setDark] = useState<boolean>(false);

  const darkModeHandler = () => {
    setDark((prev) => !prev);
  };

  // toggle '.dark' class on wrapper
  useEffect(() => {
    const wrapper = document.getElementById("darkWrapper");
    wrapper?.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
      onClick={darkModeHandler}
      className="p-1 rounded-full shadow cursor-pointer transition-all duration-300 text-gray-200 hover:bg-[#333] hover:text-black dark:hover:bg-[#00bcd4] dark:hover:text-white dark:bg-[#1c1f27] dark:text-[#e0e0e0]"
    >
      {dark ? (
        <MdOutlineLightMode size={25} />
      ) : (
        <MdOutlineDarkMode size={25} />
      )}
    </button>
  );
};

export default DarkModeBtn;
