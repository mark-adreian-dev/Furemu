import Header from '@/app/GlobalComponents/Header'
import Footer from '@/app/GlobalComponents/Footer';
import Banner from '@/app/HomepageComponents/Banner'
import CardList from '@/app/HomepageComponents/CardList'
import FeaturedAnime from '@/app/HomepageComponents/FeaturedAnime';

export const BASE_URL = 'https://api.jikan.moe/v4'

export default function Home () {
  return (
    <>
      <Header />
      
      <Banner/>
      <CardList 
        endpoint={`${BASE_URL}/top/anime`}
        prevEl="prev-top-anime" 
        nextEl="next-top-anime" 
        title="Top Anime" 
        type='anime'
      />

      <CardList 
        endpoint={`${BASE_URL}/seasons/upcoming`}
        prevEl="prev-upcoming-anime" 
        nextEl="next-upcoming-anime" 
        title="Upcoming Anime" 
        type='anime'
      />

      <FeaturedAnime/>

      <CardList 
        endpoint={`${BASE_URL}/top/manga`}
        prevEl="prev-top-manga" 
        nextEl="next-top-manga" 
        title="Top Manga" 
        type='manga'
      />
      
      <Footer />
    </>
  );
}