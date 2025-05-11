import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import CurrentPageHeader from '../../components/CurrentPageHeader'
import Category from '../../components/CategoryCard'
import Quiz from '../../components/Qiuz'
import Post from '../../components/PostCard'
import TagsCloud from '../../components/TagsCloud'
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
    cardLink: '/arta'
  },
  {
    cardTitle: 'Тести',
    cardDesc: 'Тести з теорії артилерії та конструкції арт. систем',
    cardBg: '/images/categories/art-test.jpg',
    cardLink: '/arta'
  },
]



export default function Home({ posts }) {
  //console.log(posts)
  return (
    <div>
      <Head>
        <title>Військовий блог. Досвід бійців та корисні поради.</title>
        <meta name="description" content="В статтях блогу зібрані практичні поради вій бійців засновані на досвіді ведення бойових дій під час російсько-української війни." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CurrentPageHeader
         text='Військовий блог' 
         backLink='/' 
         desc='Практичні поради та бойовий досвід'
      />

      <div className='cards-grid'>
              {artCategoryData.map((category, index) => (
                <Category key={index} category={category} />
              ))}
      </div>

      <Quiz />

      <TagsCloud />

       <div className='cards-grid'>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
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