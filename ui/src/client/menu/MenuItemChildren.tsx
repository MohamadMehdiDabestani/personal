'use client';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useRouter } from 'next/navigation';
import { ListItemIcon, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import { useMenu } from '@org/store';
import { usePathname } from 'next-intl/client';
import { useTranslations } from 'next-intl';

export const MenuItemCildren = ({ el }: { el: any }) => {
  const { open, toggle } = useMenu((s) => s);
  const router = useRouter();
  const pathname = usePathname();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  
  const t = useTranslations('menu');
  const handleClick = () => {
    if (matches) toggle(false);
    router.push(el.href);
  };
  return (
    <ListItem
      disablePadding
      className={el.href === pathname ? 'active' : ''}
      onClick={handleClick}
    >
      <ListItemButton>
        <ListItemIcon sx={{ ml: open ? '0px' : '-10px', minWidth: '35px' }}>
          {open ? (
            el.icon
          ) : (
            <Tooltip arrow title={t(el.title)} placement="left-start">
              {el.icon}
            </Tooltip>
          )}
        </ListItemIcon>
        {open && <ListItemText primary={t(el.title)} />}
      </ListItemButton>
    </ListItem>
  );
};
