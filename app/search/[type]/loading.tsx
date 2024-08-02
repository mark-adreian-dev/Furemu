import Header from "../../Components/Header"
const loading = () => {

  return (
    <>
    <Header active={"anime"} page="search" />
        
      <div className="content relative z-20 w-full pt-24 px-6 tablet:px-8 tablet:pt-[8.25rem] desktop:flex desktop:px-16 desktop:pt-[10.25rem]">
        <div className="right w-full relative">
            <div className="input flex items-center gap-2 px-4 py-3.5 border-accent border-solid border-2 rounded-lg bg-transparent">
                <input id="anime-query" type="text" className="grow text-sm text-white font-medium bg-transparent outline-none font-main" />
            </div>
            <div className="h-[calc(100vh-18rem)] flex flex-col justify-center items-center">
                <span className="w-32 h-32 loading loading-ring mb-2 block"></span>
                <p className="text-white italic">Searching results...</p>
            </div>
        </div>
      </div>
    </> 
  )  
}

export default loading