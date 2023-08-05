'use client';
import { Box, IconButton } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import Menu from '@mui/material/Menu';
import { MouseEvent, useState } from 'react';
import { LocalesMenu } from './Locales';
import { Theme } from './theme';
export const Wrapper = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <Box>
      <IconButton
        aria-label="setting"
        onClick={(e: MouseEvent<HTMLButtonElement>) => handleClick(e)}
      >
        <SettingsIcon sx={{ cursor: 'pointer' }} />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Theme />
        <LocalesMenu />
      </Menu>
    </Box>
  );
};
