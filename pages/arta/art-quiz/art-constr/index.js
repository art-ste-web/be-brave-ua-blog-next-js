import Head from 'next/head'
import CurrentPageHeader from '../../../../components/CurrentPageHeader'
import Quiz from '../../../../components/QiuzApp'
import qList from '../../../../quiz-quest/art-main-quest'


export default function Home({ posts }) {
  const questList = qList
  //console.log(posts)
  return (
    <div>
      <Head>
        <title>Тести</title>
        <meta name="description" content="Тест основні елементи конструкції гармат" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CurrentPageHeader
         text='Тести' 
         backLink='/arta' 
         desc='Тест основні елементи конструкції гармат'
      />

      <Quiz 
        quest={questList}
        quizHeader = 'Тест: основні елементи конструкції причіпних гармат'
      />
      
    </div>
  )
}



  
