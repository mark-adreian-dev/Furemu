import AuthorImage from '../AuthorsComponents/AuthorImage'
import { Author } from '@/app/Types/Manga'

const MangaAuthors = ({ mangaAuthors }: {  mangaAuthors: Author[] }) => {

    return (
        <div className='producers pb-16 mb-8'>
            <p className="text-start text-white text-sm leading-6 font-bold mb-8 tablet:text-center desktop:text-start">Authors:</p>
            <div className="images grid grid-cols-4 gap-2 w-full h-fit relative">

            {
                mangaAuthors.map((item: Author, index: number) => <AuthorImage key={index} authorId={item.mal_id} index={index}/>)  
                
            }
            </div>
        </div>
    )
}

export default MangaAuthors