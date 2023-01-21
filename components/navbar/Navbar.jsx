import styles from './Navbar.module.scss'

export const Navbar = () => {
  return (
    <ul className={styles.navbar}>
      <li>
        <a className={styles.navbar__item} href="#about">
          <p>Works </p>
        </a>
      </li>
      <li>
        <a className={styles.navbar__item} href="#about">
          <p>Blog </p>
        </a>
      </li>
      <li>
        <a className={styles.navbar__item} href="#about">
          <p>Contact</p>
        </a>
      </li>
    </ul>
  )
}

export default Navbar
