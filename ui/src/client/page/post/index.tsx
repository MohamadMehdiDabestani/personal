import { Document, BLOCKS, INLINES } from '@contentful/rich-text-types';
import { Box, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { ItemFields } from '@org/common';
import Link from 'next/link';

import { indigo } from '@mui/material/colors';
export const Post = ({
  altImage,
  image,
  title,
  text,
}: ItemFields) => {
  const renderedOption = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any) => {
        if (node.content[1]?.nodeType === 'hyperlink') {
          return (
            <Link href={node.content[1].data.uri}>
              {node.content[1].content[0].value}
            </Link>
          );
        }
        return (
          <Typography sx={{ lineHeight: '30px' }}>
            {node.content[0].value}
          </Typography>
        );
      },
      [BLOCKS.HEADING_1]: (node: any) => {
        return <Typography variant="h1">{node.content[0].value}</Typography>;
      },
      [BLOCKS.HEADING_2]: (node: any) => {
        return <Typography variant="h2">{node.content[0].value}</Typography>;
      },
      [BLOCKS.HEADING_3]: (node: any) => {
        return <Typography variant="h3">{node.content[0].value}</Typography>;
      },
      [BLOCKS.HEADING_4]: (node: any) => {
        return <Typography variant="h4">{node.content[0].value}</Typography>;
      },
      [BLOCKS.HEADING_5]: (node: any) => {
        return <Typography variant="h5">{node.content[0].value}</Typography>;
      },
      [BLOCKS.HEADING_6]: (node: any) => {
        return <Typography variant="h6">{node.content[0].value}</Typography>;
      },
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        return (
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
              src={`https:${node.data.target.fields.file.url}`}
              className="img"
              layout="fill"
              alt={node.data.target.fields.description}
            />
          </Box>
        );
      },
    },
  };
  return (
    <Box
      sx={{
        mt: '20px',
        a: {
          color: indigo[700],
        },
      }}
    >
      <Typography variant="h4">{title}</Typography>
      <Box
        sx={{
          mb: '50px',
          '& > img': {
            width: '100% !important',
            height: '350px !important',
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
      {documentToReactComponents(text as Document, renderedOption)}
    </Box>
  );
};
