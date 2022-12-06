import styles from './Header.module.css'
import igniteLogo from '../assets/img/logo.png'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="logo do Ignite" />
    </header>
    
  )
}