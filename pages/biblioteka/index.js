import Head from 'next/head'
import CurrentPageHeader from '../../components/CurrentPageHeader'
import BookCard from '../../components/BookCard'


export default function Library({books}) {
    // console.log('props >>> ', books);
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
            {books.map((book, index) => (
              <BookCard key={index} book={book} />
            ))}
          </div>
          
        </div>
      </div>
    )
  }

  export async function getStaticProps() {
    const res = await fetch('http://localhost:5000/books')
    const data = await res.json()
    return {
        props: {books: data}
    }
  }