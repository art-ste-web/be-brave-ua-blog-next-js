import Link from "next/link"
import Image from 'next/image'

export default function TagsCloud() {
    const tags = ["артобстріл", "зброя", "зв'язок", "корисні_навички", "starlink"]
    
    
  return (
    <div className="tags-cloud">
      
           
      <span className="tags-title">
      <Image
          className="swipe-icon"
          src={'/images/other-icons/swipe-left.svg'}
          alt="post-image"
          width={24}
          height={24}
      />
        Теги:
        
      </span>
      {
        tags.map(
          (tag, index) => {

            //const slug = slugify(tag)
            const slug = tag
            

            return (
              <span key={index}>
              <Link href={`/tag/${slug}`}>
                <a className="post-tag">
                  <span>#{tag}</span>
                </a>
              </Link>
              </span>
            )
          }
        )
      }
    </div> 


  )
}
