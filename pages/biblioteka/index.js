import Head from 'next/head'
import CurrentPageHeader from '../../components/CurrentPageHeader'
import SubCatCard from "../../components/SubCatCard"

export default function Library() {
  const libSubCatData = [
    {
      icon: '/images/other-icons/rifle-gun.svg',
      title: 'Зброя та вогнева підготовка',
      desc: 'Настанови та навчальні матеріали зі зброї та вогневої підготовки. Довідники з озброення та техніки.',
      link: '/biblioteka/zbroya',
      btnTxt: 'Перейти'
    },
    {
      icon: '/images/other-icons/soldier.svg',
      title: 'Тактична підготовка',
      desc: 'Групова та індивідуальна тактика, розвідка, загальні рекомендації - методичні матеріали, книги та ін.',
      link: '/biblioteka/taktyka',
      btnTxt: 'Перейти'
    },
    {
      icon: '/images/other-icons/shovel.svg',
      title: 'Інженерна підготовка',
      desc: 'Інженерне обладнання позицій, зведення фортифікаційних споруд, вибухові пристрої та ін.',
      link: '/biblioteka/inzhenerna-pidgotovka',
      btnTxt: 'Перейти'
    },
    {
      icon: '/images/other-icons/compass.svg',
      title: 'Топографія та орієнтування',
      desc: 'Матеріали з військової топографії, орієнтування на місцевості, коригування вогню та ін.',
      link: '/biblioteka/topographiya',
      btnTxt: 'Перейти'
    },
    {
      icon: '/images/other-icons/walkie-talkie.svg',
      title: "Зв'язок",
      desc: "Загальні відомості, організація зв'язку та ін.",
      link: '/biblioteka/zvyazok',
      btnTxt: 'Перейти'
    },
    {
      icon: '/images/other-icons/tryzub.svg',
      title: 'Офіційні документи',
      desc: 'Офіційні керівні документи - статути ЗСУ, закони та ін.',
      link: '/biblioteka/documenty',
      btnTxt: 'Перейти'
    }
  ]
    return (
      <div>
        <Head>
          <title>Військова бібліотека</title>
          <meta name="description" content="Книги, статути, настанови та інші навчальні матеріали на військову тематику" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <div className='container'>

          <CurrentPageHeader 
            text='Військова бібліотека' 
            backLink='/'
            desc='Книги, статути, настанови та інші навчальні матеріали на військову тематику'
          />
          
          <div className='cards-grid'>
            {libSubCatData.map((card, index) => (
              <SubCatCard key={index} data={card} />
            ))}          
          </div>
          
        </div>
      </div>
    )
  }

  // export async function getStaticProps() {
  //   const res = await fetch('http://localhost:5000/books')
  //   const data = await res.json()
  //   return {
  //       props: {books: data}
  //   }
  // }