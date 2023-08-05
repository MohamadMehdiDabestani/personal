'use client';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useRouter } from 'next/navigation';
import { ListItemIcon, Tooltip } from '@mui/material';
import { useMenu } from '@org/store';
import { usePathname } from 'next-intl/client';

export const MenuItemCildren = (props: any) => {
  const open = useMenu((s) => s.open);
  const router = useRouter();
  const pathname = usePathname();
  const { el } = props;
  return (
    <ListItem
      disablePadding
      className={el.href === pathname ? 'active' : ''}
      onClick={() => router.push(el.href)}
    >
      <ListItemButton>
        <ListItemIcon sx={{ ml: open ? '0px' : '-10px', minWidth: '35px' }}>
          {open ? (
            props.el.icon
          ) : (
            <Tooltip arrow title={props.el.title} placement="left-start">
              {props.el.icon}
            </Tooltip>
          )}
        </ListItemIcon>
        {open && <ListItemText primary={el.title} />}
      </ListItemButton>
    </ListItem>
  );
};
