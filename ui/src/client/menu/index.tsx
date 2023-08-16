'use client';
import { Fragment, useEffect } from 'react';
import MuiDrawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Backdrop, Box, Divider, IconButton, Tooltip } from '@mui/material';
import { MenuItem } from './MenuItem';
import Image from 'next/image';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useRouter } from 'next/navigation';
import HomeIcon from '@mui/icons-material/Home';
import Link from 'next/link';
import { useMenu } from '@org/store';
import { Setting } from './setting';

const drawerWidth = 220;

const openedMixin = (theme: any) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: any) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }: any) => ({
  width: drawerWidth,
  flexShrink: 0,
  '.MuiDrawer-paper': {
    background: `#0c1e35`,
  },
  '& *': {
    color: 'white !important',
  },
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

export const Menu = () => {
  const { open, toggle } = useMenu((s) => s);
  const router = useRouter();
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down('md'));
  useEffect(() => {
    if (matches) {
      toggle(false);
    } else {
      toggle(true);
    }
  }, [matches]);
  const logout = () => {
    router.push('/');
  };
  return (
    <Fragment>
      <Drawer
        open={open}
        variant="permanent"
        sx={{
          overflowY: 'hidden',
          img: {
            opacity: 0.6,
            objectFit: 'cover',
          },
          boxShadow: theme.shadows[20],
          '& > div > span': {
            zIndex: '5',
            width: '100% !important',
            height: ' 100% !important',
            img: {
              objectFit: 'cover !important',
              width: '100% !important',
              height: ' 100% !important',
            },
          },
        }}
      >
        <Box
          sx={{
            zIndex: '6',
          }}
        >
          <DrawerHeader>
            {open && <Setting />}
            <IconButton onClick={() => toggle(!open)}>
              {open ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider sx={{ marginBottom: '10%', backgroundColor: '#ffffff3b' }} />
          <MenuItem />
        </Box>
        <Image
          className="img"
          src="/image/photo-1678719510338-f37390296951.jpg"
          layout="fill"
          alt="Navbar highlight"
        />
      </Drawer>
      {matches && (
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer - 1 }}
          open={open}
          onClick={() => toggle(false)}
        />
      )}
    </Fragment>
  );
};
