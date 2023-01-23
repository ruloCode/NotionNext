import React, { useState } from 'react';
import Link from 'next/link';

// import classnames from 'classnames';
// import { getClasses } from '../../utils/classesFormater';

import styles from './mainHeader.module.scss';
import { HamburgerButton } from '../ui/hamburgerButton/HamburgerButton';
import { SlideOutMenu } from '../ui/slideOutMenu/SlideOutMenu.tsx';
import sleep from '../../utils/sleep';
import { Navbar } from '../navbar/Navbar';

export const MainHeader = () => {
  const [openHamburger, setOpenHamburger] = useState(false);
  const [hiding, setHiding] = useState(false);
  const handleClose = async () => {
    if (openHamburger) {
      setHiding(true);
      await sleep(200);
      setOpenHamburger(!openHamburger);
      setHiding(false);
    }

    setOpenHamburger(!openHamburger);
    setHiding(false);
  };
  return (
    <header className={styles.headerContainer}>
      <div className={styles.navContainer}>


      <Link href={`/`}>

              <a className={styles.logo} >
          Rulo
          <span>Code</span>
              </a>
            </Link>
      

        <Navbar />
       
        <HamburgerButton handleClick={handleClose} isOpen={openHamburger} />

        <SlideOutMenu
          title="Filtros"
          position="right"
          isOpen={openHamburger}
          width={305}
          attributes={{
            ariaLabel: 'Cerrar carrito',
            title: 'Cerrar carrito',
          }}
          hiding={hiding}
          handleClose={handleClose}
        /> 
      </div>
    </header>
  );
};
