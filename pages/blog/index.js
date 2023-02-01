import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import CurrentPageHeader from '../../components/CurrentPageHeader'
import Post from '../../components/PostCard'
import TagsCloud from '../../components/TagsCloud'
import { sortByDate } from '../../utils'

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