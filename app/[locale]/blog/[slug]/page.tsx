import { createClient } from 'contentful';
import { Post } from 'ui/src/client/page/post';
import type { Metadata } from 'next';
const client = createClient({
  space: process.env.CONTENTFULL_SPACEID,
  accessToken: process.env.CONTENTFULL_ACCESSKEY,
});
type Props = {
  params: { slug: string };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  
  const slug = decodeURI(params.slug);
  const res = await client.getEntries({
    content_type: 'myown',
    'fields.slug': slug,
    select: ['fields.browserDescription', 'fields.browserTitle'],
  });
  const { browserDescription, browserTitle } = res.items[0].fields;
  return {
    title: browserTitle as string,
    description: browserDescription as string,
  };
}
async function getData(slug: string) {
  const res = await client.getEntries({
    content_type: 'myown',
    'fields.slug': slug,
    select: [
      'fields.text',
      'fields.altImage',
      'fields.image',
      'fields.title',
      'fields.text',
    ],
  });
  return res;
}

export default async function Page({ params }: Props) {
  const data = await getData(decodeURI(params.slug));

  return <Post {...(data.items[0].fields as any)} />;
}
