import Image from 'next/image'
import styles from '@/styles/cardItem.module.scss'
import Link from 'next/link'

export default function CardItem ({ item, path }) {
  return (
    <Link href={path} key={item.id} className={styles.cardItem_link}>
      <article className={styles.cardItem__article}>
        <Image className={styles.cardItem__article_img} src={item.picture} width={180} height={180} alt={item.title} />
        <div className={styles.cardItem__article_detail}>
          <div>
            <p className={styles.detail_price}>
              ${item.price.amount}
            </p>
            {
        item.free_shipping &&
          <small> imagen carrito</small>
        }
          </div>
          <p className={styles.detail_title}>{item.title}</p>
        </div>
        <p className={styles.detail_location}>{item.state_name}</p>
      </article>
    </Link>

  )
}
