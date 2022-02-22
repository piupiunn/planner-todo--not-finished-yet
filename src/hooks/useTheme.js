import { DailyListThemeContext } from "../context/DailyListThemeContext";
import { useContext } from "react";

export const useTheme = () => {
  const context = useContext(DailyListThemeContext);

  if (context === undefined) {
    throw new Error("useTheme() must be inside a ThemeProvider");
  }

  return context;
};
