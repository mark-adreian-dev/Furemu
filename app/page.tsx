import Header from './Components/Header'
import Banner from './Components/Banner';
import CardList from './Components/CardList';

export default function Home() {
  
  return (
    <>
      <Header />
      <Banner />
      <CardList endpoint='https://api.jikan.moe/v4/top/anime' prevEl="prev-top-anime" nextEl="next-top-anime" title="Top Anime"/>
      <CardList endpoint='https://api.jikan.moe/v4/seasons/upcoming' prevEl="prev-upcoming-anime" nextEl="next-upcoming-anime" title="Upcoming Anime"/>
      
      <div className={`featured`} style={{
        
      }}>

      </div>
    </>
  );
}
