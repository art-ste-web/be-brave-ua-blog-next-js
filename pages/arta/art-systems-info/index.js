import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import CurrentPageHeader from '../../../components/CurrentPageHeader'
import Quiz from '../../../components/Qiuz'
import Post from '../../../components/ArtPostCard'
import TagsCloud from '../../../components/ArtTagsCloud'
import { sortByDate } from '../../../utils'

export default function Home({ posts }) {
  //console.log(posts)
  return (
    <div>
      <Head>
        <title>ТТХ та інформація по арт. системах.</title>
        <meta name="description" content="ТТХ різних видів арт. озброєння" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CurrentPageHeader
         text='ТТХ арт. озброєння' 
         backLink='/arta' 
         desc='ТТХ різних видів арт. озброєння'
      />

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
  const files = fs.readdirSync(path.join('posts-art'))

  //Get slug and frontmatter from posts
  const posts = files.map(filename => {

    //Create slug
    const slug = filename.replace('.md', '')

    //Get frontmatter
    const markdownWithMeta = fs.readFileSync(path.join('posts-art', filename), 'utf-8')
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