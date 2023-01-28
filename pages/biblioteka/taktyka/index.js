import Head from 'next/head'
import CurrentPageHeader from '../../../components/CurrentPageHeader'
import BookCard from '../../../components/BookCard'
import VideoCard from '../../../components/VideoCard'

export default function LibTactics() {
  const psyMatData = [
      {
        id: 0,
        type: "text",
        link: "/books/taktyka/Recomendacii-u-zoni-boyovyh-diy.pdf",
        icon: "/images/other-icons/metod.svg",
        title: "Загальні рекомендації для військовослужбовців, що перебувають в зоні бойових дій",
        description: "Універсальні принципи бою, основи групової та індивідуальної тактики, огляд та обшук ТЗ, та ін.",
        fileType: "Тип: PDF файл",
        size: "~190 Kb",
        date: "Рік: 2015",
      },
      {
        id: 1,
        type: "text",
        link: "/books/taktyka/Taktyka-lehkoi-pikhoty-dlia-malykh-hrup.pdf",
        icon: "/images/other-icons/book-closed.svg",
        title: "Книга: Тактика легкої піхоти для для малих підрозділів",
        description: "Завдання цього перекладу книги – дати мінімум знань та вмінь, які допоможуть знизити втрати в реальній війні, яку наразі веде наша Держава",
        fileType: "Тип: PDF файл",
        size: "~27 Mb",
        date: "",
      },
      {
        id: 2,
        type: "text",
        link: "/books/taktyka/Rozviduvalna-pidhotovka-metodychnyy-material.pdf",
        icon: "/images/other-icons/metod.svg",
        title: "Матеріали з розвідувальної підготовки для навчання військовослужбовців",
        description: "Методичний матеріал з розвідувальної підготовки для навчання військовослужбовців, призваних за мобілізацією",
        fileType: "Тип: PDF файл",
        size: "~3.5 Mb",
        date: "",
      },
      {
        id: 3,
        type: "text",
        link: "/books/taktyka/Viyskova-rozvidka-posibnyk.pdf",
        icon: "/images/other-icons/book-closed.svg",
        title: "Військова розвідка. Навчальний посібник.",
        description: "У навчальному посібнику викладено основні поняття і способи ведення військової розвідки, порядок збору і обробки розвідувальних відомостей, а також надано основні характеристики технічних засобів військової розвідки.",
        fileType: "Тип: PDF файл",
        size: "~18.3 Mb",
        date: "Рік: 2016",
      },
      {
        id: 4,
        type: "text",
        link: "/books/taktyka/Diyi-na-bp-kpp-metodychnyy-material.pdf",
        icon: "/images/other-icons/Emblem_of_the_Ukrainian_Armed_Forces.svg",
        title: "Дії на блокпосту (контрольно-перепускному пункті) (за досвідом проведення ООС (раніше АТО)",
        description: "Рекомендації щодо обладнання стаціонарних і тимчасових блокпостів та організації служби на них",
        fileType: "Тип: PDF файл",
        size: "~2.3 Mb",
        date: "Рік: 2019",
      },
      
  ]
    return (
      <div>
        <Head>
          <title>Бібліотека: тактична підготовка</title>
          <meta name="description" content="Групова та індивідуальна тактика, розвідка, загальні рекомендації - методичні матеріали, книги" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <div className='container'>

        <CurrentPageHeader 
          text='Тактична підготовка' 
          backLink='/biblioteka' 
          desc="Групова та індивідуальна тактика, розвідка, блокпости, загальні рекомендації - методичні матеріали, книги та ін."
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

  