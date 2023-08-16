'use client';
import { Box, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import { useTodo } from '@org/store';
import { Fragment } from 'react';
import AutorenewIcon from '@mui/icons-material/Autorenew';
interface Props {
  id: number;
  isDone: boolean;
}
export const Actions = ({ id, isDone }: Props) => {
  const { remove, setSelected, toggleStatus } = useTodo((s) => s);
  return (
    <Box sx={{ gap: '15px', display: 'flex' }}>
      {isDone ? (
        <Button
          size="small"
          variant="contained"
          color="warning"
          onClick={() => toggleStatus(id)}
        >
          <AutorenewIcon />
        </Button>
      ) : (
        <Fragment>
          <Button
            size="small"
            variant="contained"
            color="success"
            onClick={() => toggleStatus(id)}
          >
            <DoneIcon />
          </Button>
          <Button
            size="small"
            variant="contained"
            color="warning"
            onClick={() => setSelected(id)}
          >
            <EditIcon />
          </Button>
          <Button
            size="small"
            variant="contained"
            color="error"
            onClick={() => remove(id)}
          >
            <DeleteIcon />
          </Button>
        </Fragment>
      )}
    </Box>
  );
};
