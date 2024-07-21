'use client'

import React from 'react'
import { ReactLenis} from 'lenis/react'

interface Props {
    children: JSX.Element
}

const SmoothScroll:React.FC<Props> = ({ children }) => {
  return (
    <ReactLenis root>
        {children}
    </ReactLenis>
  )
}

export default SmoothScroll