import Link from "next/link"
import Image from "next/image"

export default function BookCard(props) {
    
  return (
      <div className="book-card" id={props.book.id}>
          <div className="book-header">
              <div className="card-icon">
                  <Image
                          src={props.book.icon}
                          alt="book-icon"
                          width={48}
                          height={48}
                  />
              </div>
              <h4 className="book-title">{props.book.title}</h4>
          </div>
          
                                          
          <div className="book-meta">
              
              <p className="book-desc">{props.book.description}</p>
              <p className="doc-type">{props.book.fileType}<span className="file-size">{props.book.size}</span></p>
              <p className="book-date"><span>{props.book.date}</span></p>
              <Link href={props.book.link} legacyBehavior>
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
  );
}
