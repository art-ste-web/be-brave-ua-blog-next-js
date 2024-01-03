
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
            <h2>{category.cardTitle}</h2>
          </Link>
          <Link href={category.cardLink} legacyBehavior>
            <p>{category.cardDesc}</p>
          </Link>
          
          <Link href={category.cardLink} className="card-btn">
              Перейти
          </Link>
      </div>
  );
}
