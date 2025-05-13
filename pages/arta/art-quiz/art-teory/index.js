import Head from 'next/head'
import CurrentPageHeader from '../../../../components/CurrentPageHeader'
import Quiz from '../../../../components/QiuzApp'
import qList from '../../../../quiz-questions/art-main-questions'


export default function Home({ posts }) {
  const questList = qList
  //console.log(posts)
  return (
    <div>
      <Head>
        <title>Тести</title>
        <meta name="description" content="Тест основні поняття в артилерії" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CurrentPageHeader
         text='Тести' 
         backLink='/arta' 
         desc='Тест основні терміни та поняття в артилерії'
      />

      <Quiz 
        quest={questList}
        quizHeader = 'Тест: основні терміни в артилерії'
      />
      
    </div>
  )
}



  
