import Head from 'next/head'
import CurrentPageHeader from '../../components/CurrentPageHeader'
import QuizApp from '../../components/QiuzApp'

import { Tweet } from 'react-tweet'

export default function test() {
  
    return (
      <div>
        <Head>
          <title>test</title>
          <meta name="description" content="test" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <div className='container'>

        <CurrentPageHeader 
          text='test' 
          backLink='/' 
          desc="test"
        />
          
          {/* <div data-theme="dark">
            <Tweet id="1629307668568633344" />
          </div> */}

          <QuizApp/>
        </div>
      </div>
    )
  }

  