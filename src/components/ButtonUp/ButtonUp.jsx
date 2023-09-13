import { useState } from 'react';

import { HandySvg } from 'handy-svg';

import arrowUp from 'shared/icons/up-arr.svg';

import styles from './btnUp.module.scss';

const title = {
  ukr: 'На початок',
  pol: 'W górę',
};

const ButtonUp = ({ lang }) => {
  const [btnUpShow, setBtnUpShow] = useState({
    isShow: false,
  });

  const getClassNameBtnUp = () =>
    btnUpShow.isShow ? styles.btnUp : styles.btnUp_hide;

  const show = () => {
    setBtnUpShow({ isShow: true });
  };
  const hide = () => {
    setBtnUpShow({ isShow: false });
  };

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    scrollY > 400 ? show() : hide();
  });

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={goToTop}
      className={getClassNameBtnUp()}
      title={title[lang]}
    >
      <HandySvg
        className={styles.arrowUp}
        src={arrowUp}
        width="35"
        height="35"
      />
    </button>
  );
};

export default ButtonUp;
