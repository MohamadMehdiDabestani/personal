'use client';
import { Box } from '@mui/material';
import { useTodo } from '@org/store';
import { Item } from './Item';

export const List = () => {
  const list = useTodo((s) => s.list);
  return (
    <Box sx={{ p: '10px 15px' }}>
      {list
        .sort((a, b) => new Date(b.createDate).getTime() - new Date(a.createDate).getTime())
        .map((e, idx) => (
          <Item key={idx} {...e} id={idx} />
        ))}
    </Box>
  );
};
