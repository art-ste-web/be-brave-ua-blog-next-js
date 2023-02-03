import Image from "next/future/image"
import Link from "next/link"

export default function SubCatCard(props) {
  return (
    <div className="sub-cat-card">
        <div className="card-header">
            <div className="card-icon">
                <Link href={props.data.link}>
                    <a>
                        <Image
                                src={props.data.icon}
                                alt="card-icon"
                                width={48}
                                height={48}
                                
                        />
                    </a>
                </Link>
                        
            </div>
            <Link href={props.data.link}>
                <a>
                    <h2 className="card-title">{props.data.title}</h2>
                </a>
            </Link>
        </div>
                
                                                
                <div className="card-meta">
                
                    <p className="card-desc">{props.data.desc}</p>
                    
                    <Link href={props.data.link}>
                        <a>
                            <button className="card-link-btn">Перейти</button>
                        </a>
                    </Link>
                </div>                        
            </div>
  )
}
