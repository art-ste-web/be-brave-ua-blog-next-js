
import Link from "next/link"
import { slugify } from '../utils'
import Image from 'next/image'

export default function Post({post}) {
  return (
    <div className="post-card">
        <Image
          src={post.frontmatter.cover_image}
          alt="post-image"
          width={500}
          height={300}
        />

        <div className="post-date">{post.frontmatter.date.split('-').reverse().join('.')}</div>

        <div className="tags">{
                  post.frontmatter.tags.map(
                    (tag, index) => {

                      //const slug = slugify(tag)
                      const slug = tag
                      

                      return (
                        <Link key={index} href={`/tag/${slug}`}>
                          <a className="post-tag">
                            <span>#{tag}</span>
                          </a>
                        </Link>
                      )
                    }
                  )
                }
          </div>
        <Link href={`/blog/${post.slug}`}>
          <h2 className="post-title">{post.frontmatter.title}</h2>
        </Link>
        <Link href={`/blog/${post.slug}`}>
          <p className="post-excerpt">{post.frontmatter.excerpt}</p>
        </Link>
        

        <Link href={`/blog/${post.slug}`}>
            <a className="card-btn">Читати</a>
        </Link>
    </div>
  )
}
