import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { Hover } from "../../styles/tailwind.c";
import { useDarkModeStore } from "../../store/darkModeStore";
import { useCookies } from "react-cookie";

const DarkModeBtn = () => {
  const { dark, setDark } = useDarkModeStore();

  const [, setCookie] = useCookies(["darkMode"]);

  const darkMoodHandller = () => {
    if (!dark) {
      setDark(true);
      setCookie("darkMode", "true");
    } else {
      setDark(false);
      setCookie("darkMode", "false");
    }
  };
  return (
    <button
      onClick={darkMoodHandller}
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
