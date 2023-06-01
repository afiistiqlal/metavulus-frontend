import React from 'react'

type Props = {
  text: string
}

const Header = ({text}: Props) => {
  return (
    <div className='text-[70px] font-QuicksandBold tracking-normal'>{text}</div>
  )
}

export default Header