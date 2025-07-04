import { useState, useEffect } from "react"
import Image from 'next/image'
import Link from "next/link"


function Footer(props) {

    

    const [isOpen, setIsOpen] = useState(false)
    const showTxt = () => setIsOpen(!isOpen)
    

    return (
        <footer className="footer">
            
              <ul className="footer-menu">
                  <li><Link href='/'>Головна</Link></li>
                  <li><Link href="/blog">Блог</Link></li>
                  <li><Link href="/takmed">Тактична медицина</Link> </li>
                  <li><Link href="/psyholog">Психологічна допомога</Link></li>
                  <li><Link href="/biblioteka">Бібліотека</Link></li>
                  <li><Link href="/arta">Артилерія</Link></li>
              </ul>
                      <div className="infoBtn" onClick={showTxt}>
                <Image
                    src={'/images/other-icons/info-svgrepo-com.svg'}
                    alt=""
                    width={32}
                    height={32}
                />
            </div>
            <p className={`infoTxt ${isOpen && "infoTxt__open"}`}>Дану сторінку створено в польових умовах для тих, кому як і мені, доводиться вчитися/згадувати основи військової справи для захисту нашої держави.
                     Буду радий, якщо інформація розміщена тут допоможе бити російських окупантів та повернутися додому цілим після нашої перемоги! Слава Україні! Героям слава!
                     <br/><br/>Всі матеріали зібрані з відкритих джерел і наведені для ознайомлення. За можливості матеріали будуть доповнюватися.
            </p>

        </footer>
        
    )
    
}

export default Footer