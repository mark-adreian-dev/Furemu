import Header from './GlobalComponents/Header'
import Footer from './GlobalComponents/Footer';
import Banner from './HomepageComponents/Banner'
import CardList from './HomepageComponents/CardCarousel/CardList'
import FeaturedAnime from './HomepageComponents/FeaturedAnime';

export default function Home () {
 
  return (
    <>
      <Header />
      <Banner/>
      <CardList 
        endpoint='https://api.jikan.moe/v4/top/anime' 
        prevEl="prev-top-anime" 
        nextEl="next-top-anime" 
        title="Top Anime" 
        type='anime'
      />

      <CardList 
        endpoint='https://api.jikan.moe/v4/seasons/upcoming' 
        prevEl="prev-upcoming-anime" 
        nextEl="next-upcoming-anime" 
        title="Upcoming Anime" 
        type='anime'
      />

      <FeaturedAnime/>

      <CardList 
        endpoint='https://api.jikan.moe/v4/top/manga' 
        prevEl="prev-top-manga" 
        nextEl="next-top-manga" 
        title="Top Manga" 
        type='manga'
      />
      
      <Footer />
    </>
  );
}