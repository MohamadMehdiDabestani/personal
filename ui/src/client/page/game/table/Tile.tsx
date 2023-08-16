import Grid from '@mui/material/Unstable_Grid2';
import CloseIcon from '@mui/icons-material/Close';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import { useGame } from '@org/store';
import { bestMove, checkAndStop } from '@org/common';


interface Props {
  value: string;
  x: number;
  y: number;
}
export const Tile = ({ value, x, y }: Props) => {
  const { spot, currentPlayer, setSpot, toggleCurrentPlayer  } = useGame(
    (s) => s
  );

  const handleClick = () => {
    if (currentPlayer === 'O' && spot[x][y] === '') {
      setSpot(x, y, 'O');
      toggleCurrentPlayer();
      checkAndStop()
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
