import { createContext, useContext, useState } from "react";

const DarkContext = createContext();

export const useDarkContext = () => {
  return useContext(DarkContext);
};

const DarkProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") || false
  );

  if (darkMode) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("darkMode", true);
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.removeItem("darkMode");
  }

  const values = { darkMode, setDarkMode };

  return <DarkContext.Provider value={values}>{children}</DarkContext.Provider>;
};

export default DarkProvider;
