'use client'
import styles from '@/styles/inputSearch.module.scss'
import SearchIcon from '@/assets/icons/SearchIcon'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const placeholderInput = 'Nunca dejes de buscar'

export default function InputSearch () {
  const [value, setValue] = useState()
  const path = usePathname()

  const handleSubmit = (e) => {
    e.preventDefault()
    const search = e.currentTarget.search.value
    setValue(search)
    if (!search) return
    window.location.href = `/items?search=${search}`
  }

  useEffect(() => {
    setValue(sessionStorage.getItem('search'))
    if (path === '/' && value !== '') {
      sessionStorage.removeItem('search')
      setValue('')
    }
  }, [path])

  return (
    <form onSubmit={handleSubmit} className={styles.form_input__search}>
      <input
        className={styles.input__search}
        type='text'
        placeholder={placeholderInput}
        name='search'
        onChange={e => sessionStorage.setItem('search', e.target.value)}
        defaultValue={value}
      />
      <SearchIcon />
    </form>
  )
}
