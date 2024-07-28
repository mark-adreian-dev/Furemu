import Header from "./Components/Header"
import Banner from "./Components/HomepageComponents/Banner"


const loading = () => {
  return (
    <>
        <Header />
        <Banner />
        <div className="w-full flex justify-center items-start mt-16 pb-96">
            <span className="block w-32 h-32 loading loading-ring"></span>
        </div>
    </>
    
  )
}

export default loading