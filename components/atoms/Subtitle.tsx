import React from 'react'

type Props = {
  text:string
}

const Subtitle = ({text}: Props) => {
  return (
    <div className='sm:text-sm md:text-base lg:text-lg leading-5 font-QuicksandSemibold tracking-tight'>{text}</div>
  )
}

export default Subtitle