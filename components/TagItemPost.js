
import Link from "next/link"
import Image from "next/image";
import { slugify, ImageUrl } from '../utils'

export default function ItemPost({ post: {post} }) {
   console.log(post.slug);
  return (
    // <div className="card">
    //     <img src={ post.cover_image} alt="" />

    //     <div className="post-date">{post.date.split('-').reverse().join('.')}</div>

    //     <h3>{post.title}</h3>

    //     <p>{post.excerpt}</p>



    //     <Link href={`/blog/${post.slug}`}>
    //         <a className="btn">Читати</a>
    //     </Link>
    // </div>

    <div className="post-card">
    <Image
      src={post.cover_image}
      alt="post-image"
      width={600}
      height={200}
    />

    <div className="post-date">{post.date.split('-').reverse().join('.')}</div>

    <div className="tags">{
                    post.tags.map(
                      (tag, index) => {

                        //const slug = slugify(tag)
                        const slug = tag
                        

                        return (
                          (<Link key={index} href={`/tag/${slug}`} className="post-tag">

                            <span>#{tag}</span>

                          </Link>)
                        );
                      }
                    )
                  }
            </div>


    <Link href={`/blog/${post.slug}`} legacyBehavior>
      <h2 className="post-title">{post.title}</h2>
    </Link>
    <Link href={`/blog/${post.slug}`} legacyBehavior>
      <p className="post-excerpt">{post.excerpt}</p>
    </Link>


    <Link href={`/blog/${post.slug}`} className="card-btn">
        Читати
    </Link>
    </div>
  );
}
