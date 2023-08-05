'use client';

import { Paper, Typography } from '@mui/material';
import { useGame } from '@org/store';
import Grid from '@mui/material/Unstable_Grid2';
import { Tile } from './Tile';
import { useEffect } from 'react';
import { checkWinner } from '@org/common';
export const Table = () => {
  const { spot , winner , isDraw} = useGame((s) => s);
  useEffect(() => {
    const result = checkWinner(spot);
    if(result) {
      if(result === "draw") {
        useGame.getState().drawGame();
      }else {
        useGame.getState().setWinner(result);
      }
    }
  } , [spot])
  return (
    <Paper
      
    >
      {isDraw && <Typography>Draw</Typography>}
      {Boolean(winner !== null) && <Typography>Winner {winner}</Typography>}
      <Grid container spacing={0} sx={{ width: '100%', height: '60%' }}>
        {spot.map((e , eIdx) =>
          e.map((el, elIdx) => (
            <Tile value={el} x={eIdx} y={elIdx} />
          ))
        )}
      </Grid>
    </Paper>
  );
};
