import useTheme from "../../hooks/useTheme.js";
import "./ThemeToggle.css";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

/**
 * Toggle button that flips between light and dark themes.
 */
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      aria-label="Toggle theme"
      className="theme-toggle"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <>
          <MoonIcon className="icon" />
          <span>Dark</span>
        </>
      ) : (
        <>
          <SunIcon className="icon" />
          <span>Light</span>
        </>
      )}
    </button>
  );
}
