import Reactm, {ReactNode} from 'react'

type HeadingProps = {
  children: ReactNode
}

const Heading = ({children}: HeadingProps) => {
  return (
    <h2 className='text-5xl font-roboto font-bold mb-8'>
      {children}
    </h2>
  )
}

export default Heading
