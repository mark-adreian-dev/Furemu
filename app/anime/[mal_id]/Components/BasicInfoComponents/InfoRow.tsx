import React from 'react'

interface Props {
    children: JSX.Element[],
    text: string
}

const InfoRow:React.FC<Props> = ({ children, text }) => {
  return (
    <div className="info-item flex mb-2">
        <p className="text-white text-sm leading-6 font-bold mr-4 tablet:hidden desktop:block">{text}:</p>
            <div className="flex flex-wrap">
            {children}
        </div>
    </div>
  )
}

export default InfoRow