import Link from 'next/link';
import { client } from '../libs/microcms';
import Section from '@/components/Section';
import Letters from '@/components/Letters';
import Heading from '@/components/Heading';
import CardList from '@/components/CardList';
import Card from '@/components/Card';
import ViewMore from '@/components/ViewMore';

type Props = {
  id: string;
  title: string;
  thumbnail: string;
  category: {name: string};
};

async function getWorksPosts(): Promise<Props[]> {
  const data = await client.get({
    endpoint: 'works',
    queries: {
      fields: 'id,title,thumbnail,category',
      limit: 4,
    },
  });
  return data.contents;
}

async function getProductsPosts(): Promise<Props[]> {
  const data = await client.get({
    endpoint: 'products',
    queries: {
      fields: 'id,title,thumbnail,category',
      limit: 4,
    },
  });
  return data.contents;
}

export default async function Home() {
  const worksPosts = await getWorksPosts();
  const productsPosts = await getProductsPosts();

  return (
    <>
      <Section>
        <div className='grid grid-cols-6 gap-y-4 md:gap-y-8 w-full max-w-[280px] md:max-w-[500px] max-h-[280px] md:max-h-none md:min-h-[500px] mx-auto p-12 md:p-24 border-[3px] border-solid border-black'>
          <Letters>H</Letters>
          <Letters>I</Letters>
          <Letters>R</Letters>
          <Letters>O</Letters>
          <Letters>K</Letters>
          <Letters>I</Letters>
          <Letters>I</Letters>
          <Letters>S</Letters>
          <Letters>H</Letters>
          <Letters>I</Letters>
          <Letters>D</Letters>
          <Letters>A</Letters>
        </div>
      </Section>

      <Section>
        <Heading>WORKS</Heading>
        <CardList>
          {worksPosts.map((post) => (
            <li key={post.id}>
              <Card thumbnail={post.thumbnail} title={post.title} category={post.category} url={`/works/${post.id}`} />
            </li>
          ))}
        </CardList>
        <ViewMore url='/works' />
      </Section>

      <Section>
        <Heading>PRODUCTS</Heading>
        <CardList>
          {productsPosts.map((post) => (
            <li key={post.id}>
              <Card thumbnail={post.thumbnail} title={post.title} category={post.category} url={`/products/${post.id}`} />
            </li>
          ))}
        </CardList>
        <ViewMore url='/products' />
      </Section>

    </>
  )
}
