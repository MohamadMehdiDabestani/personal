import { MenuItem } from "@mui/material";
import { useLayout } from "@org/store";

export const Theme = () => {
  const { theme, toggleTheme } = useLayout((s) => s);
  const handleTheme = () => {
    toggleTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return <MenuItem onClick={handleTheme}>toggleTheme</MenuItem>;
};
