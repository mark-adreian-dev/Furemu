import Header from '@/app/Components/Header'
import Footer from '@/app/Components/Footer';
import Banner from '@/app/Components/HomepageComponents/Banner'
import CardList from '@/app/Components/HomepageComponents/CardList'
import FeaturedAnime from '@/app/Components/HomepageComponents/FeaturedAnime';
import SmoothScroll from './Components/SmoothScroll';

export default function Home () {
  return (
    <>
      <SmoothScroll root={true}>
        <Header />
        
        <Banner/>

        <CardList 
          endpoint={`/seasons/now`}
          prevEl="prev-seasons-now" 
          nextEl="next-seasons-now" 
          title="Latest Anime" 
          type='anime'
        />

        <CardList 
          endpoint={`/top/anime`}
          prevEl="prev-top-anime" 
          nextEl="next-top-anime" 
          title="Top Anime" 
          type='anime'
        /> 

        <FeaturedAnime/>

        <CardList 
          endpoint={`/seasons/upcoming`}
          prevEl="prev-upcoming-anime" 
          nextEl="next-upcoming-anime" 
          title="Upcoming Anime" 
          type='anime'
        /> 

        <CardList 
          endpoint={`/top/manga`}
          prevEl="prev-top-manga" 
          nextEl="next-top-manga" 
          title="Top Manga" 
          type='manga'
        />
        
        <Footer />
      </SmoothScroll>
     
    </>
  );
}