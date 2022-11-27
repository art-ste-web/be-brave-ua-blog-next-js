
import Link from "next/link"
import Image from 'next/image'



export default function Category({category}) {
    const styles = {
        cat_card: {
            backgroundColor: '#ccc',
            backgroundImage: `url(${category.cardBg})`,
            
        }
    }
  return (
    <div className="cat-card" style={styles.cat_card}>
               
        <Link href={category.cardLink}>
          <a><h2>{category.cardTitle}</h2></a>
        </Link>
        <Link href={category.cardLink}>
          <p>{category.cardDesc}</p>
        </Link>
        
        <Link href={category.cardLink}>
            <a className="card-btn">Перейти</a>
        </Link>
    </div>
  )
}
