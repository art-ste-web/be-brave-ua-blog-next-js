
import Image from "next/image"
import { useRouter } from 'next/router'
import Link from "next/link"
export default function AllPostsBtn() {
  const router = useRouter()
  return (
    <div className="post-back-nav">
      <span className="post-back-btn" onClick={() => router.back()}>
        <Image 
          src='/images/other-icons/back-btn.svg'
          alt="arrow-left-icon"
          width={48}
          height={48}
        />
      </span>
      <div className="all-posts-btn">
            <Link href={'/blog'}>
                <span className='btn-back'>
                  <Image
                      src='/images/other-icons/menu-tiles.svg'
                      alt="book-icon"
                      width={32}
                      height={32}
                  />
                  <span>Всі записи блогу</span>
                </span>
            </Link>
      </div>
    </div>
  )
}
