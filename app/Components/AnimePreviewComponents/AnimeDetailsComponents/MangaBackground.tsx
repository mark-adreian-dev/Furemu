const MangaBackground = ({ background }: { background: string}) => {
    return (  
      <div className="background text-start mb-16 tablet:text-center desktop:text-start">
          <p className=" text-white text-sm leading-6 font-bold mb-[0.875rem]">Background:</p>
          <p className="text-light-blue text-sm leading-6 font-normal">{background}</p>
      </div>
    )
  }
  
  export default MangaBackground