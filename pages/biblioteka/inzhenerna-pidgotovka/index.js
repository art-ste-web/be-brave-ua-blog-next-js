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
        link: "/books/inzhenerna/Vybuhovi-boeprypasy-posibnyk.pdf",
        icon: "/images/other-icons/book-closed.svg",
        title: "Вибухові боєприпаси. Посібник.",
        description: "У цьому посібнику надається лише основоположна інформація щодо вибухових боєприпасів, виявлених на території України. У посібнику не передбачена інформація щодо процедур знешкодження боєприпасів.",
        fileType: "Тип: PDF файл",
        size: "~11.5 Mb",
        date: "Рік: 2022",
      },
      {
        id: 5,
        type: "text",
        link: "/books/inzhenerna/Inzhenerni-zagorodzhennya-dovidnyk.pdf",
        icon: "/images/other-icons/book-closed.svg",
        title: "Інженерні загородження. Довідник.",
        description: "У довіднику наведена інформація щодо вибухових пристроїв, способів їх установки та зняття.",
        fileType: "Тип: PDF файл",
        size: "~1.7 Mb",
        date: "Рік: 2018",
      },
      {
        id: 6,
        type: "text",
        link: "/books/inzhenerna/Inzhenerna-pidhotovka-art-pidrozdiliv.pdf",
        icon: "/images/other-icons/book-closed.svg",
        title: "Основи інженерної підготовки, тактичного маскування та радіаційного, хімічного, біологічного захисту в артилерійських підрозділах",
        description: "У підручнику викладено основи організації інженерного забезпечення, тактичного маскування та РХБ-захисту в артилерійських підрозділах",
        fileType: "Тип: PDF файл",
        size: "~3.8 Mb",
        date: "Рік: 2021",
      },
      {
        id: 6,
        type: "text",
        link: "/books/inzhenerna/Razvitie-i-oborudovanie-okopov-1939.pdf",
        icon: "/images/other-icons/book-closed.svg",
        title: "Розвиток і обладнання окопів (рос.)",
        description: "Книга 1939 року описує послідовність розвитку окопів. Є ілюстрації з розмірами.",
        fileType: "Тип: PDF файл",
        size: "~15 Mb",
        date: "Рік: 1939",
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

  