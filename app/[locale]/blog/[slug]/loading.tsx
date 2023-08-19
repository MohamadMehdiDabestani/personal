import { Skeleton, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { Fragment } from 'react';

export default function Loading() {
  return (
    <Fragment>
      <Skeleton variant="rectangular" width="100%" height={300} />
      <Typography variant="h5">
        <Skeleton />
      </Typography>
      <Typography variant="body2">
        <Skeleton height={200} />
      </Typography>
    </Fragment>
  );
}
