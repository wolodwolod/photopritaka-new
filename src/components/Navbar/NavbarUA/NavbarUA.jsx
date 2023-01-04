// import { NavLink } from 'react-router-dom';

import '../navbar.scss';
// import styles from "./navbar.module.scss";

import camera from '../../../shared/icons/camera2.svg';
import iconsUKR from '../../../shared/icons/icons-UKR.png';
import iconsGB from '../../../shared/icons/icons-GB.png';
import iconsFR from '../../../shared/icons/icons-FR.png';

// const getActiveClass = ({ isActive }) => (isActive ? styles.linkActive : styles.link);

const NavbarUA = () => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-lg nav">
            <div className="container-fluid bold">
              <a className="navbar-brand logo" href="/">
                <img
                  src={camera}
                  alt="Logo"
                  width="38"
                  height="24"
                  className="d-inline-block align-text-top"
                />
                PRITAKA&nbsp;<span className="yello">PHOTO</span>
              </a>

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
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav nav text-uppercase">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">
                    {/* <NavLink to="/" className={getActiveClass}> */}
                      Головна
                    {/* </NavLink> */}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link text-uppercase"
                      href="/ua/photographer"
                    >
                      {/* <NavLink to="/ua/photographer" className={getActiveClass}> */}
                         Фотограф
                      {/* </NavLink> */}
                     
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/ua/contacts">
                    {/* <NavLink to="/ua/contacts" className={getActiveClass}> */}
                      Контакти
                    {/* </NavLink> */}
                      
                    </a>
                  </li>
                  <li className="nav-item mr-50 dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Фотосесії
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="/ua/family">
                          Сімейне фото
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/ua/romantic">
                          Романтичне фото
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/ua/newborns">
                          Новонароджені
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/ua/events">
                          Події
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <div className="dropdown">
                      <a
                        className="dropdown-toggle"
                        href="/"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img
                          src={iconsUKR}
                          alt="Logo"
                          width="35"
                          height="30"
                          className="d-inline-block align-text-top"
                        />
                      </a>

                      <ul className="dropdown-menu fs-14">
                        <li>
                          <a className="dropdown-item" href="/">
                            <img
                              src={iconsGB}
                              alt="Logo"
                              width="35"
                              height="30"
                              className="d-inline-block align-text-center"
                            />
                            &nbsp;&nbsp;English
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            <img
                              src={iconsFR}
                              alt="Logo"
                              width="35"
                              height="30"
                              className="d-inline-block align-text-center"
                            />
                            &nbsp;&nbsp;Français
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
