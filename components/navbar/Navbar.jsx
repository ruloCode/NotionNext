import styles from './Navbar.module.scss'
import Link from "next/link";


export const Navbar = () => {
  return (
    <ul className={styles.navbar}>
      <li>
          <Link href={`/posts/`}>
          <a className={styles.navbar__item} href="#about">
          <p>Works </p>
        </a>
          </Link>

        
      </li>
      <li>
      <Link href={`/posts/`}>
      <a className={styles.navbar__item} href="#about">
          <p>Blog </p>
        </a>
      </Link>
       
      </li>
      <li>
      <Link href={`/posts/`}>
      <a className={styles.navbar__item} href="#about">
          <p>Contact</p>
        </a>
      </Link>
        
      </li>
    </ul>
  )
}

export default Navbar
