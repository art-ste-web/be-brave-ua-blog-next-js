import Link from "next/link"
import Image from "next/image"

export default function VideoCard({itemData}) {
    
  return (
      <div className="book-card" id={itemData.id}>
          <div className="book-header">
              <div className="card-icon">
                  <Image
                          src={itemData.icon}
                          alt="book-icon"
                          width={48}
                          height={48}
                  />
              </div>
              <h4 className="book-title">{itemData.title}</h4>
          </div>
          
                                          
          <div className="book-meta">
              
              <p className="book-desc">{itemData.description}</p>
              <p className="doc-type">{itemData.fileType}<span className="file-size">{itemData.size}</span></p>
              <p className="book-date"><span>{itemData.date}</span></p>
              <Link href={itemData.link} legacyBehavior>
                  <button className="dwld-book-btn">
                      <Image
                              src='/images/other-icons/youtube-icon.svg'
                              alt="download-icon"
                              width={24}
                              height={20}
                      />
                      <span>Дивитись</span>
                  </button>
              </Link>
          </div>                        
      </div>
  );
}
