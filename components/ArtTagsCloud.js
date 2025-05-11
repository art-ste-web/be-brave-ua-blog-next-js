import Link from "next/link"
import Image from 'next/image'

export default function ArtTagsCloud() {
    const tags = ["ттх", "д30", "122мм"]
    
    
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
              <Link href={`/tag-art/${slug}`} className="post-tag">

                <span>#{tag}</span>

              </Link>
              </span>
            );
          }
        )
      }
    </div>
  );
}
