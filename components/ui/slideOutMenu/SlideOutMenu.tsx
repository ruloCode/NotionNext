import classNames from 'classnames';
import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import useOutsideClick from '../../../utils/hooks/useOutsideClick'
// import useOutsideClick from '../../../utils/hooks/useOutsideClick';
import { Navigator } from '../navigator/Navigator';
// import useOutsideClick from 'utils/hooks/useOutsideClick';
// import { sleep } from 'utils/sleep';
// import { ButtonIcon } from '../buttonIcon/ButtonIcon';
import styles from './slideOutMenu.module.scss';



export const SlideOutMenu = (props) => {
  const {
    title,
    icon = 'fas fa-times',
    position = 'right',
    children,
    width,
    isOpen,
    hiding,
    setHiding,
    onClick = () => {},
    handleClose = () => {},
    attributes,
  } = props;


  const size = {
    width,
  };


  const ref = useRef(null);

  useOutsideClick(
    ref,
    () => {
      if (isOpen) handleClose();
    },
    
  );

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div
      className={classNames(styles['slideOutMenu-container'], {
        [styles['slideOutMenu-container--open']]: isOpen,
        [styles[`slideOutMenu-container--${position}`]]: true,
      })}
    >
      <div
        className={classNames(styles['slideOutMenu-box'], {
          [styles[`slideOutMenu-box--${position}Animated`]]: true,
          [styles[`slideOutMenu-box--${position}Close`]]: hiding,
        })}
        style={size}
        ref={ref}
      >
       <Navigator />
      </div>
    </div>,
    document.getElementById('slide-root'),
  );
};

export default SlideOutMenu;
