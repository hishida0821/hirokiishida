import React, {ReactNode} from 'react'

type SectionProps = {
  children: ReactNode;
}

const Section = ({children}:SectionProps) => {
  return (
    <section className='py-20 md:py-24'>
      {children}
    </section>
  )
}

export default Section
