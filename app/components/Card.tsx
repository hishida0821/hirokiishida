import React from 'react'

type CardProps = {
  thumbnail: string | { url: string };
  title: string;
  category: {name: string};
  url: string;
};

const Card = ({ thumbnail, title, category, url }: CardProps) => {
  const imageUrl = typeof thumbnail === 'string' ? thumbnail : thumbnail?.url;
  return (
    <div>
      <a href={url}>
        <figure>
          <img src={imageUrl} alt={title} className='w-full h-auto mb-2 rounded-[4px]' />
        </figure>
        {category && category.name ? (
          <span className='block text-white text-xs w-fit mb-1 py-[2px] px-4 bg-black'>{category.name}</span>
        ) : null}
        <p className='text-xs md:text-base font-bold'>{title}</p>
      </a>
    </div>
  )
}

export default Card
