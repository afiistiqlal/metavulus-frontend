import React from 'react'

type Props = {
  text: string
}

const OneLiner = ({text}: Props) => {
  return (
    <div className='text-[120px] font-QuicksandBold tracking-tight leading-tight'>{text}</div>
  )
}

export default OneLiner