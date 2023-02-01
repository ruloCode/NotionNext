import React from "react";
import Link from "next/link";

import styles from "./Navigator.module.scss";
export const Navigator = () => {
  return (
    <nav className={styles.navigator}>
      <ul>
        <li>
          <Link href={`/posts/`}>
            <a>Works</a>
          </Link>
        </li>
        <li>
          <Link href={`/posts/`}>
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href={`/posts/`}>
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
