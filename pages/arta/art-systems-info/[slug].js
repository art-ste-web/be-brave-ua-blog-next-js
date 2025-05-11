import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'
import Image from 'next/image'
import Head from "next/head"
import AllPostsBtn from '../../../components/ArtAllPostsBtn'

export default function PostPage({frontmatter: {title, excerpt, date, cover_image, tags}, slug, content}) {
  return <>  
      <Head>
        <title>{title}</title>
        <meta name="description" content={excerpt}/>
        {/* <meta property="og:url" content="https://be-brave-ua.tk/" /> */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={excerpt} />
        <meta property="og:image" content={cover_image} />
      </Head>
      <AllPostsBtn />
      <div className='single-post'>
          <h1 className='single-post-title'>{title}</h1>
          <div className='single-post-date'>{date.split('-').reverse().join('.')}</div>
          <div className='tags'>{
                tags.map(
                  tag => {

                    //const slug = slugify(tag)
                    const slug = tag

                    return (
                        (<Link key={tag} href={`/tag-art/${slug}`} className='post-tag'>

                            <span>#{tag}</span>

                        </Link>)
                    );
                  }
                )
              }
          </div>
          <div className='post-img'>
            <Image
                    src={cover_image}
                    alt="post-image"
                    width={500}
                    height={300}
                    layout="responsive" 
            />
          </div>
          
          <div className='post-body' dangerouslySetInnerHTML={{__html: marked(content)}}>

              {/*---- md file content ---*/}

          </div>

      </div>
      <AllPostsBtn />
  </>;
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts-art'))

    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.md', '')
        }
    }))

    //console.log(paths);

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params: {slug}}) {
    const markdownWithMeta = fs.readFileSync(path.join('posts-art', slug + '.md'), 'utf-8')

    const {data:frontmatter, content} = matter(markdownWithMeta)

    return {
        props: {
            frontmatter,
            slug,
            content
        }
    }
}

