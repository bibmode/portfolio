import { createContext } from "react";

type ThemeContextType = {
  theme: string;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);
