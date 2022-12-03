import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'
import Image from 'next/image'
import AllPostsBtn from '../../components/AllPostsBtn'

export default function PostPage({frontmatter: {title, date, cover_image, tags}, slug, content}) {
  return (
    <>  
        <AllPostsBtn />
        <div className='single-post'>
            <h1 className='single-post-title'>{title}</h1>
            <div className='single-post-date'>{date.split('-').reverse().join('.')}</div>
            <div className='tags'>{
                  tags.map(
                    tag => {

                      //const slug = slugify(tag)
                      const slug = tag

                      return (<Link key={tag} href={`/tag/${slug}`}>
                        <a className='post-tag'>
                          <span>#{tag}</span>
                        </a>
                      </Link>)
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
    </>
  )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'))

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
    const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8')

    const {data:frontmatter, content} = matter(markdownWithMeta)

    return {
        props: {
            frontmatter,
            slug,
            content
        }
    }
}

