import s from './Logo.module.scss';

const Logo = () => {
  return (
    <div className={s.Logo}>
      <p className={s.Logo_name}>Тетяна Притака</p>
      <p className={s.Logo_about}>Фотографія</p>
    </div>
  );
};

export default Logo;
