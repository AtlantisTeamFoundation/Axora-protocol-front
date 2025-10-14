import { create } from "zustand";
import { useCookies } from "react-cookie";
import { subscribeWithSelector } from "zustand/middleware";
import { useEffect } from "react";

interface DarkModeState {
  dark: boolean;
  darkModeHandler: () => void;
}

// Custom hook to create the store
export const useDarkModeStore = create<DarkModeState>()(
  subscribeWithSelector((set, get) => ({
    dark: false, // Default to light mode
    darkModeHandler: () => set({ dark: !get().dark }),
  }))
);

// Custom hook to init dark mode with cookies
export const useInitDarkMode = () => {
  const [cookies, setCookie] = useCookies(["darkMode"]);

  useEffect(() => {
    // Load initial state from cookie
    const initDark = cookies.darkMode === "true";

    useDarkModeStore.setState({ dark: initDark });

    // Sync store to cookie + DOM on future changes
    const unsubscribe = useDarkModeStore.subscribe((state) => {
      setCookie("darkMode", state.dark.toString(), { path: "/" });

      document
        .getElementById("darkWrapper")
        ?.classList.toggle("dark", state.dark);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []); // Empty dependencies to run only on mount
};
