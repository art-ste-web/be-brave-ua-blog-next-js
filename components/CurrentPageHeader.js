import Image from "next/image"
import Link from "next/link"

export default function CurrentPageHeader(props) {
  return (
    <h1 className='page-header'>
        <span className="back-btn">
            <Link href={props.backLink}>
              <a>
                <Image 
                    src='/images/other-icons/back-btn.svg'
                    alt="arrow-left-icon"
                    width={48}
                    height={48}
                />
              </a>
            </Link>
        </span>
        {props.text}
    </h1>
  )
}
