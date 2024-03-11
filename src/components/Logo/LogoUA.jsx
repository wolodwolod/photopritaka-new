import s from './Logo.module.scss';
import './logo.scss';

const LogoUA = () => {
  return (
    <div className={s.LogoBox}>
      <div className={s.Logo}>
        <h1 className="logo_name logo_name_ua">Тетяна Притака</h1>
        <h2 className={s.Logo_about}>Фотографія</h2>
      </div>
    </div>
  );
};

export default LogoUA;
