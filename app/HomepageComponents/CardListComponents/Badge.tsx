interface Props {
    text: string
}

const Badge:React.FC<Props> = ({ text }) => {
  return (
    <div className="bg-accent rounded-full px-[0.3rem] mr-[0.237rem] tablet:px-[0.63rem]">
        <p className="text-[8px] leading-[0.59244rem] font-medium tablet:text-xs tablet:leading-4 text-darker-blue">{text}</p>
    </div>
  )
}

export default Badge