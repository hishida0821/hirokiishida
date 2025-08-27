// Works single page
import { client } from '../../../libs/microcms';
import dayjs from 'dayjs';
import Section from '@/components/Section';

type Props = {
  id: string;
  title: string;
  thumbnail: string | { url: string };
  content: string;
  publishedAt: string;
  category: { name: string };
};

async function getWorksPost(id: string): Promise<Props> {
  const data = await client.get({
    endpoint: `works/${id}`,
  });
  return data;
}

export default async function WorksPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await getWorksPost(id);
  const formattedDate = dayjs(post.publishedAt).format('YYYY.MM.DD');
  const imageUrl = typeof post.thumbnail === 'string' ? post.thumbnail : post.thumbnail?.url;

  return (
    <>
      <Section>
        <h1 className='text-4xl md:text-5xl font-bold  mb-4 md:mb-6'>{post.title}</h1>
        <p className='text-xs md:text-base font-bold mb-2'>{formattedDate}</p>
        <span className='block text-white text-[10px] md:text-xs w-fit mb-4 md:mb-8 py-[2px] px-4 bg-black'>{post.category && post.category.name}</span>
        <figure className='mb-8 md:mb-12'>
          <img src={imageUrl} alt={post.title} className='w-full h-auto mb-2 rounded-[4px] md:rounded-lg' />
        </figure>
        {post.content && (
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        )}
      </Section>
    </>
  );
}

export async function generateStaticParams() {
  const contentIds = await client.getAllContentIds({ endpoint: 'works' });

  return contentIds.map((contentId) => ({
    id: contentId,
  }));
}