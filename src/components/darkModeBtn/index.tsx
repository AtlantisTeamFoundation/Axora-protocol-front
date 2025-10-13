import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

interface DarkModeBtnProps {
  dark: boolean;
  darkModeHandler: () => void;
}

const DarkModeBtn = ({ dark, darkModeHandler }: DarkModeBtnProps) => {
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
