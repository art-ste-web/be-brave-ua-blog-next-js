import Head from "next/head"

export default function Psyholog() {
  return (
    <div>
        <Head>
          <title>Психологічна допомога</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <div className='container'>
          <h1 className='page-header'>Психологічна допомога</h1>
          <div className='cards-grid'>

            <p className="temp-text">В розробці...</p>
            
            {/* {books.map((book, index) => (
              <BookCard key={index} book={book} />
            ))} */}
          </div>
        </div>
      </div>
  )
}