import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useDarkModeStore } from "../../store/darkModeStore";

interface DarkModeCheckProps {
  children: React.ReactNode;
}

export const DarkModeCheck = ({ children }: DarkModeCheckProps) => {
  const [cookies] = useCookies(["darkMode"]);
  const { setDark } = useDarkModeStore();
  
  useEffect(() => {
    const isDark = cookies.darkMode;
    if (isDark) setDark(true);
    else setDark(false);
  }, []);

  return <div>{children}</div>;
};
