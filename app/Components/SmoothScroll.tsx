'use client'

import { ReactLenis} from 'lenis/react'

interface Props {
    children: JSX.Element[] | JSX.Element
    root: boolean,
    options?: any
}

const SmoothScroll:React.FC<Props> = ({ children, root, options }) => {
  return (
    <ReactLenis root={root} options={options}>
      {children}
    </ReactLenis>
  )
}

export default SmoothScroll