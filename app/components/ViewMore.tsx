import React, { ReactNode } from 'react'
import Link from 'next/link'

type ViewMoreProps = {
  url: string;
}

const ViewMore = ({url}:ViewMoreProps) => {
  return (
    <div className='text-right mt-12 md:mt-16'>
      <Link className='font-roboto font-bold' href={url}>ViewMore<img className='inline-block align-middle w-auto h-[19px] ml-2' src='/image/common/icon_arrow_forward.svg' alt='ページを開く' /></Link>
    </div>
  )
}

export default ViewMore
