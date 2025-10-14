import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { Hover } from "../../styles/tailwind.c";
import { useDarkModeStore } from "../../store/darkModeStore";

const DarkModeBtn = () => {
  const { dark, darkModeHandler } = useDarkModeStore();

  return (
    <button
      onClick={darkModeHandler}
      className={`p-1 rounded-full shadow cursor-pointer transition-all duration-300 ${Hover}`}
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
