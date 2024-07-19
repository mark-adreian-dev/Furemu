
import Header from './Components/Header'
import Banner from './Components/Banner'
import CardList from './Components/CardList'
import FeaturedAnime from './Components/FeaturedAnime';
import Footer from './Components/Footer';


export default function Home () {
  
  return (
    <>
      <Header />
      <Banner/>
      <CardList endpoint='https://api.jikan.moe/v4/top/anime' prevEl="prev-top-anime" nextEl="next-top-anime" title="Top Anime" type='anime'/>
      <CardList endpoint='https://api.jikan.moe/v4/seasons/upcoming' prevEl="prev-upcoming-anime" nextEl="next-upcoming-anime" title="Upcoming Anime" type='anime'/>
      <FeaturedAnime/>
      <CardList endpoint='https://api.jikan.moe/v4/top/manga' prevEl="prev-top-manga" nextEl="next-top-manga" title="Top Manga" type='manga'/>
      <Footer />
    </>
  );
}
