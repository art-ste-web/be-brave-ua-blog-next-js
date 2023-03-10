import Head from 'next/head'
import CurrentPageHeader from '../../components/CurrentPageHeader'
import BookCard from '../../components/BookCard'
import VideoCard from '../../components/VideoCard'

export default function TakMed() {
  const takMedMatData = [
      {
        id: 0,
        type: "text",
        link: "/books/takmed/TCCC-Course-Ukrainian-Translation.pdf",
        icon: "/images/other-icons/metod.svg",
        title: "Курс тактичної бойової допомоги постраждалим (КТБДП базовий)",
        description: "Цей тренінг заснований на досвіді двох десятиліть ведення воєнних дій і містить в собі найсучасніші практики надання первинної допомоги на полі бою. Рівень курсу: Для всіх військовослужбовців (базовий). Рекомендовано Міністерством оборони США.",
        fileType: "Тип: PDF файл",
        size: "~7.5 Mb",
        date: "Рік: 2019",
      },
      {
        id: 1,
        type: "text",
        link: "/books/takmed/Pidruchnyk-tccc-usa-ua.pdf",
        icon: "/images/other-icons/book-closed.svg",
        title: "Підручник тактичної бойової допомоги потерпілим",
        description: "Концепція Tactical Combat Casualty Care (Тактичної бойової допомоги пораненим, TCCC) була розроблена в 1996 році силами спеціальних операцій. Рекомендації з тактичної бойової допомоги потерпілим, засновані на доказах і перевірені на полі бою, вони зменшують кількість смертей у місці поранення",
        fileType: "Тип: PDF файл",
        size: "~2.6 Mb",
        date: "Рік: 2022",
      },
      {
        id: 2,
        type: "video",
        link: "https://www.youtube.com/watch?v=ctU6gdVqxUI",
        icon: "/images/other-icons/video.svg",
        title: "Тактична медицина НАТО - алгоритм M.A.R.C.H.",
        description: "Протокол M.A.R.C.H - це алгоритм дій та надання домедичної допомоги в бойових умовах. Відео із серії навчальних відеороликів для особового складу 47 бригади ДШВ ЗСУ.",
        fileType: "Тип: YouTube відео",
        size: "~40 хв.",
        date: "Рік: 2022",
      },
      {
        id: 3,
        type: "text",
        link: "/books/takmed/Taktychna-medytsyna-metod-rek.pdf",
        icon: "/images/other-icons/book-closed.svg",
        title: "Тактична медицина: Методичні рекомендації",
        description: "У цих методичних рекомендаціях акумулюваний досвід українських медичних інструкторів та парамедиків із багатьох країн світу, які здобували знання та навички у різних «гарячих» точках нашої неспокійної планети.",
        fileType: "Тип: PDF файл",
        size: "~8 Mb",
        date: "Рік: 2022",
      },
      {
        id: 4,
        type: "text",
        link: "/books/takmed/Domedychna-dopomoga-v-umovah-boyovyh-diy.pdf",
        icon: "/images/other-icons/book-closed.svg",
        title: "Домедична допомога в умовах бойових дій: Методичний посібник",
        description: "В посібнику описано основні елементи надання домедичної допомоги пораненим на полі бою та відповідає визнаним міжнародним стандартам «care under fire»",
        fileType: "Тип: PDF файл",
        size: "~5.3 Mb",
        date: "Рік: 2022",
      },
      {
        id: 5,
        type: "text",
        link: "/books/takmed/Taktychna-medytsyna-dlia-pidrozdiliv-spetsialnoho-pryznachennia.pdf",
        icon: "/images/other-icons/book-closed.svg",
        title: "Тактична медицина для підрозділів спеціального призначення",
        description: "Викладений матеріал ґрунтується на досвіді реформування ОЗСП НГУ «Азов» згідно навчальних і тренувальних протоколів передових армій світу.",
        fileType: "Тип: PDF файл",
        size: "~4.7 Mb",
        date: "Рік: 2016",
      },
      {
        id: 6,
        type: "text",
        link: "https://play.google.com/store/apps/details?id=app.TacticMedAid&hl=uk",
        icon: "/images/other-icons/g-play.svg",
        title: "Мобільний застосунок TacticMedAid (android)",
        description: "Мобільний застосунок TacticMedAid має два напрямки: цивільний та військовий. Частина для військових містить пояснення алгоритмів дій на різні поширені види травм та поранень в умовах бойових дій. ",
        fileType: "",
        size: "",
        date: "",
      },
      
  ]
    return (
      <div>
        <Head>
          <title>Матеріали з тактичної медицини</title>
          <meta name="description" content="Протоколи надання допомоги в умовах бойових дій та інші матеріали з тактичної медицини" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <div className='container'>

        <CurrentPageHeader 
          text='Матеріали з тактичної медицини' 
          backLink='/' 
          desc="Способи надання допомоги в умовах бойових дій (ТССС, M.A.R.C.H. та ін.)"
        />
          
          <div className='cards-grid'>
            {takMedMatData.map((item, index) => (
              item.type === 'video' ? <VideoCard key={index} itemData={item} /> : <BookCard key={index} book={item} />
              
            ))}
          </div>
        </div>
      </div>
    )
  }

  