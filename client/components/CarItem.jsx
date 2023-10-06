'use client'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import styles from '@/styles/cardItem.module.scss'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getListItems } from '@/app/api/route'
import CarIcon from '@/assets/icons/CarIcon'

export default function CardItem () {
  const searchParams = useSearchParams()
  const search = searchParams.get('search')
  const [itemList, setItemList] = useState([])

  useEffect(() => {
    getItemsBySearch()
  }, [search])

  const getItemsBySearch = () => getListItems(search)
    .then(items => setItemList(items))
    .catch((error) => {
      console.error({ error })
    })

  return (
    <>
      {itemList && itemList.length > 0 && itemList.map(item =>
        <Link
          href={`/items/${item.id}`}
          key={item.id}
          className={styles.cardItem_link}
          id='cardItem__article-link'
        >
          <article className={styles.cardItem__article}>
            <Image
              className={styles.cardItem__article_img}
              src={item.picture}
              width={180}
              height={180}
              alt={item.title}
            />
            <div className={styles.cardItem__article_detail}>
              <div className={styles.detail_content}>
                <p className={styles.detail_price}>${item.price}</p>
                {item.freeShipping &&
                  <small>
                    <CarIcon />
                  </small>}
              </div>
              <p className={styles.detail_title}>{item.title}</p>
            </div>
            <p className={styles.detail_location}>{item.address.cityName}</p>
          </article>
        </Link>
      )}
    </>
  )
}
