import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import { marked } from 'marked'
import Link from 'next/link'
import Image from 'next/image'
import ItemPost from '../../components/ArtTagItemPost'
import TagsCloud from '../../components/ArtTagsCloud'

import AllPostsBtn from '../../components/ArtAllPostsBtn'
// import { NextSeo } from 'next-seo';

export default function tag({ posts }) {




  return (
    <>
   {/* <NextSeo
     title= 'Access your tag realted articles'
     description= 'Access your tag realted articles'
        openGraph={{
          url: 'https://officialrajdeepsingh.dev',
          title: 'Access your tag realted articles',
          description: 'Access your tag realted articles',

          images: [
            {
              url: `${ImageUrl('banner.png')}`,
              width: 1224,
              height: 724,
              alt: 'banner',
              type: 'image/jpeg',
            },
          ],
          site_name: 'Rajdeep Singh',
        }}
      /> */}


      <div>
            <Head>
              <title>Інформація про арт. системи</title>
              <meta name="description" content="ТТХ та інша інформація по арт. системах" />
              <link rel="icon" href="/favicon.ico" />
            </Head>

            <AllPostsBtn />
            <TagsCloud />
            <div className='cards-grid'>

            {posts.map((post, index) => (
                <ItemPost key={index} post={post} />
              ))}

            </div>
      </div>


      
    </>
  )





}


export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts-art'))
  //console.log(files);
  let tempStorage = []

  const temppaths = files.map((filename) => {
    //console.log(filename);
    const markdownWithMeta = fs.readFileSync(
      path.join('posts-art', filename),
      'utf-8'
    )
    
    const { data: frontmatter } = matter(markdownWithMeta)
    frontmatter.tags.map(
      tag => {
        //let slug = slugify(tag)
        let slug = tag
        //console.log(slug);
        tempStorage.push({ params: { slug } });
        
      }
    )
    
    

  })

  


  const paths = tempStorage.filter((item,
    index) => {
      //console.log(item);
    return tempStorage.indexOf(item) === index
  })

  //console.log(paths);

  // const paths=["npm"]


  return {
    paths,
    fallback: false,
  }

}

export async function getStaticProps({ params: { slug } }) {

  // Get files from the posts dir
  const files = fs.readdirSync(path.join('posts-art'))

  let tempStorage = []



  // Get slug and frontmatter from posts

  const tempPosts = files.map((filename) => {

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(path.join('posts-art', filename), 'utf-8')
    
    const { data: frontmatter } = matter(markdownWithMeta)

    frontmatter.tags.map(
      tag => {
        
        //let tagSlug = slugify(tag)
        let tagSlug = tag
        
        if (slug === tagSlug) {
          
          tempStorage.push({ post: frontmatter })
        }
      }
    )

    
  })

  

  //  remove null in tempPosts 

  const posts = tempStorage.filter(
    post => {
      console.log(post);
      return post && post
    }
  )
  //console.log(posts);
  return {
    props: {
      posts,
    },
  }


}