import Head from 'next/head'
import CurrentPageHeader from '../../../components/CurrentPageHeader'
import SubCatCard from "../../../components/SubCatCard"

export default function Library() {
  const libSubCatData = [
    {
      icon: '/images/other-icons/test.svg',
      title: 'Тест: основні терміни в артилерії',
      desc: 'Основні поняття та визначення, що використовуються в артилерії',
      link: '/arta/art-quiz/art-teory',
      btnTxt: 'Пройти тест'
    },
    {
      icon: '/images/other-icons/test.svg',
      title: 'Тест: основи конструкції причіпних гармат',
      desc: 'Основні елементи конструкції причіпних гармат',
      link: '/arta/art-quiz/art-constr',
      btnTxt: 'Пройти тест'
    },
        
  ]
    return (
      <div>
        <Head>
          <title>Тести з основних понять артилерії</title>
          <meta name="description" content="Основні визначення в артилерії та конструкція арт. систем в тестах" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <div className='container'>

          <CurrentPageHeader 
            text='Тести з основ артилерії ' 
            backLink='/'
            desc='Основні визначення та терміни в артилерії, конструкція арт. систем в тестах'
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