import Image from 'next/image'
import logo from '@/assets/img/logo__large_plus.png'
import Link from 'next/link'
import InputSearch from './InputSearch'
import styles from '@/styles/navbar.module.scss'

const urlLogo = 'https://http2.mlstatic.com/storage/developers-site-cms-admin/268205826549-Mercado-Libre--3-.png'
const placeholderInput = 'Nunca dejes de buscar'
export default function Nabvar () {
  return (
    <header className={styles.header__nav}>
      <nav className={styles.nav__content}>
        <Link href='/'>
          <Image src={urlLogo} width={134} height={34} alt='nav-logo-ml' />
        </Link>
        <InputSearch
          placeholder={placeholderInput}
        />
      </nav>
    </header>
  )
}
