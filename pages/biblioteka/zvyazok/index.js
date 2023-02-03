import Head from 'next/head'
import CurrentPageHeader from '../../../components/CurrentPageHeader'
import BookCard from '../../../components/BookCard'
import VideoCard from '../../../components/VideoCard'

export default function LibZvyazok() {
  const psyMatData = [
      {
        id: 0,
        type: "text",
        link: "/books/zvyazok/Orhanizatsiia-viiskovoho-zviazku.pdf",
        icon: "/images/other-icons/book-closed.svg",
        title: "Організація військового зв'язку. Посібник.",
        description: "В посібнику розглянуті основи організації зв’язку в Збройних силах України, характеристика видів та родів військового зв’язку і способи їх організації.",
        fileType: "Тип: PDF файл",
        size: "~10 Mb",
        date: "Рік: 2017",
      },
      {
        id: 1,
        type: "text",
        link: "/books/zvyazok/Recom-nalashtuvannya-motorola.pdf",
        icon: "/images/other-icons/metod.svg",
        title: "Рекомендації Держспецзв'язку з програмування та налаштування радіостанцій Motorola",
        description: "Рекомендації з програмування, конфігурування параметрів безпеки та функцій захисту інформації в радіостанціях цифрової системи радіозв'язку Motorola Solutions MOTOTRBO™ стандарту DMR",
        fileType: "Тип: PDF файл",
        size: "~1.8 Mb",
        date: "Рік: 2022",
      },
      
            
  ]
    return (
      <div>
        <Head>
          <title>Бібліотека: організація зв'язку</title>
          <meta name="description" content="Матеріали з організації військового зв'язку" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <div className='container'>

        <CurrentPageHeader 
          text="Зв'язок" 
          backLink='/biblioteka' 
          desc="Матеріали з організації військового зв'язку"
        />
          
          <div className='cards-grid'>
            {psyMatData.map((item, index) => (
              item.type === 'video' ? <VideoCard key={index} itemData={item} /> : <BookCard key={index} book={item} />
              
            ))}
          </div>
        </div>
      </div>
    )
  }

  