"use client"

import { Pagination } from "@/app/Types/BatchData"
import { useGlobalContext } from "./SearchPage"
import { useEffect, useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules";

const PaginationControl = ({ paginationData, isLoading }: {paginationData: Pagination, isLoading: boolean}) => {
  const navigationRef = useRef<any>()
  const { setPageCount, pageCount, setIsLoading} = useGlobalContext()
  const [isNavigationVisible, setIsNavigationVisible] = useState(false)
  const [pages, setPages] = useState<number[]>([])
  
  const togglePageSelection = () => {
    setIsNavigationVisible(!isNavigationVisible)
  } 

  const switchPage = (newPageNumber: number) => {
    window.scrollTo(0, 0)
    setIsLoading(true)
    setPageCount(newPageNumber)
    setIsNavigationVisible(false)
  }

  const upPage = () => {
    if(paginationData.has_next_page){
      window.scrollTo(0, 0)
      setIsLoading(true)
      setPageCount(prevState => prevState + 1)
    }
  }

  const downPage = () => {
    if(pageCount !== 1) {
      window.scrollTo(0, 0)
      setIsLoading(true)
      setPageCount(prevState => prevState - 1)

    }
  } 

  useEffect(() => {
    let newPaginationList: number[] = [] 
    if((paginationData.items.total / 25) % 25 !== 0){
      for(let i = 1; i <= (paginationData.items.total / 25) + 1; i++){
        newPaginationList.push(i)
      }
    }

    else {
      for(let i = 1; i <= paginationData.items.total / 25; i++){
        newPaginationList.push(i)
      }
    }

    setPages(newPaginationList)
  }, [paginationData])

  return (

    <div className={`relative join  ${isLoading || paginationData.items.total < 25 ? "hidden" : ""}  w-full flex justify-center`}>
        <div className={`w-96 h-fit p-2 bg-dark-blue flex rounded-2xl absolute -top-24 left-[calc(50%-12rem)] ${isNavigationVisible ? "block" : "hidden"}`}>
        <button className="pagination-prev btn bg-accent text-darker-blue mr-4 hover:bg-accent">{"<"}</button>
         <Swiper 
            modules={[Navigation]}
            navigation={{
              nextEl: ".pagination-next",
              prevEl: ".pagination-prev",
            }}
            slidesPerView="auto"
            slidesPerGroup={100}
            onSwiper={(swiper) => (navigationRef .current = swiper)}
         >
          
            {
              pages.map((pageNumber: number) => {
                if(pageNumber === pageCount)
                  return <SwiperSlide key={pageNumber}>
                    <button onClick={() => switchPage(pageNumber)} key={pageNumber} className="btn bg-accent text-darker-blue hover:bg-accent mr-2">{pageNumber}</button>
                  </SwiperSlide>
                else 
                return <SwiperSlide key={pageNumber}>
                    <button onClick={() => switchPage(pageNumber)} key={pageNumber} className="btn bg-darker-blue text-white mr-2 hover:bg-accent hover:text-darker-blue">{pageNumber}</button>
                  </SwiperSlide>            
              })
            }
            
          </Swiper>
          <button className="btn bg-accent text-darker-blue pagination-next ml-4 hover:bg-accent">{">"}</button>
          
        </div>
        <button className={`mr-2  join-item btn !rounded-md w-10 h-12  bg-transparent border-spacing-1 ${pageCount === 1 ? "text-slate-500 hover:bg-darker-blue hover:border-slate-500 cursor-default" : "border-accent text-accent hover:bg-accent hover:text-darker-blue"}`} onClick={downPage}>«</button>
        <button className={`join-item !rounded-md btn h-12 text-sm  ${isNavigationVisible ? "bg-accent text-darker-blue" : "bg-transparent text-accent"} hover:bg-accent hover:text-darker-blue mr-2`} onClick={togglePageSelection}>Page {pageCount}</button>
        <button className={`join-item !rounded-md btn w-10 h-12 bg-transparent border-spacing-1 ${!paginationData.has_next_page ? "text-slate-500 hover:bg-darker-blue hover:border-slate-500 cursor-default" : "border-accent text-accent hover:bg-accent hover:text-darker-blue"} `} onClick={upPage}>»</button>
    </div>
  )
}

export default PaginationControl