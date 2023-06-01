import React from 'react'

type Props = {
  text:string
}

const Subtitle = ({text}: Props) => {
  return (
    <div className='text-[18px] leading-[20px] font-RobotoLight tracking-[0.5px'>{text}</div>
  )
}

export default Subtitle