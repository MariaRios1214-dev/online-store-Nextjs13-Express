import CardItem from '@/components/CarItem'

export async function getListItems (query) {
  const encode = encodeURI('http://localhost:8080/api/items?q=apple 14')

  return fetch(encode, { cache: 'no-store' })
    .then(res => res.json())
}

export default async function Items ({ params }) {
  const { items } = await getListItems('apple') || []
  console.log('55553343434', items)
  // const { searchParams } = new URL(request.url)
  // const search = searchParams.get('search')
  return (
    <main>
      {items.map(item =>
        <CardItem item={item} path={`/items/${item.id}`} key={item.id} />
      )}
    </main>

  )
}
