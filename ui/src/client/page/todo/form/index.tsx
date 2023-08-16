'use client';
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from '@mui/material';
import * as yup from 'yup';
import { useFormik } from 'formik';
import TitleIcon from '@mui/icons-material/Title';
import { useTranslations } from 'next-intl';
import AddIcon from '@mui/icons-material/Add';
import { useTodo } from '@org/store';
import DoneIcon from '@mui/icons-material/Done';

interface Props {
  editMode?: boolean;
}
export const Form = ({ editMode }: Props) => {
  const { createNew, setTitle, selected, cleareSelected } = useTodo((s) => s);

  const t = useTranslations('validation');
  const pageT = useTranslations('page.todo');
  const validationHandler = yup.object({
    title: yup
      .string()
      .min(5, t('min', { name: pageT('form.title'), length: 5 }))
      .required(t('required', { name: pageT('form.title') })),
  });
  const formik = useFormik({
    initialValues: {
      title: editMode ? (selected?.title as string) : '',
    },
    validationSchema: validationHandler,
    onSubmit: (value, { resetForm }) => {
      if (editMode) {
        setTitle(value.title, selected?.id as number);
        cleareSelected();
      } else {
        createNew(value.title);
      }
      resetForm();
    },
  });
  return (
    <Box
      sx={{
        display: 'flex',
        p: '10px 15px',
        gap: '30px',
        alignItems: 'center',
      }}
      component="form"
      onSubmit={formik.handleSubmit}
    >
      <TextField
        value={formik.values.title}
        error={Boolean(formik.errors.title && formik.touched.title)}
        onChange={formik.handleChange}
        helperText={formik.touched.title && formik.errors.title}
        name="title"
        id="title"
        label={pageT('form.title')}
        variant="filled"
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton edge="end">
                <TitleIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button
        type="submit"
        color={editMode ? 'warning' : 'primary'}
        variant="contained"
      >
        {editMode ? <DoneIcon /> : <AddIcon />}
      </Button>
    </Box>
  );
};
