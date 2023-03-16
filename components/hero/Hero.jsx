import React from "react";

import Image from "next/image";

import styles from "./Hero.module.scss";
import ProfilePhoto from "../../assets/rulo_profile.webp";
import { Button } from "../ui/button/Button";

export const Hero = () => {
  return (
    <div className="wrapper">
      <section className={styles.hero}>
        <div className={styles["hero-content"]}>
          <div className={styles["hero-img"]}>
            <Image
              alt="User profile photo"
              src={ProfilePhoto}
              objectFit="contain"
              priority
            />
          </div>
          <div className={styles["hero-data"]}>
            <h1 className={styles["hero-title"]}>
              Hello, my name is Rulo, <br /> Web Developer
            </h1>

            <p>
            Dedicated to shaping the web's future, I focus on creating a safe, rewarding, and secure online experience for all. Embracing innovation and the latest technologies, I aim to deliver outstanding user experiences that foster positive digital transformation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
