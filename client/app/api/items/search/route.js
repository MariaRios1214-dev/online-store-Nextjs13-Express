import { NextResponse } from 'next/server'

async function fetchItems (query) {
  const response = await fetch('https://api.mercadolibre.com/items/MLA632938595')

  const itemsSearch = await response.json()
  return itemsSearch
}

export async function GET (request) {
  const { searchParams } = new URL(request.url)
  console.log(request.url)
  const query = searchParams.get('q')
  const items = await fetchItems(query)
  return NextResponse.json(items)
}
