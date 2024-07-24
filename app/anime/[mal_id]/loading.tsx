import Header from "@/app/GlobalComponents/Header"

const Loading = () => {
  return (
    <> 
      <Header />
      <div className="relative w-full h-full py-32 tablet:pt-[12.25rem] desktop:px-16 desktop:pb-0 ">
          <div className="image-skeleton w-[19.9375rem] h-[28.375rem] mx-auto bg-dark-blue rounded-3xl animate-pulse mb-6 tablet:w-[36.5rem] tablet:h-[52rem] tablet:mb-16 desktop:hidden"></div>
          <div className="absolute top-0 right-0 animate-pulse image-skeleton-desktop hidden desktop:block w-[39.875rem] h-screen bg-dark-blue"></div>  
          <div className="context-skeletons desktop:w-[28.875rem] wide:pl-16 wide:w-[44.5rem]">
            <div className="context-skeleton-1">
              <div className="title-skeleton mb-6"> 
                <div className="animate-pulse mx-auto title w-[19.9375rem] h-9 bg-dark-blue rounded-md mb-2 tablet:w-[28.875rem] tablet:h-16 desktop:mx-0"></div>
                <div className="animate-pulse mx-auto title w-[19.9375rem] h-9 bg-dark-blue rounded-md tablet:w-[28.875rem] tablet:h-16 desktop:mx-0"></div>
              </div>
              <div className="content-skeleton-1 w-[19.9375rem] mx-auto desktop:mb-[4.4375rem] desktop:mx-0">
                <div className="animate-pulse mx-auto title w-[19.9375rem] h-6 bg-dark-blue rounded-md mb-2"></div>
                <div className="animate-pulse mx-auto title w-[19.9375rem] h-6 bg-dark-blue rounded-md mb-2"></div>
                <div className="animate-pulse title w-[16.625rem] h-6 bg-dark-blue rounded-md mb-2 tablet:mx-auto desktop:mx-0"></div>
                <div className="animate-pulse title w-[16.625rem] h-6 bg-dark-blue rounded-md mb-2 tablet:mx-auto desktop:mx-0"></div>
              </div>
            </div>

            <div className="context-skeleton-2 hidden desktop:block desktop:w-[28.875rem]">
              <div className="title-skeleton mb-6"> 
                <div className="animate-pulse mx-auto title w-[19.9375rem] h-9 bg-dark-blue rounded-md mb-2 tablet:w-[28.875rem] tablet:h-16"></div>
                <div className="animate-pulse mx-auto title w-[19.9375rem] h-9 bg-dark-blue rounded-md tablet:w-[28.875rem] tablet:h-16"></div>
              </div>
              <div className="content-skeleton-1 w-[19.9375rem] mx-auto desktop:mb-[4.4375rem] desktop:mx-0">
                <div className="animate-pulse mx-auto title w-[19.9375rem] h-6 bg-dark-blue rounded-md mb-2"></div>
                <div className="animate-pulse mx-auto title w-[19.9375rem] h-6 bg-dark-blue rounded-md mb-2"></div>
                <div className="animate-pulse title w-[16.625rem] h-6 bg-dark-blue rounded-md mb-2 tablet:mx-auto desktop:mx-0"></div>
                <div className="animate-pulse title w-[16.625rem] h-6 bg-dark-blue rounded-md mb-2 tablet:mx-auto desktop:mx-0"></div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Loading