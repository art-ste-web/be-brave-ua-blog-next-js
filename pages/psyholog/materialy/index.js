import Head from 'next/head'
import CurrentPageHeader from '../../../components/CurrentPageHeader'
import BookCard from '../../../components/BookCard'
import VideoCard from '../../../components/VideoCard'

export default function Materialy({books}) {
  const psyMatData = [
      {
        id: 0,
        type: "text",
        link: "/books/psyholog/Pamyatka-biytsyu.pdf",
        icon: "/images/other-icons/book-closed.svg",
        title: "Пам'ятка бійцю. Психологічна самодопомога в зоні бойових дій",
        description: "Що таке «бойовий стрес? У чому виявляється «неконструктивне реагування на стрес»? Що робити в цьому стані, аби зберегти бойову ефективність, лишитися живим та допомогти побратимам?",
        fileType: "Тип: PDF файл",
        size: "~160 Kb",
        date: "Рік: 2015",
      },
      {
        id: 1,
        type: "video",
        link: "https://www.youtube.com/playlist?list=PLYn9Qd0y2zFsvhxFQAx8Dcsr5xnimzRSm",
        icon: "/images/other-icons/video.svg",
        title: "Підбірка відео з психологічної підготовки",
        description: "Бойовий стрес, тунельний зір, типи реакцій на загрозу, стрес бойової невизначеності, психологічна стійкість",
        fileType: "Тип: YouTube відео",
        size: "~40 хв.",
        date: "Рік: 2022",
      },
      {
        id: 2,
        type: "text",
        link: "/books/psyholog/Podolannya_boyovoho_stresu.pdf",
        icon: "/images/other-icons/book-closed.svg",
        title: "Подолання бойового стресу та його психологічних наслідків",
        description: "Матеріал створений на основі досвіду військових психологів та особистого досвіду учасників бойових дій. Тут описано те, що може відбуватися з вами, та вже відбувалося з іншими людьми. Що таке «бойовий стрес? У чому виявляється «неконструктивне реагування на стрес»? Що робити в цьому стані, аби зберегти бойову ефективність, лишитися живим та допомогти побратимам?",
        fileType: "Тип: PDF файл",
        size: "~530 Kb",
        date: "Рік: 2015",
      },
      {
        id: 3,
        type: "text",
        link: "/books/psyholog/Formuvannia-stresostiykosti-metod.pdf",
        icon: "/images/other-icons/book-closed.svg",
        title: "Рекомендації щодо формування стресостійкості в умовах різкої зміни бойової обстановки",
        description: "Рекомендації з психологічної підготовки військовослужбовців ЗСУ щодо формування стресостійкості до дій в умовах різкої зміни бойової обстановки",
        fileType: "Тип: PDF файл",
        size: "~630 Kb",
        date: "Рік: 2020",
      },
  ]
    return (
      <div>
        <Head>
          <title>Матеріали з психології</title>
          <meta name="description" content="Бойовий стрес, реакції організму на стрес, розвиток стресостійкості, вправи для заспокоєння - посібники, пам'ятки, відеоматеріали та ін." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <div className='container'>

        <CurrentPageHeader 
          text='Матеріали з психології' 
          backLink='/psyholog' 
          desc="Бойовий стрес, реакції організму на стрес, розвиток стресостійкості, вправи для заспокоєння - посібники, пам'ятки, відеоматеріали та ін."
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

  export async function getStaticProps() {
    const res = await fetch('http://localhost:5000/books')
    const data = await res.json()
    return {
        props: {books: data}
    }
  }