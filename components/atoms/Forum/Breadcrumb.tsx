import React from 'react'

type Props = {
  text: string
}

const Breadcrumb = ({text}: Props) => {
  return (
    <div className='font-QuicksandSemibold text-sm text-mv-primary-3'>{text}</div>
  )
}

export default Breadcrumb