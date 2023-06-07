import React from 'react'

type Props = {
  text:string
}

const Subtitle = ({text}: Props) => {
  return (
    <div className='text-lg leading-5 font-QuicksandSemibold tracking-tight'>{text}</div>
  )
}

export default Subtitle