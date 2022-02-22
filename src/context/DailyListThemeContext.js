import React from "react";
import { createContext, useReducer } from "react";

export const DailyListThemeContext = createContext();

const themeReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, color: action.payload };
    default:
      return state;
  }
};

export default function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, { color: " blue" });

  const changeColor = (color) => {
    dispatch({ type: "CHANGE_COLOR", payload: color });
  };
  return (
    <DailyListThemeContext.Provider value={{ ...state, changeColor }}>
      {children}
    </DailyListThemeContext.Provider>
  );
}
