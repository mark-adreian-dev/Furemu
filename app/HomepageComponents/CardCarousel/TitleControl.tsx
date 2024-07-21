import IconButton from '../../GlobalComponents/IconButton'

interface Props {
    title: string,
    nextEl: string,
    prevEl: string
}

const TitleControl:React.FC<Props> = ({ title, nextEl, prevEl }) => {

  return (
    <div className='title-controls flex justify-between items-center mb-8 tablet:mb-16'>
            <h2 className='text-accent font-bold text-2xl font-main tablet:text-5xl'>{ title }</h2>
            <div className='controls flex'>
                <IconButton iconPath='/icons/arrow-left.svg' className={`${prevEl} w-8 h-8 p-[0.43rem] rounded-[0.28475rem] tablet:w-12 tablet:h-12 mr-2`}/>
                <IconButton iconPath='/icons/arrow-right.svg' className={`${nextEl} w-8 h-8 p-[0.43rem] rounded-[0.28475rem] tablet:w-12 tablet:h-12`}/>
        </div>
    </div>
  )
}

export default TitleControl