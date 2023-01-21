import React from 'react';

import Image from 'next/image';

import styles from './Hero.module.scss';
import ProfilePhoto from '../../assets/rulo_profile.webp';
import { Button } from '../ui/button/Button';

export const Hero = () => {
  return (
    <div className="wrapper">
      <section className={styles.hero}>
        <div className={styles['hero-content']}>
          <div className={styles['hero-img']}>
            <Image
              alt="User profile photo"
              src={ProfilePhoto}
              objectFit="contain"
              priority
            />
          </div>
          <div className={styles['hero-data']}>
            <h1 className={styles['hero-title']}>
              Hi, I am Rulo, <br /> Web Developer
            </h1>

            <p>
              Creating the next web generation. I want to make sure that the
              internet is a safe, satisfying and secure place for everyone.
            </p>

            {/* cambiar boton cuando se descarga que el boton cambie a about me */}
            <div className={styles['hero-action']}>
              {/* <a href="andres_santana_CV_compressed.pdf" download> */}
              <Button>About me</Button>
              {/* </a> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
