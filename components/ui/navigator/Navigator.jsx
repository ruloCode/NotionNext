import React from "react";
import styles from "./Navigator.module.scss";
export const Navigator = () => {
  return (
    <nav className={styles.navigator}>
      <ul>
        <li>
          <a href="#about">Works</a>
        </li>
        <li>
        <a href="#about">Blog</a>
        </li>
        <li>
        <a href="#about">Contact</a>

        </li>
      </ul>
    </nav>
  );
};
