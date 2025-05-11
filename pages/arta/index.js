import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import CurrentPageHeader from '../../components/CurrentPageHeader'
import Category from '../../components/CategoryCard'
import { sortByDate } from '../../utils'


const artCategoryData = [
  {
    cardTitle: 'ТТХ та інформація',
    cardDesc: 'ТТХ та інформація про арт. озброєння',
    cardBg: '/images/categories/char.jpg',
    cardLink: '/arta/art-systems-info'
  },
  {
    cardTitle: 'Настанови та література',
    cardDesc: 'Настанови та керівні документи',
    cardBg: '/images/categories/art-lit.jpg',
    cardLink: '/arta/art-lib'
  },
  {
    cardTitle: 'Тести',
    cardDesc: 'Тести з теорії артилерії та конструкції арт. систем',
    cardBg: '/images/categories/art-test.jpg',
    cardLink: '/arta/art-quiz'
  },
]



export default function Home({ posts }) {
  //console.log(posts)
  return (
    <div>
      <Head>
        <title>Артилерія</title>
        <meta name="description" content="ТТХ та описи арт. систем, література та керівні документи, тести" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CurrentPageHeader
         text='Артилерія' 
         backLink='/' 
         desc='ТТХ та описи арт. систем, література та керівні документи, тести'
      />

      <div className='cards-grid'>
              {artCategoryData.map((category, index) => (
                <Category key={index} category={category} />
              ))}
      </div>

                  
    </div>
  )
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('posts'))

  //Get slug and frontmatter from posts
  const posts = files.map(filename => {

    //Create slug
    const slug = filename.replace('.md', '')

    //Get frontmatter
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const { data: frontmatter } = matter(markdownWithMeta)


    return {
      slug,
      frontmatter
    }
  })

  //console.log(posts)

  return {
    props: {
      posts: posts.sort(sortByDate),
    }
  }
}