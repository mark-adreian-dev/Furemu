interface Genre {
    mal_id: number,
    type: string,
    name: string,
    url: string
}

interface Props {
    data: any,
    basicInfo: any
}
  

const BasicInfo:React.FC<Props> = ({ data, basicInfo }) => {
  return (
    <div className="anime-basic-info flex flex-col items-start mb-16 tablet:items-center">
     
          {
            Object.entries(basicInfo).map(
              (key) => 
                  String(key).split(",")[0] == "Type" ? 

                    <div key={String(key).split(",")[0]} className="info-item flex mb-2">
                      <p className="text-white text-sm leading-6 font-bold mr-4 tablet:hidden">{ String(key).split(",")[0]}:</p>
                      <div className="flex flex-wrap">
                        { 
                          String(key).split(",").map(items => items === "Type" ? null :
                            <div key={items} className="bg-accent rounded-full px-[0.625rem] mr-1 mb-2">
                              <p className="leading-6 text-sm text-dark-blue font-semibold">{items}</p>
                            </div>
                          )
                        }
                      </div>

                    </div>
                  : 
                    <div key={String(key).split(",")[0]} className="info-item flex mb-2">
                      <p className="text-white text-sm leading-6 font-bold mr-4 tablet:hidden">{ String(key).split(",")[0]}:</p>
                      <p className="text-accent text-sm leading-6 font-normal">{ String(key).split(",")[1]}</p>
                    </div>
            )
          }
       
        <div className="info-item flex">
          <p className="text-white text-sm leading-6 font-bold mr-4 tablet:hidden">Genres:</p>
          <div className="flex flex-wrap">
            {
              data.genres.map((genre: Genre) => 
              <div key={genre.mal_id} className="bg-accent rounded-full px-[0.625rem] mr-1 mb-2">
                <p className="leading-6 text-sm text-dark-blue font-semibold">{genre.name}</p>
              </div>)
            }
          </div>
        </div>
      </div>
  )
}

export default BasicInfo