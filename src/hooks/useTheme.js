import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";

/**
 * useTheme - consume theme context
 */
export default function useTheme() {
  return useContext(ThemeContext);
}
