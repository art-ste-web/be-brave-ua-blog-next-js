
import Image from "next/image"
import { useRouter } from 'next/router'

export default function AllPostsBtn() {
  const router = useRouter()
  return (
    <div className="all-posts-btn">
          
              <span className='btn-back' onClick={() => router.back()}>
                <Image
                    src='/images/other-icons/menu-tiles.svg'
                    alt="book-icon"
                    width={32}
                    height={32}
                />
                <span>Всі записи блогу</span>
              </span>
          
    </div>
  )
}
