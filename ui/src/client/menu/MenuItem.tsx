'use client';

import { MenuItemCildren } from './MenuItemChildren';
import { data } from './Data';
import { useMenu } from '@org/store';
import { Box, List } from '@mui/material';

export const MenuItem = () => {


  return (
    <Box  sx={{ m: '7px 10px' }}>
      <List
        sx={(theme) => ({
          '& > .active': {
            background: '#ffffff3f',
          },
          '& > li': {
            borderRadius: '5px',
            mb: '10px',
            transition: theme.transitions.create('background', {
              easing: theme.transitions.easing.easeInOut,
              duration: theme.transitions.duration.enteringScreen,
            }),
            '*': {
              borderRadius: '5px',
            },
          },
          '& > li:hover:not(& > .active)': {
            background: '#a9a1e714',
          },
        })}
      >
        {data.map((el, i) => (
          <MenuItemCildren el={el} key={i} />
        ))}
      </List>
    </Box>
  );
};
