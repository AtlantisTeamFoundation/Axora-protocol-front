import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

interface DarkModeBtnProps {
  dark: boolean;
  darkModeHandler: () => void;
}

const DarkModeBtn = ({ dark, darkModeHandler }: DarkModeBtnProps) => {
  return (
    <div
      onClick={darkModeHandler}
      className={`p-2 rounded-full shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] cursor-pointer transition-all duration-300 ${
        dark
          ? "hover:bg-[#00bcd4] hover:text-white shadow-[#00bcd4]"
          : "hover:bg-[#333] hover:text-black shadow-[#0026ff]"
      }`}
    >
      {dark ? (
        <MdOutlineLightMode size={25} />
      ) : (
        <MdOutlineDarkMode size={25} />
      )}
    </div>
  );
};

export default DarkModeBtn;
