import { MenuItem } from '@mui/material';
import { Fragment } from 'react';

const List = [
  { value: 'en', label: 'English' },
  { value: 'fr', label: 'فارسی' },
];

export const Locales = ({
  handleClose,
}: {
  handleClose: (lang: string | undefined) => void;
}) => {
  return (
    <Fragment>
      {List.map((e, idx) => (
        <MenuItem key={idx} onClick={() => handleClose(e.value)}>
          {e.label}
        </MenuItem>
      ))}
    </Fragment>
  );
};
