import Link from "next/link"
import Image from "next/image"

export default function BookCard(props) {
    
  return (
    
            <div className="book-card" id={props.book.id}>
                <div className="card-icon">
                    <Image
                            src={props.book.icon}
                            alt="book-icon"
                            width={148}
                            height={148}
                    />
                </div>
                                                
                <div className="book-meta">
                    <h4 className="book-title">{props.book.title}</h4>
                    <p className="book-desc">{props.book.description}</p>
                    <p className="doc-type">{props.book.fileType}<span>{props.book.size}</span></p>
                    <p className="book-date"><span>{props.book.date}</span></p>
                    <Link href={props.book.link}>
                        <button className="dwld-book-btn">
                            <Image
                                    src='/images/other-icons/download.svg'
                                    alt="download-icon"
                                    width={16}
                                    height={16}
                            />
                            <span>Завантажити</span>
                        </button>
                    </Link>
                </div>                        
            </div>
       
  )
}
