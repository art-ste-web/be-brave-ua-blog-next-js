import Head from 'next/head'
import CurrentPageHeader from '../../../components/CurrentPageHeader'
import BookCard from '../../../components/BookCard'
import VideoCard from '../../../components/VideoCard'

export default function LibTopo() {
  const psyMatData = [
      {
        id: 0,
        type: "text",
        link: "/books/topographiya/Vijskova-topografia-dovidnyk.pdf",
        icon: "/images/other-icons/book-closed.svg",
        title: "Довідник з основних понять військової топографії",
        description: "Довідник передбачений для підготовки та проведення занять з військової топографії у системі колективної та індивідуальної підготовки у Сухопутних військах Збройних Силах України.В посібнику зібрано основні вимоги та схеми до типових фортифікаційних споруд. Матеріали зібрані з різних настанов основаних на досвіді війн XX ст.",
        fileType: "Тип: PDF файл",
        size: "~9.7 Mb",
        date: "Рік: 2022",
      },
      {
        id: 1,
        type: "text",
        link: "/books/topographiya/Topohrafichna-pidhotovka-metodychnyy-material.pdf",
        icon: "/images/other-icons/metod.svg",
        title: "Матеріали з топографічної і навігаційної підготовки",
        description: "Методичний матеріал з топографічної і навігаційної підготовки для навчання військовослужбовців, призваних за мобілізацією",
        fileType: "Тип: PDF файл",
        size: "~1 Mb",
        date: "Рік: 2015",
      },
      {
        id: 2,
        type: "text",
        link: "/books/topographiya/Vijskova-topografiya-pidruchnyk.pdf",
        icon: "/images/other-icons/book-closed.svg",
        title: "Військова топографія. Підручник",
        description: "Розглядаються питання військової топографії: способи та оцінка дослідження місцевості, орієнтування на ній, використання топографічних і спеціальних карт, аерофотознімків місцевості, здійснення вимірів за картою та на місцевості, порядок складання схем місцевості і бойових графічних документів, а також засоби ведення розвідки місцевості та рекогносцировки. Автори: О. Г. Міхно, С. Г. Шмаль.",
        fileType: "Тип: PDF файл",
        size: "~12.6 Mb",
        date: "Рік: 2008",
      },
            
  ]
    return (
      <div>
        <Head>
          <title>Бібліотека: топографія та орієнтування на місцевості</title>
          <meta name="description" content="Матеріали з військової топографії, орієнтування на місцевості, коригування вогню - посібники, методичні матеріали та ін." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <div className='container'>

        <CurrentPageHeader 
          text='Топографія та орієнтування на місцевості' 
          backLink='/biblioteka' 
          desc="Матеріали з військової топографії, орієнтування на місцевості, коригування вогню - посібники, методичні матеріали та ін."
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

  