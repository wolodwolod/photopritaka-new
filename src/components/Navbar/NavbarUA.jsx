import { NavLink } from 'react-router-dom';

import './navbar.scss';
import styles from './navbar.module.scss';
import IconUA from '../Icon/IconUA';
import IconFR from '../Icon/IconFR';
import IconPL from '../Icon/IconPL';
import IconEN from '../Icon/IconEN';

import camera from '../../shared/icons/camera2.svg';

const getActiveClass = ({ isActive }) =>
  isActive ? styles.linkActive : styles.link;

const NavbarUA = () => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-lg nav">
            <div className="container-fluid  bold">
              <div className="navbar-brand logo">
                <NavLink to="/" className={getActiveClass}>
                  <img
                    src={camera}
                    alt="Logo"
                    width="38"
                    height="24"
                    className="d-inline-block align-text-top"
                  />
                  PRITAKA&nbsp;<span className="yello">PHOTO</span>
                </NavLink>
              </div>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse menu-wrapper"
                id="navbarNavDropdown"
              >
                <ul className="navbar-nav nav">
                  <li className="nav-item nav-link">
                    <NavLink to="/" className={getActiveClass}>
                      Головна
                    </NavLink>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Портфоліо
                    </a>
                    <ul className="dropdown-menu">
                      <li className="dropdown-item">
                        <NavLink to="/ua/portrait" className={getActiveClass}>
                          Портрет
                        </NavLink>
                      </li>
                      <li className="dropdown-item">
                        <NavLink to="/ua/family" className={getActiveClass}>
                          Сімейне фото
                        </NavLink>
                      </li>
                      <li className="dropdown-item">
                        <NavLink to="/ua/romantic" className={getActiveClass}>
                          Романтичне фото
                        </NavLink>
                      </li>

                      <li className="dropdown-item">
                        <NavLink to="/ua/newborns" className={getActiveClass}>
                          Новонароджені
                        </NavLink>
                      </li>
                      <li className="dropdown-item">
                        <NavLink to="/ua/events" className={getActiveClass}>
                          Події
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item nav-link">
                    <NavLink to="/ua/contacts" className={getActiveClass}>
                      Контакти
                    </NavLink>
                  </li>

                  <li className="nav-item nav-link me-50">
                    <NavLink to="/ua/photographer" className={getActiveClass}>
                      Відгуки
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <div className="dropdown lng">
                      <a
                        className="dropdown-toggle lang"
                        href="/"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <IconUA />
                      </a>

                      <ul className="dropdown-menu fs-14">
                        <li>
                          <a className="dropdown-item" href="/">
                            <IconFR />
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            <IconPL />
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            <IconEN />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavbarUA;
