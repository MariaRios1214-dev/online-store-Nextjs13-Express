'use client'
import styles from '@/styles/inputSearch.module.scss'
import SearchIcon from '@/assets/icons/SearchIcon'
import { useEffect, useState } from 'react'

const placeholderInput = 'Nunca dejes de buscar'

export default function InputSearch () {
  const [query, setQuery] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    const search = e.currentTarget.searchBar.value
    if (!search) return
    setQuery(search)
    window.location.href = `/items?search=${search}`
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form_input__search}>
      <input
        className={styles.input__search}
        type='text'
        placeholder={placeholderInput}
        name='searchBar'
        defaultValue={window.location.search.split('=')[1]}
      />
      <span>
        <SearchIcon />
      </span>
    </form>
  )
}
