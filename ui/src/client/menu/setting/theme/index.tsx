import { MenuItem } from '@mui/material';
import { useLayout } from '@org/store';
import { useTranslations } from 'next-intl';

export const Theme = () => {
  const { theme, toggleTheme } = useLayout((s) => s);
  const handleTheme = () => {
    toggleTheme(theme === 'dark' ? 'light' : 'dark');
  };
  const t = useTranslations('menu');
  return <MenuItem onClick={handleTheme}>{t('toggleTheme')}</MenuItem>;
};
