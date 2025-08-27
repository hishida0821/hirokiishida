import React, { ReactNode } from 'react'

type MainProps = {
  children: ReactNode
}

export default function Main({children}: MainProps) {
  return (
    <main className='mt-[54px] border-l-[3px] border-r-[3px] border-solid border-black'>
      {children}
    </main>
  )
}