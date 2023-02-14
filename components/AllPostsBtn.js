import Link from "next/link"
import Image from "next/image"

export default function AllPostsBtn() {
  return (
    <div className="all-posts-btn">
          <Link href='/blog'>
              <a className='btn-back'>
                <Image
                    src='/images/other-icons/menu-tiles.svg'
                    alt="book-icon"
                    width={32}
                    height={32}
                />
                <span>Всі записи блогу</span>
              </a>
          </Link>
    </div>
  )
}
