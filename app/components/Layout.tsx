import React, { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

export default function Layout({children}: LayoutProps) {
  return (
    <div className='w-full max-w-7xl mx-auto px-4 md:px-10'>
      {children}
    </div>
  )
}