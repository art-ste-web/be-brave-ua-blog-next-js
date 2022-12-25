import Image from "next/image"
import Link from "next/link"

export default function CurrentPageHeader(props) {
  return (
    <div className="page-header-wrapper">
      
          <div className="back-btn">
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
          </div>
          <div>
            <h1 className='page-header'>{props.text}</h1>
            {props.desc && <p className="page-desc">{props.desc}</p>}
            
          </div>
    </div>
  )
}
