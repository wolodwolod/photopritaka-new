import { useState } from 'react';
import styles from './btnUp.module.scss';

const ButtonUp = () => {
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
      title="Go to top"
    ></button>
  );
};

export default ButtonUp;
