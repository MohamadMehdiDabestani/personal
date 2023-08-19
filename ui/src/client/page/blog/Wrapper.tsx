import { Item } from './item';
import Grid from '@mui/material/Unstable_Grid2';
import { BlogList, Item as ItemType } from '@org/common';


export const Wrapper = ({ items }: BlogList) => {
  return (
    <Grid container spacing={4}>
      {items.map((e: ItemType, idx: number) => (
        <Grid xl={4} lg={4} md={6} sm={12} xs={12}>
          <Item key={idx} {...e.fields} />
        </Grid>
      ))}

    </Grid>
  );
};
