// import { NavLink } from "react-router-dom";

// import s from "./navbar.module.scss"

import camera from '../../../shared/icons/camera2.svg';
import iconsUKR from '../../../shared/icons/icons-UKR.png';
import iconsGB from '../../../shared/icons/icons-GB.png';
import iconsFR from '../../../shared/icons/icons-FR.png';

// const getActiveClass = ({ isActive }) => isActive ? s.linkActive : s.link;

const Navbar = () => {
    return (

      <header>
        <div class="container">
          <div class="row">
            <nav class="navbar navbar-expand-lg nav">
              <div class="container-fluid bold">
                <a class="navbar-brand logo" href="/"
                ><img
                    src={camera}
                    alt="Logo"
                    width="38"
                    height="24"
                    class="d-inline-block align-text-top"
                  />PRITAKA&nbsp;<span class="yellow">PHOTO</span></a
                >

                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul class="navbar-nav nav text-uppercase">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        aria-current="page"
                        href="./index.html"
                      >Головна</a
                      >
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-uppercase" href="/"
                      >Фотограф</a
                      >
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/">Контакти</a>
                    </li>
                    <li class="nav-item mr-50 dropdown">
                      <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Фотосесії
                      </a>
                      <ul class="dropdown-menu">
                        <li>
                          <a class="dropdown-item" href="/"
                          >Сімейне фото</a
                          >
                        </li>
                        <li>
                          <a class="dropdown-item" href="/"
                          >Романтичне фото</a
                          >
                        </li>
                        <li>
                          <a class="dropdown-item" href="/"
                          >Новонароджені</a
                          >
                        </li>
                        <li>
                          <a class="dropdown-item" href="/">Події</a>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item">
                      <div class="dropdown">
                        <a
                          class="dropdown-toggle"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        ><img
                            src={iconsUKR}
                            alt="Logo"
                            width="35"
                            height="30"
                            class="d-inline-block align-text-top"
                          /></a>

                        <ul class="dropdown-menu fs-14">
                          <li>
                            <a class="dropdown-item" href="/"
                            ><img
                                src={iconsGB}
                                alt="Logo"
                                width="35"
                                height="30"
                                class="d-inline-block align-text-center"
                              />&nbsp;&nbsp;English</a
                            >
                          </li>
                          <li>
                            <a class="dropdown-item" href="/"
                            ><img
                                src={iconsFR}
                                alt="Logo"
                                width="35"
                                height="30"
                                class="d-inline-block align-text-center"
                              />&nbsp;&nbsp;Français</a
                            >
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

       
    )

}

export default Navbar;