import { BlogCM } from '@org/ui';
import { createClient } from 'contentful';
export const revalidate = 600;

async function getData() {
  const client = createClient({
    space: process.env.CONTENTFULL_SPACEID,
    accessToken: process.env.CONTENTFULL_ACCESSKEY,
  });
  const res = await client.getEntries({
    content_type: 'myown',
    select: [
      'fields.title',
      'fields.image',
      'fields.altImage',
      'fields.description',
      'fields.slug',
    ],
    order: ['-sys.createdAt'],
  });

  return res;
}

export default async function Page() {
  const data = await getData();
  return <BlogCM {...data} />;
}
