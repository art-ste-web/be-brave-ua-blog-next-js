import { useState, useEffect } from "react"

import Image from 'next/image'



function DeadRusStats(props) {

    

    const [deadRus, setDeadRus] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
   
    useEffect(() => {
        fetch(`https://russianwarship.rip/api/v1/statistics/latest`)
          .then((response) => {
            if (!response.ok) {
              throw new Error(
                `${response.status}`
              );
            }
            return response.json();
          })
          .then((actualData) => {
            setDeadRus(actualData);
            setError(null);
            console.log(actualData);
          })
          .catch((err) => {
            setError(err.message);
            setDeadRus(null);
          }).finally(() => {
            setLoading(false);
          });

      }, []);


    return(
        <section className="deadRusStats">
                    {loading && <div>Завантаженння...</div>}
                    {error && (
                                <div>{`Упс... Статистика добрих росіян тимчасово недоступна: Код помилки - ${error}`}</div>
                    )}
                    {deadRus && (
                      <>
                      <h4 className="deadRusHeader">
                        Сьогодні 
                        <span className="todayDate">{deadRus && ` ${deadRus.data.date.split('-').reverse().join('.')}`}</span>
                        <span className="warDay">{deadRus && ` ${deadRus.data.day} `}</span>
                        день національного спротиву повномасштабному вторгненню російських окупантів
                    </h4>
                    <ul className="statsRow">
                        <li className="statsItem">
                          <div className="statIcon">
                            <Image 
                                src='/images/api-icons/occupants-1.svg'
                                alt="" 
                                width={40} 
                                height={40} 
                            />
                          </div>
                          <span className="nums">
                            {deadRus && `${deadRus.data.stats.personnel_units}`} <br/>
                            {deadRus && <span className="dayIncr">(+{deadRus.data.increase.personnel_units})</span>}
                          </span>
                        </li>
                        <li className="statsItem">
                          <div className="statIcon">
                            <Image 
                                src='/images/api-icons/tank.svg'
                                alt="" 
                                width={40} 
                                height={40} 
                            />
                          </div>
                          <span className="nums">
                            {deadRus && `${deadRus.data.stats.tanks}`} <br/>
                            {deadRus && <span className="dayIncr">(+{deadRus.data.increase.tanks})</span>}
                          </span>
                        </li>
                        <li className="statsItem">
                          <div className="statIcon">
                            <Image 
                                src='/images/api-icons/planes.svg'
                                alt="" 
                                width={40} 
                                height={40} 
                            />
                          </div>
                          <span className="nums">
                            {deadRus && `${deadRus.data.stats.planes}`} <br/>
                            {deadRus && <span className="dayIncr">(+{deadRus.data.increase.planes})</span>}
                          </span>
                        </li>
                    </ul>
                    <ul className="statsRow">
                        <li className="statsItem">
                          <div className="statIcon">
                            <Image 
                                src='/images/api-icons/arm-v.svg'
                                alt="" 
                                width={40} 
                                height={40} 
                            />
                          </div>
                          <span className="nums">
                            {deadRus && `${deadRus.data.stats.armoured_fighting_vehicles}`} <br/>
                            {deadRus && <span className="dayIncr">(+{deadRus.data.increase.armoured_fighting_vehicles})</span>}
                          </span>
                        </li>
                        <li className="statsItem">
                          <div className="statIcon">
                            <Image 
                                src='/images/api-icons/art-sys.svg'
                                alt="" 
                                width={40} 
                                height={40} 
                            />
                          </div>
                          <span className="nums">
                            {deadRus && `${deadRus.data.stats.artillery_systems}`} <br/>
                            {deadRus && <span className="dayIncr">(+{deadRus.data.increase.artillery_systems})</span>}
                          </span>
                        </li>
                        <li className="statsItem">
                          <div className="statIcon">
                            <Image 
                                src='/images/api-icons/helicopter.svg'
                                alt="" 
                                width={40} 
                                height={40} 
                            />
                          </div>
                          <span className="nums">
                            {deadRus && `${deadRus.data.stats.helicopters}`} <br/>
                            {deadRus && <span className="dayIncr">(+{deadRus.data.increase.helicopters})</span>}
                          </span>
                        </li>
                    </ul>
                      </>
                    )}
                    
        </section>
    )
}

export default DeadRusStats