import type { Metadata } from 'next'
import Link from 'next/link';
import { client } from '../../libs/microcms';
import Section from '@/components/Section';
import Heading from '@/components/Heading';
import CardList from '@/components/CardList';
import Card from '@/components/Card';

export const metadata: Metadata = {
  title: 'WORKS | HIROKI ISHIDA | Portfolio Site',
  description: '',
}

type Props = {
  id: string;
  title: string;
  thumbnail: string;
  category: {name:string};
};

async function getWorksPosts(): Promise<Props[]> {
  const data = await client.get({
    endpoint: 'works',
    queries: {
      fields: 'id,title,thumbnail,category',
    },
  });
  return data.contents;
}

const WorksPage = async () => {
  const posts = await getWorksPosts();

  return (
    <>
    <Section>
      <Heading>WORKS</Heading>
      <CardList>
          {posts.map((post) => (
            <li key={post.id}>
              <Card thumbnail={post.thumbnail} title={post.title} category={post.category} url={`/works/${post.id}`} />
            </li>
          ))}
      </CardList>
    </Section>
    </>
  )
}

export default WorksPage
