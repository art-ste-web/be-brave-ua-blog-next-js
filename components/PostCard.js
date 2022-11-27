
import Link from "next/link"
import { slugify } from '../utils'
import Image from 'next/image'

export default function Post({post}) {
  return (
    <div className="card">
        <Image
          src={post.frontmatter.cover_image}
          alt="Picture of the author"
          width={500}
          height={300}
        />

        <div className="post-date">{post.frontmatter.date.split('-').reverse().join('.')}</div>
        <Link href={`/blog/${post.slug}`}>
          <h3>{post.frontmatter.title}</h3>
        </Link>
        <Link href={`/blog/${post.slug}`}>
          <p>{post.frontmatter.excerpt}</p>
        </Link>
        <div>{
                  post.frontmatter.tags.map(
                    (tag, index) => {

                      //const slug = slugify(tag)
                      const slug = tag
                      

                      return (
                        <Link key={index} href={`/tag/${slug}`}>
                          <a>
                            <span>#{tag}</span>
                          </a>
                        </Link>
                      )
                    }
                  )
                }
          </div>

        <Link href={`/blog/${post.slug}`}>
            <a className="btn">Читати</a>
        </Link>
    </div>
  )
}
