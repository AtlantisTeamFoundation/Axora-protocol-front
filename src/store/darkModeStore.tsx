import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

interface DarkModeState {
  dark: boolean | null;
  darkModeHandler: () => void;
  setDark: (dark: boolean) => void;
}

// Custom hook to create the store
export const useDarkModeStore = create<DarkModeState>()(
  subscribeWithSelector((set, get) => ({
    dark: null, // Default to light mode
    setDark: (dark: boolean) => set({ dark }),
    darkModeHandler: () => set({ dark: !get().dark }),
  }))
);
