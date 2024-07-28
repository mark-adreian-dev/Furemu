import Header from '@/app/Components/Header'
import Footer from '@/app/Components/Footer';
import Banner from '@/app/Components/HomepageComponents/Banner'
import CardList from '@/app/Components/HomepageComponents/CardList'
import FeaturedAnime from '@/app/Components/HomepageComponents/FeaturedAnime';
import SmoothScroll from './Components/SmoothScroll';
import Loading from './loading';

interface EndpointDetails {
  endpoint: string,
  nextEl: string,
  prevEl: string,
  title: string,
  type: string
}
interface Endpoints {
  latestAnime:  EndpointDetails,
  topAnime: EndpointDetails,
  featuredAnime: null,
  upcomingAnime: EndpointDetails,
  topManga: EndpointDetails,
}


const endpoints: Endpoints = {
  latestAnime: {
    endpoint: "/seasons/now",
    nextEl: "next-seasom-anime",
    prevEl: "prev-season-anime",
    title: "Latest Anime",
    type: "anime"
  },
  topAnime: {
    endpoint: "/top/anime",
    nextEl: "next-top-anime",
    prevEl: "prev-top-anime",
    title: "Top Anime",
    type: "anime"
  },
  featuredAnime: null,
  upcomingAnime: {
    endpoint: "/seasons/upcoming",
    nextEl: "next-upcoming-anime",
    prevEl: "prev-upcoming-anime",
    title: "Upcoming Anime",
    type: "anime"
  },
  topManga: {
    endpoint: "/top/manga",
    nextEl: "next-top-manga",
    prevEl: "prev-top-manga",
    title: "Top Manga",
    type: "manga"
  }
}

interface Props {

}

const Home:React.FC<Props> = () => {
  return (
    <>
      <SmoothScroll root={true}>
        <Header active='home'/>
        <Banner/>
     
        <div>
          {
            Object.entries(endpoints).map(([key, value], index) => {
              if (key !== "featuredAnime") {
                return <CardList key={index} endpoint={value.endpoint} prevEl={value.prevEl} nextEl={value.nextEl} title={value.title} type={value.type} index={index}/>
                
              } else {
                return <FeaturedAnime key={index}/>
              }
            })
          }
        </div>
        
      </SmoothScroll>
      <Footer/>
    </>
  );
}
export default Home