'use client'
import styles from '@/styles/inputSearch.module.scss'
import { useState } from 'react'

export default function InputSearch ({ placeholder, icon }) {
  const [query, setQuery] = useState('')

  const handleSubmit = async (e) => e.preventDefault()
  return (
    <form onSubmit={handleSubmit} className={styles.form_input__search}>
      <input
        className={styles.input__search}
        type='text'
        placeholder={placeholder}
        onChange={e => setQuery(e.target.value)}
        value={query}
      />
    </form>
  )
}
