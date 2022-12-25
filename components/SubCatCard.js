import Image from "next/image"
import Link from "next/link"

export default function SubCatCard(props) {
  return (
    <div className="sub-cat-card">
        <div className="card-header">
            <div className="card-icon">
                <Link href={props.data.link}>
                    <Image
                            src={props.data.icon}
                            alt="card-icon"
                            width={48}
                            height={48}
                            
                    />
                </Link>
                        
            </div>
            <Link href={props.data.link}>
                    <h2 className="card-title">{props.data.title}</h2>
            </Link>
        </div>
                
                                                
                <div className="card-meta">
                
                    <p className="card-desc">{props.data.desc}</p>
                    
                    <Link href={props.data.link}>
                        <button className="card-link-btn">Перейти</button>
                    </Link>
                </div>                        
            </div>
  )
}
