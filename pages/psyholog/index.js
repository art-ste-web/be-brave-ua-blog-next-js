import Head from "next/head"
import Link from "next/link"
import SubCatCard from "../../components/SubCatCard"
import CurrentPageHeader from "../../components/CurrentPageHeader"
export default function Psyholog() {
  const psySubCatData = [
    {
      icon: '/images/other-icons/phone-call-help.svg',
      title: 'Контакти допомоги',
      desc: '💔Важка життєва ситуація? Немає з ким порадитись і поділитись проблемою? Зателефонуй або напиши і отримай підтримку та допомогу❤️‍🩹',
      link: '/psyholog/help'
    },
    {
      icon: '/images/other-icons/psy-book-education.svg',
      title: 'Корисні матеріали',
      desc: 'Хочеш дізнатися що відбувається з твоїм організмом під час бойового стресу? Як зменшити його вплив на організм? Розвивати стресостійкість і заспокоїтись у критичній ситуації? Тут зібрані поради психологів і перевірені в бойових умовах техніки та вправи.',
      link: '/psyholog/help'
    }
  ]
  return (
    <div>
        <Head>
          <title>Матеріали з психологічної підготовки військових. Контакти психологічної допомоги.</title>
          <meta name="description" content="Поради психологів як зменшити вплив бойового стресу на організм. Куди звертатись за підтримкою та допомогою у критичній ситуації." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <div className='container'>

          <CurrentPageHeader text='Психологічна допомога' backLink='/'/> 
          
          <div className='cards-grid'>
            {psySubCatData.map((card, index) => (
              <SubCatCard key={index} data={card} />
            ))}          
          </div>
        </div>
      </div>
  )
}
