import Header from "./Components/Header"
import Banner from "./Components/HomepageComponents/Banner"


const loading = () => {
  return (
    <>
        <Header />
        <Banner />
        <div className="w-full h-screen flex justify-center items-start mt-16">
            <span className="block w-32 h-32 loading loading-ring"></span>
        </div>
    </>
    
  )
}

export default loading