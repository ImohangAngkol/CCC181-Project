import { createContext, useEffect, useMemo, useState } from "react";

/**
 * ThemeContext provides theme value ("light" | "dark") and a toggle function.
 * It persists to localStorage and applies data-theme to documentElement.
 */
export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    // Read from localStorage once at initialization
    const saved = localStorage.getItem("skill-swap-theme");
    return saved === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    // Persist and apply to <html data-theme="...">
    localStorage.setItem("skill-swap-theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme: () => setTheme(prev => (prev === "light" ? "dark" : "light")),
    }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
