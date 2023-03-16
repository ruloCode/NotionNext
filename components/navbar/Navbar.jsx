import styles from "./Navbar.module.scss";
import Link from "next/link";

export const Navbar = () => {
  return (
    <ul className={styles.navbar}>
      {/* <li>
        <Link href="/works">
          <a className={styles.navbar__item}>
            <p>Works</p>
          </a>
        </Link>
      </li> */}
      <li>
        <Link href="/blog">
          <a className={styles.navbar__item}>
            <p>Blog</p>
          </a>
        </Link>
      </li>
      {/* <li>
        <Link href="/about">
          <a className={styles.navbar__item}>
            <p>About</p>
          </a>
        </Link>
      </li> */}
    </ul>
  );
};

export default Navbar;
