'use client';

import { Alert, Box, Paper } from '@mui/material';
import { useGame } from '@org/store';
import { useTranslations } from 'next-intl';
import { Table } from './table';

import RestartAltIcon from '@mui/icons-material/RestartAlt';
export const GameCM = () => {
  const t = useTranslations('page');
  const { isDraw, rest, winner } = useGame((s) => s);
  const handleClick = () => {
    rest();
  };
  return (
    <Box
      sx={{
        width: '70%',
        m: '0 auto',
      }}
    >
      <Alert severity="info" sx={{ my: '15px' }}>
        {t('game.tableAlgo')}
      </Alert>
      <Table />
      {Boolean(isDraw || winner) && (
        <Paper
          sx={{
            p: '35px 0',
            m: '0 auto',
            mt: '25px',
            textAlign: 'center',
            width: '25%',
            cursor: 'pointer',
          }}
          onClick={handleClick}
        >
          <RestartAltIcon sx={{ fontSize: '90px' }} />
        </Paper>
      )}
    </Box>
  );
};
