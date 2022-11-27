
import Link from "next/link"
import { slugify, ImageUrl } from '../utils'

export default function ItemPost({ post: {post} }) {
   console.log(post.slug);
  return (
    <div className="card">
        <img src={ post.cover_image} alt="" />

        <div className="post-date">{post.date.split('-').reverse().join('.')}</div>

        <h3>{post.title}</h3>

        <p>{post.excerpt}</p>

        

        <Link href={`/blog/${post.slug}`}>
            <a className="btn">Читати</a>
        </Link>
    </div>
  )
}
