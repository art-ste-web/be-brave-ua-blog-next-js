import Link from "next/link"
import Image from "next/image"

export default function BookCard(props) {
    
  return (
    
            <div>
                <Image
                    src={props.book.icon}
                    alt="Picture of the author"
                    width={50}
                    height={50}
                />
                <div className="post__meta">
                    <h4>{props.book.title}</h4>
                    <p>{props.book.description}</p>
                    <p>{props.book.fileType}<span>{props.book.size}</span></p>
                    <p><span>{props.book.date}</span></p>
                </div>                        
            </div>
       
  )
}
