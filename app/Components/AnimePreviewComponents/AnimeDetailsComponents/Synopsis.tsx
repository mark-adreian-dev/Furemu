const Synopsis = ({ synopsis }: { synopsis: string}) => {
  return (
    
    <div className="synopsis text-start mb-16 tablet:text-center desktop:text-start">
        <p className=" text-white text-sm leading-6 font-bold mb-[0.875rem]">Synopsis:</p>
        <p className="text-light-blue text-sm leading-6 font-normal">{!synopsis ? "N/A" : synopsis}</p>
    </div>
  )
}

export default Synopsis