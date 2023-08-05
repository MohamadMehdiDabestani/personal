'use client';

import { Alert, Box } from '@mui/material';
import { Table } from './table';
export const GameCM = () => {
  return (
    <Box
      sx={{
        width: '70%',
        m: '0 auto',
      }}
    >
      <Alert>Powered by Minmax algorithm</Alert>
      <Table />
    </Box>
  );
};
