import React, { ReactNode } from 'react'

type LettersProps = {
  children: ReactNode
}

const Letters = ({children}: LettersProps) => {
  return (
    <span className='flex justify-center items-center w-full text-[40px] md:text-[64px] font-roboto font-bold text-center'>
      {children}
    </span>
  )
}

export default Letters
