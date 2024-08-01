"use client"

import { Pagination } from "@/app/Types/BatchData"
import { useGlobalContext } from "./SearchPage"

const PaginationControl = ({ paginationData, isLoading }: {paginationData: Pagination, isLoading: boolean}) => {
  const { setPageCount, pageCount, setIsLoading} = useGlobalContext()

  const upPage = () => {
    
    if(paginationData.has_next_page){
      
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

  return (
    <div className={`join  ${isLoading || paginationData.items.total < 25 ? "desktop:hidden" : ""}  w-full flex justify-center`}>
        <button className={`mr-2  join-item btn !rounded-md w-10 h-12  bg-transparent border-spacing-1 ${pageCount === 1 ? "text-slate-500 hover:bg-darker-blue hover:border-slate-500 cursor-default" : "border-accent text-accent hover:bg-accent hover:text-darker-blue"}`} onClick={downPage}>«</button>
        <button className="join-item !rounded-md btn h-12 text-sm text-accent bg-transparent hover:bg-accent hover:text-darker-blue mr-2">Page {pageCount}</button>
        <button className={`join-item !rounded-md btn w-10 h-12 bg-transparent border-spacing-1 ${!paginationData.has_next_page ? "text-slate-500 hover:bg-darker-blue hover:border-slate-500 cursor-default" : "border-accent text-accent hover:bg-accent hover:text-darker-blue"} `} onClick={upPage}>»</button>
    </div>
  )
}

export default PaginationControl