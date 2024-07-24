import Header from "@/app/GlobalComponents/Header"

const Loading = () => {
  return (
    <> 
    
    <Header />
                
                <div className="relative px-6 pt-24 h-screen w-screen  tablet:h-fit tablet:pb-8 desktop:h-screen wide:pl-16 wide:w-[44.5rem]">
                
                <div className="main-content px-6 pt-8 flex flex-col items-center tablet:pt-16 tablet:px-16 desktop:flex-row desktop:items-start desktop:pl">
                    <div className="fixed top-0 right-0 h-screen w-[39.875rem] poster-desktop-imgae wide:w-[55rem]">
                      <div className="relative h-screen w-[39.875rem]">
                        <div className="absolute top-0 left-0 h-screen animate-pulse bg-dark-blue w-[39.875rem] hidden desktop:block wide:w-[55rem]"></div>
                      </div>
                    </div>
                  </div>
    
    
                  <div className='mx-auto image-skeleton w-[19.9375rem] mt-8 mb-8 h-[28.375rem] bg-dark-blue animate-pulse rounded-3xl tablet:h-[52rem] tablet:w-[36.5rem] tablet:mb-16 desktop:hidden'></div>
                  <div className='context-skeleton mx-auto tablet:w-[36.5rem]  desktop:hidden'>
                    <div className='animate-pulse bg-dark-blue mx-auto rounded-2xl mb-8 w-[19.9375rem] h-8 tablet:mx-0 tablet:w-[30rem]'></div>
                    <div className='basic-info-skeleton mx-auto w-[19.9375rem] relative tablet:mx-0'>
                      <div className='animate-pulse bg-dark-blue rounded-2xl mb-4 w-64 h-4'></div>
                      <div className='animate-pulse bg-dark-blue rounded-2xl mb-4 w-56 h-4'></div>
                      <div className='animate-pulse bg-dark-blue rounded-2xl w-44 h-4'></div>
                    </div>
                  </div>
    
                  <div className="anime-preview-scroll-wrapper relative w-full tablet:w-full desktop:w-[40.5rem]">
                    <div className='animate-pulse bg-dark-blue mx-auto rounded-2xl mb-8 w-[19.9375rem] h-8 tablet:mx-0 tablet:w-[30rem]'></div>
                    <div className='basic-info-skeleton mx-auto w-[19.9375rem] relative tablet:mx-0 mb-16'>
                      <div className='animate-pulse bg-dark-blue rounded-2xl mb-4 w-64 h-4'></div>
                      <div className='animate-pulse bg-dark-blue rounded-2xl mb-4 w-56 h-4'></div>
                      <div className='animate-pulse bg-dark-blue rounded-2xl w-44 h-4'></div>
                    </div>
    
                    <div className='animate-pulse bg-dark-blue mx-auto rounded-2xl mb-8 w-[19.9375rem] h-8 tablet:mx-0 tablet:w-[20rem]'></div>
                    <div className='basic-info-skeleton mx-auto w-[19.9375rem] relative tablet:mx-0'>
                      <div className='animate-pulse bg-dark-blue rounded-2xl mb-4 w-64 h-4'></div>
                      <div className='animate-pulse bg-dark-blue rounded-2xl mb-4 w-56 h-4'></div>
                      <div className='animate-pulse bg-dark-blue rounded-2xl w-44 h-4'></div>
                    </div>
                  </div>
                </div>
    
    </>
  )
}

export default Loading