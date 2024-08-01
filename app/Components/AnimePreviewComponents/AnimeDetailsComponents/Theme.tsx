const Theme = ({ data, type }: { data: string[], type: string}) => {
  return (
    <div className="text-start mb-16 tablet:text-center desktop:text-start">
        <p className=" text-white text-sm leading-6 font-bold mb-[0.875rem]">{type}:</p>
        <div className="">
          {
            data.map(theme => <p key={theme} className="text-accent text-sm leading-6 font-normal mb-3">{theme}</p>)
          }
        </div>
        
    </div>
  )
}

export default Theme