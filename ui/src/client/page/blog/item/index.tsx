'use client';

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { ItemFields } from '@org/common';

import Image from 'next/image';
import Link from 'next/link';

export const Item = ({
  title,
  description,
  image,
  slug,
  altImage,
}: ItemFields) => {
  return (
    <Card>
      <Link href={`/blog/${slug}`}>
        <Box
          sx={{
            '& > img': {
              width: '100% !important',
              height: '250px !important',
              position: 'unset !important',
            },
          }}
        >
          <Image
            src={`https:${image.fields.file.url}`}
            className="img"
            layout="fill"
            alt={altImage}
          />
        </Box>
      </Link>

      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={(theme) => ({
            a: {
              color: theme.palette.text.primary,
            },
          })}
        >
          <Link href={`/blog/${slug}`}>{title}</Link>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ a: { width: '100%' } }}>
        <Link href={`/blog/${slug}`}>
          <Button variant="contained" fullWidth size="small">
            ادامه
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
