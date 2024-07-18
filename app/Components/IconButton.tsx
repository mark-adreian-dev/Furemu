import Image from 'next/image'

interface Props {
    iconPath: string,
    className: string | null
}

const IconButton:React.FC<Props> = ({iconPath, className}) => {
  return (
    <div className={`bg-accent rounded-lg ${className}`}>
        <Image src={iconPath} width="100" height="100" alt="Icon"/>
    </div>
  )
}

export default IconButton