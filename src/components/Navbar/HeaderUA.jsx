import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.scss';
import styles from './navbar.module.scss';

import IconUA from '../Icon/IconUA';
import IconFR from '../Icon/IconFR';
import IconPL from '../Icon/IconPL';
import IconEN from '../Icon/IconEN';

// import camera from '../../shared/icons/camera2.svg';
import LogoUA from 'components/Logo/LogoUA';

// import classNames from 'classnames';

const getActiveClass = ({ isActive }) =>
  isActive ? styles.linkActive : styles.link;

const HeaderUA = () => {
  const [portfolioActiv, setPortfolioActiv] = useState({
    isActive: false,
  });

  const getPortfolioActive = () =>
    portfolioActiv.isActive ? styles.linkActive : styles.link;

  const removeActive = () => {
    setPortfolioActiv({ isActive: false });
  };
  const addActive = () => {
    setPortfolioActiv({ isActive: true });
  };

  return (
    <header>
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-lg nav">
            <div className="container-fluid  bold">
              <div className="navbar-brand logo">
                <NavLink to="/" className={styles.link} onClick={removeActive}>
                  <LogoUA />
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
                    <NavLink
                      to="/"
                      className={getActiveClass}
                      onClick={removeActive}
                    >
                      Головна
                    </NavLink>
                  </li>
                  <li className="nav-item dropdown">
                    <div
                      // id="portfolio"

                      className="nav-link dropdown-toggle"
                      // className={classNames("link","nav-link", "dropdown-toggle")}
                      href="/"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <NavLink to="" className={getPortfolioActive}>
                        Портфоліо
                      </NavLink>
                    </div>
                    <ul className="dropdown-menu ps-2 pe-2 portfolio-menu">
                      <li className="dropdown-item child">
                        <NavLink
                          to="/ua/portrait"
                          className={getActiveClass}
                          onClick={addActive}
                        >
                          Портрет
                        </NavLink>
                      </li>
                      <li className="dropdown-item child">
                        <NavLink
                          to="/ua/family"
                          className={getActiveClass}
                          onClick={addActive}
                        >
                          Сімейне фото
                        </NavLink>
                      </li>
                      <li className="dropdown-item child">
                        <NavLink
                          to="/ua/romantic"
                          className={getActiveClass}
                          onClick={addActive}
                        >
                          Романтичне фото
                        </NavLink>
                      </li>

                      <li className="dropdown-item child">
                        <NavLink
                          to="/ua/newborns"
                          className={getActiveClass}
                          onClick={addActive}
                        >
                          Новонароджені
                        </NavLink>
                      </li>
                      <li className="dropdown-item child">
                        <NavLink
                          to="/ua/events"
                          className={getActiveClass}
                          onClick={addActive}
                        >
                          Події
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item nav-link">
                    <NavLink
                      to="/ua/contacts"
                      className={getActiveClass}
                      onClick={removeActive}
                    >
                      Контакти
                    </NavLink>
                  </li>

                  <li className="nav-item nav-link me-50">
                    <NavLink
                      to="/ua/photographer"
                      className={getActiveClass}
                      onClick={removeActive}
                    >
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

                      <ul className="dropdown-menu fs-14 lang-menu">
                        <li>
                          <a className="dropdown-item" href="/">
                            <IconPL />
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            <IconFR />
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

export default HeaderUA;
