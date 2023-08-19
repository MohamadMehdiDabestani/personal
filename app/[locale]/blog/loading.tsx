import { Skeleton, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

export default function Loading() {
  return (
    <Grid container spacing={4}>
      {[...Array(3).keys()].map((e) => (
        <Grid xl={4} lg={4} md={6} sm={12} xs={12} key={e}>
          <Skeleton variant="rectangular" width="100%" height={250} />
          <Typography variant="h5">
            <Skeleton />
          </Typography>
          <Typography variant="body2">
            <Skeleton height={150} />
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
}
