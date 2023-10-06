import Image from 'next/image'
import styles from '@/styles/itemDetail.module.scss'
import Button from '@/components/Button'
export default function DetailItem ({ item, description }) {
  return (
    <section key={item.id} className={styles.section_detail_item}>
      <article className={styles.detail_item}>
        <Image src={item.picture} width={680} height={500} alt='picture-prod' />
        <div className={styles.detail_item_info}>
          <p className={styles.detail_item_info__conditions}>{`${item.condition === 'new' ? 'Nuevo' : ''} - ${item.soldQuantity} vendidos`}</p>
          <p className={styles.detail_item_info__title}>{item.title}</p>
          <p className={styles.detail_item_info__price}>
            ${item.price}
          </p>
          <Button textTitle='Comprar' />
        </div>
      </article>
      <article className={styles.description_item}>
        <p className={styles.description_item__title}>{description}</p>
        <p className={styles.description_item__text}>{item.description}</p>
      </article>
    </section>
  )
}
