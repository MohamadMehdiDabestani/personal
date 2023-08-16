'use client';

import { Paper } from '@mui/material';
import { useGame, useNotification } from '@org/store';
import Grid from '@mui/material/Unstable_Grid2';
import { Tile } from './Tile';
import { useEffect } from 'react';
import { checkAndStop } from '@org/common';
export const Table = () => {
  const { spot, winner, isDraw } = useGame((s) => s);
  const toggle = useNotification((s) => s.toggle);
  useEffect(() => {
    checkAndStop();
  }, [spot]);
  useEffect(() => {
    if (isDraw) toggle(true, 'filled', 'info', 'Draw');
  }, [isDraw]);
  useEffect(() => {
    if (winner !== null)
      toggle(
        true,
        'filled',
        winner === 'X' ? 'error' : 'success',
        `Player ${winner} wins`
      );
  }, [winner]);
  return (
    <Paper>
      <Grid container spacing={0} sx={{ width: '100%', height: '60%' }}>
        {spot.map((e, eIdx) =>
          e.map((el, elIdx) => <Tile value={el} x={eIdx} y={elIdx} />)
        )}
      </Grid>
    </Paper>
  );
};
