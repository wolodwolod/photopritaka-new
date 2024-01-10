import React, { useState } from 'react';
import { HandySvg } from 'handy-svg';
import { NavLink } from 'react-router-dom';

import './navbar.scss';
import styles from './navbar.module.scss';

import HomeIcon from 'shared/icons/home.svg';

import IconUA from '../Icon/IconUA';
import IconPL from '../Icon/IconPL';
// import IconFR from '../Icon/IconFR';
// import IconEN from '../Icon/IconEN';

// import camera from '../../shared/icons/camera2.svg';
import LogoPL from 'components/Logo/LogoPL';

// import classNames from 'classnames';

const getActiveClass = ({ isActive }) =>
  isActive ? styles.linkActive : styles.link;

const HeaderPL = () => {
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

  const addLangToLS = () => {
    localStorage.setItem('lang', 'ukr');
    // <Navigate to="/ua/home" replace />
  };

  return (
    <header>
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-lg nav">
            <div className="container-fluid  bold">
              <div className="navbar-brand logo">
                <NavLink
                  to="/"
                  className={styles.link}
                  onClick={removeActive}
                >
                  <LogoPL />
                </NavLink>
              </div>

              {/* <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button> */}

              <div
                className="collapse navbar-collapse menu-wrapper"
                id="navbarNavDropdown"
              >
                <ul className="navbar-nav nav">
                  <li className="nav-item nav-link icon-wrapper">
                    <NavLink
                      to="/"
                      className={getActiveClass}
                      onClick={removeActive}
                    >
                    <HandySvg
                        className="home-icon"
                        src={HomeIcon}
                        width="32"
                        height="32"
                      />

                      {/* Główna */}
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
                        Portfolio
                      </NavLink>
                    </div>
                    <ul className="dropdown-menu ps-2 pe-2 portfolio-menu">
                      <li className="dropdown-item child">
                        <NavLink
                          to="/pl/portrait"
                          className={getActiveClass}
                          onClick={addActive}
                        >
                          Portret
                        </NavLink>
                      </li>
                      <li className="dropdown-item child">
                        <NavLink
                          to="/pl/family"
                          className={getActiveClass}
                          onClick={addActive}
                        >
                          Zdjęcia rodzinne
                        </NavLink>
                      </li>
                      <li className="dropdown-item child">
                        <NavLink
                          to="/pl/romantic"
                          className={getActiveClass}
                          onClick={addActive}
                        >
                          Fotografia romantyczna
                        </NavLink>
                      </li>

                      <li className="dropdown-item child">
                        <NavLink
                          to="/pl/newborns"
                          className={getActiveClass}
                          onClick={addActive}
                        >
                          Fotografia noworodkowa
                        </NavLink>
                      </li>
                      <li className="dropdown-item child">
                        <NavLink
                          to="/pl/events"
                          className={getActiveClass}
                          onClick={addActive}
                        >
                          Wydarzenia
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item nav-link">
                    <NavLink
                      to="/pl/contacts"
                      className={getActiveClass}
                      onClick={removeActive}
                    >
                      Kontakt
                    </NavLink>
                  </li>

                  <li className="nav-item nav-link me-50">
                    <NavLink
                      to="/pl/feedbacks"
                      className={getActiveClass}
                      onClick={removeActive}
                    >
                      Opinie
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
                        <IconPL />
                      </a>

                      <ul className="dropdown-menu fs-14 lang-menu">
                        <li>
                          <a
                            className="dropdown-item"
                            href="/ua/home"
                            onClick={addLangToLS}
                          >
                            <IconUA />
                          </a>
                        </li>
                        {/* <li>
                          <a className="dropdown-item" href="/">
                            <IconFR />
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            <IconEN />
                          </a>
                        </li> */}
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

export default HeaderPL;
