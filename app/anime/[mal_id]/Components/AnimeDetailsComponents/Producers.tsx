import ProducerImage from '../ProducersComponent/ProducerImage'
import { Producer } from '@/app/Types/GlobalTypes'

const Producers = ({ animeProducers }: { animeProducers: Producer[] }) => {
    return (
        <div className='producers pb-16 mb-8'>
            <p className="text-start text-white text-sm leading-6 font-bold mb-8 tablet:text-center desktop:text-start">Producers:</p>
            <div className="images grid grid-cols-4 gap-2 w-full h-fit relative">

            {
                animeProducers.map((item: Producer, index: number) => <ProducerImage key={item.mal_id} prodId={item.mal_id} index={index}/>)  
                
            }
            </div>
        </div>
    )
}

export default Producers