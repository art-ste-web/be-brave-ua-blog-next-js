import Image from "next/image"
import Link from "next/link"

export default function SubCatCard(props) {
  return (
    <div className="sub-cat-card">
                <div className="card-icon">
                    <Link href={props.data.link}>
                        <Image
                                src={props.data.icon}
                                alt="card-icon"
                                width={248}
                                height={248}
                                
                        />
                    </Link>
                </div>
                                                
                <div className="card-meta">
                <Link href={props.data.link}>
                    <h2 className="card-title">{props.data.title}</h2>
                </Link>
                    <p className="card-desc">{props.data.desc}</p>
                    
                    <Link href={props.data.link}>
                        <button className="card-link-btn">Перейти</button>
                    </Link>
                </div>                        
            </div>
  )
}
