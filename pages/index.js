import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import Category from '../components/CategoryCard'
import DeadRusStats from '../components/DeadRusStats'
import { sortByDate } from '../utils'

const categoryData = [
  {
    cardTitle: 'Військовий блог',
    cardDesc: 'Досвід бійців, практичні поради',
    cardBg: '/images/categories/blog.jpg',
    cardLink: '/blog'
  },
  {
    cardTitle: 'Тактична медицина',
    cardDesc: 'Базові знання з тактичної медицини',
    cardBg: '/images/categories/takmed.jpg',
    cardLink: '/takmed'
  },
  {
    cardTitle: 'Психологічна допомога',
    cardDesc: 'Поради психологів, контакти допомоги',
    cardBg: '/images/categories/psy.jpg',
    cardLink: '/psyholog'
  },
  {
    cardTitle: 'Військова бібліотека',
    cardDesc: 'Настанови, учбові матеріали, книги',
    cardBg: '/images/categories/lib.jpg',
    cardLink: '/biblioteka'
  },
]


export default function Home({ posts }) {
  //console.log(posts)
  return (
    <div>
      <Head>
        <title>Базові знання з військової підготовки та досвід бійців</title>
        <meta name="description" content="Навчальні матеріали з базової військової підготовки, офіційні настанови зі стрілецької та іншої зброї, матеріали з тактичної медицини та психології. Досвід бійців у статтях блогу." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='cards-grid'>
        {categoryData.map((category, index) => (
          <Category key={index} category={category} />
        ))}
      </div>
       <DeadRusStats />   
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

  console.log(posts)

  return {
    props: {
      posts: posts.sort(sortByDate),
    }
  }
}
