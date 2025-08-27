import React, {ReactNode} from 'react'

type CardListProps = {
  children: ReactNode
}

const CardList = ({children}:CardListProps) => {
  return (
    <ul className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-y-8 md:gap-x-4'>
      {children}
    </ul>
  )
}

export default CardList
