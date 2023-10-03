import styles from '@/styles/button.module.scss'
export default function Button ({ textTitle }) {
  return (
    <button type='submit' className={styles.button_component}>{textTitle}</button>
  )
}
