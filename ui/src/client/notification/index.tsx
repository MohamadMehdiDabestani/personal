"use client"
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';
import { useNotification } from '@org/store';

export const Notification = () => {
  const {open , severity , toggle , variant , message} = useNotification(s => s);

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    toggle(false);
  };
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}    
    >
        <Alert severity={severity} variant={variant}>{message}</Alert>
    </Snackbar>
  );
};

