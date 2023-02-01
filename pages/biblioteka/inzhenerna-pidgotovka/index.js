import Head from 'next/head'
import CurrentPageHeader from '../../../components/CurrentPageHeader'
import BookCard from '../../../components/BookCard'
import VideoCard from '../../../components/VideoCard'

export default function LibEngineer() {
  const psyMatData = [
      {
        id: 0,
        type: "text",
        link: "/books/inzhenerna/Polyova-fortyfikatsiya-vid-okopu-do-shovyschya-ru.pdf",
        icon: "/images/other-icons/book-closed.svg",
        title: "Польова фортифікація: від окопу до сховища",
        description: "В посібнику зібрано основні вимоги та схеми до типових фортифікаційних споруд. Матеріали зібрані з різних настанов основаних на досвіді війн XX ст.",
        fileType: "Тип: PDF файл",
        size: "~21 Mb",
        date: "",
      },
      {
        id: 1,
        type: "text",
        link: "/books/inzhenerna/Inzhenerna-pidhotovka-metodychnyy-material-mobiliz.pdf",
        icon: "/images/other-icons/metod.svg",
        title: "Матеріали з інженерної підготовки",
        description: "Методичні матеріали з інженерної підготовки для навчання військовослужбовців, призваних за мобілізацією. Мінна безпека, окопи, маскування.",
        fileType: "Тип: PDF файл",
        size: "~2.2 Mb",
        date: "Рік: 2015",
      },
      {
        id: 2,
        type: "text",
        link: "/books/inzhenerna/Inzhenerne-obladnannya-pozyciy.pdf",
        icon: "/images/other-icons/metod.svg",
        title: "Інженерне обладнання позицій. Загальні відомості",
        description: "Загальні відомості з інженерної підготовки і обладнання позицій. Інженерна техніка. Типи споруд. Маскування",
        fileType: "Тип: PDF файл",
        size: "~9.5 Mb",
        date: "",
      },
      {
        id: 3,
        type: "text",
        link: "/books/inzhenerna/Fort-obladnannya-opornykh-punktiv-presentatsiya.pdf",
        icon: "/images/other-icons/metod.svg",
        title: "Фортифікаційне обладнання опорних пунктів та районів розташування підрозділів",
        description: "Матеріали у вигляді презентації. Приклад обладнання ВОП.",
        fileType: "Тип: PDF файл",
        size: "~3 Mb",
        date: "",
      },
      {
        id: 4,
        type: "text",
        link: "/books/inzhenerna/Inzhenerna-pidhotovka-art-pidrozdiliv.pdf",
        icon: "/images/other-icons/book-closed.svg",
        title: "Основи інженерної підготовки, тактичного маскування та радіаційного, хімічного, біологічного захисту в артилерійських підрозділах",
        description: "У підручнику викладено основи організації інженерного забезпечення, тактичного маскування та РХБ-захисту в артилерійських підрозділах",
        fileType: "Тип: PDF файл",
        size: "~3.8 Mb",
        date: "Рік: 2021",
      },
      
  ]
    return (
      <div>
        <Head>
          <title>Бібліотека: інженерна підготовка</title>
          <meta name="description" content="Матеріали з інженерного обладнання позицій та зведення фортифікаційних споруд - посібники, методичні матеріали та ін." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <div className='container'>

        <CurrentPageHeader 
          text='Інженерна підготовка та фортифікація' 
          backLink='/biblioteka' 
          desc="Матеріали з інженерного обладнання позицій та зведення фортифікаційних споруд, маскування, вибухові пристрої - посібники, методичні матеріали та ін."
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

  