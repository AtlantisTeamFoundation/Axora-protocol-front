import React, { useEffect } from "react";

interface DarkModeCheckProps {
  children: React.ReactNode;
}

export const DarkModeCheck = ({ children }: DarkModeCheckProps) => {
  useEffect(() => {
    // Check if the darkMode cookie exists and apply the 'dark' class
    if (document.cookie.includes("darkMode=true")) {
      document.getElementById("darkWrapper")?.classList.add("dark");
    }
  }, []); // Empty dependency array to only run once on mount

  return <div>{children}</div>;
};
