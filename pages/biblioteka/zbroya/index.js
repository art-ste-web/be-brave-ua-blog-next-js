import Head from 'next/head'
import CurrentPageHeader from '../../../components/CurrentPageHeader'
import BookCard from '../../../components/BookCard'
import VideoCard from '../../../components/VideoCard'

export default function LibZbroya() {
  const psyMatData = [
      {
        id: 0,
        type: "text",
        link: "/books/zbroya/Pamiatka-striltsia.pdf",
        icon: "/images/other-icons/metod.svg",
        title: "Пам'ятка стрільця",
        description: "ТТХ зброї, сигнали управління, дії у складі групи, вразливі місця техніки та ін.",
        fileType: "Тип: PDF файл",
        size: "~1.2 Mb",
        date: "Рік: 2015",
      },
      {
        id: 1,
        type: "text",
        link: "/books/zbroya/Pamiatka-snaipera.pdf",
        icon: "/images/other-icons/metod.svg",
        title: "Пам'ятка снайпера",
        description: "ТТХ зброї, маскування, завдання та дії снайпера, контрснайперська боротьба та ін.",
        fileType: "Тип: PDF файл",
        size: "~1.2 Mb",
        date: "Рік: 2015",
      },
      {
        id: 2,
        type: "text",
        link: "/books/zbroya/Nastanova-AK-74.pdf",
        icon: "/images/other-icons/Emblem_of_the_Ukrainian_Armed_Forces.svg",
        title: "Настанова зі стрілецької справи AK, РПК (5,45)",
        description: "Настанова, призначена для підготовки особового складу Збройних Сил України, який має на озброєнні 5,45-мм автомати Калашнікова та 5,45-мм ручні кулемети Калашнікова.",
        fileType: "Тип: PDF файл",
        size: "~10 Mb",
        date: "Рік: 2005",
      },
      {
        id: 3,
        type: "text",
        link: "/books/zbroya/Nastanova-SVD.pdf",
        icon: "/images/other-icons/Emblem_of_the_Ukrainian_Armed_Forces.svg",
        title: "Настанова зі стрілецької справи СГД",
        description: "Настанова призначена для підготовки особового складу Збройних Сил України, який має на озброєнні 7,62-мм снайперську гвинтівку Драгунова (СГД).",
        fileType: "Тип: PDF файл",
        size: "~6.5 Mb",
        date: "Рік: 2006",
      },
      {
        id: 4,
        type: "text",
        link: "/books/zbroya/Nastanova-kulemety-PKM.pdf",
        icon: "/images/other-icons/Emblem_of_the_Ukrainian_Armed_Forces.svg",
        title: "Настанова зі стрілецької справи кулемети 7,62 мм: ПК, ПКМ, ПКС, ПКМС, ПКБ, ПКМБ і ПКТ",
        description: "Настанова призначена для підготовки особового складу Збройних Сил, який має на озброєнні 7,62 - мм кулемети Калашнікова ПК, ПКМ, ПКС, ПКМС, ПКБ, ПКМБ і ПКТ.",
        fileType: "Тип: PDF файл",
        size: "~3.8 Mb",
        date: "Рік: 2003",
      },
      {
        id: 5,
        type: "text",
        link: "/books/zbroya/Nastanova-granaty.pdf",
        icon: "/images/other-icons/Emblem_of_the_Ukrainian_Armed_Forces.svg",
        title: "Настанова ручні гранати",
        description: "Настанова призначена для підготовки особового складу Збройних Сил України, який має на озброєнні ручні гранати.",
        fileType: "Тип: PDF файл",
        size: "~3.5 Mb",
        date: "Рік: 2005",
      },
      {
        id: 6,
        type: "text",
        link: "/books/zbroya/Nastanova-RPG-7.pdf",
        icon: "/images/other-icons/Emblem_of_the_Ukrainian_Armed_Forces.svg",
        title: "Настанова зі стрілецької справи РПГ-7",
        description: "У дійсній настанові описана будова РПГ – 7 та його модифікацій (РПГ – 7Д, РПГ – 7В), які знаходяться на озброєнні у Збройних Силах України.",
        fileType: "Тип: PDF файл",
        size: "~2.5 Mb",
        date: "Рік: 2004",
      },
      {
        id: 7,
        type: "text",
        link: "/books/zbroya/Nastanova-PM.pdf",
        icon: "/images/other-icons/Emblem_of_the_Ukrainian_Armed_Forces.svg",
        title: "Настанова зі стрілецької справи 9-мм пістолет Макарова (ПМ)",
        description: "Настанова призначена для підготовки особового складу Збройних Сил України, який має на озброєнні 9-мм пістолет Макарова.",
        fileType: "Тип: PDF файл",
        size: "~2 Mb",
        date: "Рік: 2004",
      },
  ]
    return (
      <div>
        <Head>
          <title>Бібліотека: зброя та вогнева підготовка</title>
          <meta name="description" content="Настанови та навчальні матеріали зі зброї та вогневої підготовки" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <div className='container'>

        <CurrentPageHeader 
          text='Зброя та вогнева підготовка' 
          backLink='/biblioteka' 
          desc="Настанови та навчальні матеріали зі зброї та вогневої підготовки"
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

  