import { getItemDetail } from '@/app/api/items/route'
import DetailItem from '@/components/DetailItem'

const descriptionTitle = 'Descripción del producto'
export default async function ItemDetail ({ params }) {
  const { id } = params

  const { item } = await getItemDetail(id)

  return (
    <main>
      <DetailItem item={item} description={descriptionTitle} />
    </main>
  )
}
