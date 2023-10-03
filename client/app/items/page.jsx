import CardItem from '@/components/CarItem'
import Link from 'next/link'

const ItemsList = [
  {
    id: 'MLA1364tt102075',
    title: 'Funda Silicone Cover Apple Silicone Case Soft White Con Diseño Liso Para Apple iPhone iPhone 11 Por 1 Unidad - Distribuidor Autorizado',
    price: {
      currency: 'ARS',
      amount: 68938,
      decimals: 58
    },
    picture: 'https://http2.mlstatic.com/D_NQ_NP_912227-MLA71782903150_092023-V.webp',
    condition: 'new',
    free_shipping: true,
    state_name: 'Capital Federal'
  },
  {
    id: 'MLA6329r38595',
    title: 'Jgox9 Herramienta Destornillador Apple iPhone iPad iPod Htec',
    price: {
      currency: 'ARN',
      amount: 3521,
      decimals: 58
    },
    picture: 'https://http2.mlstatic.com/D_NQ_NP_850683-MLA45716800336_042021-V.webp',
    condition: 'new',
    free_shipping: true,
    state_name: 'Capital Federal'
  },
  {
    id: 'MLA632938yyr595',
    title: 'Funda Silicone Cover Apple Silicone Case Soft White Con Diseño Liso Para Apple iPhone iPhone 11 Por 1 Unidad - Distribuidor Autorizado',
    price: {
      currency: 'ARN',
      amount: 3521,
      decimals: 58
    },
    picture: 'https://http2.mlstatic.com/D_NQ_NP_850683-MLA45716800336_042021-V.webp',
    condition: 'new',
    free_shipping: true,
    state_name: 'Capital Federal'
  }
]
const searchItems = async (query) => {
  try { await fetch(`/api/items?q=${query}`) } catch {
    // new throw Error('Failed response')
  }
}
export default async function Items ({ params }) {
  console.log('ssssssssssssssss', params)
  // const Items = await searchItems()
  return (
    <main>
      {ItemsList.slice(0, 4).map(item =>
        <CardItem item={item} path={`/items/${item.id}`} key={item.id} />
      )}
    </main>

  )
}
