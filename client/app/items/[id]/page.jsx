import Image from 'next/image'
import styles from '@/styles/itemDetail.module.scss'
import Button from '@/components/Button'
import { fetchItemDetail, fetchDescription } from '@/services/items'

const descriptionTitle = 'Descripción del producto'
export default async function ItemDetail ({ params }) {
  const { id } = params

  const { item } = await fetchItemDetail(id)
  return (
    <main>
      <section key={item.id} className={styles.section_detail_item}>
        <article className={styles.detail_item}>
          <Image src={item.picture} width={680} height={500} alt='picture-prod' />
          <div className={styles.detail_item_info}>
            <p className={styles.detail_item_info__conditions}>{`${item.condition} - ${item.sold_quantity} vendidos`}</p>
            <p className={styles.detail_item_info__title}>{item.title}</p>
            <p className={styles.detail_item_info__price}>
              ${item.price}
            </p>
            <Button textTitle='Comprar' />
          </div>
        </article>
        <article className={styles.description_item}>
          <p className={styles.description_item__title}>{descriptionTitle}</p>
          <p className={styles.description_item__text}>{item.description}</p>
        </article>
      </section>
    </main>
  )
}
