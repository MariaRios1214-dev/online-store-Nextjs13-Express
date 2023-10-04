import { NextResponse } from 'next/server'

async function fetchItems (query) {
  const response = await fetch(`http://localhost:8080/api/items?q=${query}`)
  const itemsSearch = await response.json()
  return itemsSearch
}

export async function GET (request) {
  const { searchParams } = new URL(request.url)
  console.log('rrrrrr', request.url)
  const search = searchParams.get('search')
  const items = await fetchItems(search)
  return NextResponse.json(items)
}
