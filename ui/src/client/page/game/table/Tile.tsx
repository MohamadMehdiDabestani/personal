import Grid from '@mui/material/Unstable_Grid2';
import CloseIcon from '@mui/icons-material/Close';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import { useGame } from '@org/store';
import { bestMove } from '@org/common';
import { useEffect } from 'react';
interface Props {
  value: string;
  x: number;
  y: number;
}
export const Tile = ({ value, x, y }: Props) => {
  const { spot, currentPlayer, setSpot, toggleCurrentPlayer  } = useGame(
    (s) => s
  );
  // useEffect(() => {
  //   bestMove(spot);
  // }, []);
  const handleClick = () => {
    if (currentPlayer === 'O') {
      console.log('==================================== hit' , x , y);
      setSpot(x, y, 'O');
      toggleCurrentPlayer();
      bestMove(spot);
    }
  };
  return (
    <Grid
      xl={4}
      xs={4}
      minHeight={160}
      sx={{
        border: '1px solid rgba(0, 0, 0, 0.12)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
      }}
      onClick={handleClick}
    >
      {value === 'O' ? (
        <PanoramaFishEyeIcon sx={{ fontSize: '90px' }} />
      ) : (
        value === 'X' && <CloseIcon sx={{ fontSize: '90px' }} />
      )}
    </Grid>
  );
};
