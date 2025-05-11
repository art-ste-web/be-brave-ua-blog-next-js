import Head from 'next/head'
import CurrentPageHeader from '../../../components/CurrentPageHeader'



export default function Home({ posts }) {
  //console.log(posts)
  return (
    <div>
      <Head>
        <title>Література та керівні документи</title>
        <meta name="description" content="Література та керівні документи" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CurrentPageHeader
         text='Література та керівні документи' 
         backLink='/arta' 
         desc='Блокноти, книги, настанови, статути'
      />

      В розробці...
      
    </div>
  )
}



  
