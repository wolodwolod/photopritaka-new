import s from './Logo.module.scss';

const Logo = () => {
  return (
    <div className={s.Logo}>
      <p className={s.Logo_name}>Тетяна Притака</p>
      <p className={s.Logo_about}>Фотограф</p>
    </div>
  );
};

export default Logo;
