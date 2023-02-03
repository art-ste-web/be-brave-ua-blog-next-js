import Head from 'next/head'
import CurrentPageHeader from '../../../components/CurrentPageHeader'
import BookCard from '../../../components/BookCard'
import VideoCard from '../../../components/VideoCard'

export default function LibDocs() {
  const psyMatData = [
      {
        id: 0,
        type: "text",
        link: "/books/documenty/Статут_внутрішньої_служби_ЗСУ.pdf",
        icon: "/images/other-icons/Emblem_of_the_Ukrainian_Armed_Forces.svg",
        title: "Статут внутрішньої служби Збройних Сил України",
        description: "",
        fileType: "Тип: PDF файл",
        size: "~3 Mb",
        date: "",
      },
      {
        id: 1,
        type: "text",
        link: "/books/documenty/Стройовий_статут_ЗСУ.pdf",
        icon: "/images/other-icons/Emblem_of_the_Ukrainian_Armed_Forces.svg",
        title: "Стройовий статут Збройних Сил України",
        description: "",
        fileType: "Тип: PDF файл",
        size: "~3.5 Mb",
        date: "",
      },
      {
        id: 2,
        type: "text",
        link: "/books/documenty/Статут_гарнізонної_та_вартової_служби_ЗСУ.pdf",
        icon: "/images/other-icons/Emblem_of_the_Ukrainian_Armed_Forces.svg",
        title: "Статут гарнізонної та вартової служби Збройних Сил України",
        description: "",
        fileType: "Тип: PDF файл",
        size: "~2.6 Mb",
        date: "",
      },
      {
        id: 3,
        type: "text",
        link: "/books/documenty/Дисциплінарний_статут_ЗСУ.pdf",
        icon: "/images/other-icons/Emblem_of_the_Ukrainian_Armed_Forces.svg",
        title: "Дисциплінарний статут Збройних Сил України",
        description: "",
        fileType: "Тип: PDF файл",
        size: "~800 Kb",
        date: "",
      },
      {
        id: 4,
        type: "text",
        link: "/books/documenty/Закон_про_Національну_гвардію_України.pdf",
        icon: "/images/other-icons/Emblem_of_the_National_Guard_of_Ukraine.svg",
        title: "Закон про Національну гвардію України",
        description: "",
        fileType: "Тип: PDF файл",
        size: "~650 Kb",
        date: "",
      },
            
  ]
    return (
      <div>
        <Head>
          <title>Бібліотека: офіційні документи</title>
          <meta name="description" content="Офіційні керівні документи - статути ЗСУ, закони та ін." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <div className='container'>

        <CurrentPageHeader 
          text='Офіційні документи' 
          backLink='/biblioteka' 
          desc="Офіційні керівні документи - статути ЗСУ, закони та ін."
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

  