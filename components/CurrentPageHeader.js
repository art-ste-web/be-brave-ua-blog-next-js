import Image from "next/image"
import { useRouter } from 'next/router'

export default function CurrentPageHeader(props) {
  const router = useRouter()
  return (
    <div className="page-header-wrapper" onClick={() => router.back()}>
      
          <div className="back-btn">
              
                  <Image 
                      src='/images/other-icons/back-btn.svg'
                      alt="arrow-left-icon"
                      width={48}
                      height={48}
                  />
                
          </div>
          <div>
            <h1 className='page-header'>{props.text}</h1>
            {props.desc && <p className="page-desc">{props.desc}</p>}
            
          </div>
    </div>
  )
}
