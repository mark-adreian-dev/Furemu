const Theme = ({ data, type }: { data: string[], type: string}) => {
  return (
    <div className="text-center mb-16">
        <p className=" text-white text-sm leading-6 font-bold mb-[0.875rem]">{type}:</p>
        <div className="">
          {
            data.map(theme => <p key={theme} className="text-white text-sm leading-6 font-normal mb-3">{theme}</p>)
          }
        </div>
        
    </div>
  )
}

export default Theme