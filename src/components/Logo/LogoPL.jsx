import s from './Logo.module.scss';
import './logo.scss';

const LogoPL = () => {
  return (
    <div className={s.LogoBox}>
      <div className={s.Logo}>
        <h1 className="logo_name logo_name_pl">Tatiana Prytaka</h1>
        <h2 className={s.Logo_about}>Fotografia</h2>
      </div>
    </div>
  );
};

export default LogoPL;
