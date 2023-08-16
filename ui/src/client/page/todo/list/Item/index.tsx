'use client';
import { Paper, Typography } from '@mui/material';
import { useTodo } from '@org/store';
import { Form } from '../../form';
import { Actions } from './Actions';

interface Props {
  isDone: boolean;
  id: number;
  title: string;
}
export const Item = ({ title, isDone, id }: Props) => {
  const selected = useTodo((s) => s.selected);
  return (
    <Paper
      sx={{
        w: '100%',
        p: '20px 15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: isDone ? '#e9e9e9' : 'white',
        mb: '15px',
      }}
    >
      <Typography>{title}</Typography>
      {selected?.id === id ? (
        <Form editMode={true} />
      ) : (
        <Actions id={id} isDone={isDone} />
      )}
    </Paper>
  );
};
