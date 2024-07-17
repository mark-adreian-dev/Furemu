import React from 'react'
import Image from 'next/image'

interface Props {
    iconPath: string
}

const IconButton:React.FC<Props> = ({iconPath}) => {
  return (
    <div className='bg-accent rounded-lg p-[0.875rem] w-12 h-12'>
        <Image src={iconPath} width="100" height="100" alt="Icon"/>
    </div>
  )
}

export default IconButton