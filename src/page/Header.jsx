import React from "react";
import Img from "../img/favicon.svg"

export default function Header() {
  return (
    <div>
      <nav className="nav">
        <div className="nav__inner">
          <a href="./index.html" className="nav__logo">
            <img className="nav__img" src={Img} alt="Akademnashr" />
            <h2 className="logo__title">
              Akadem<span>nashr</span>
            </h2>
          </a>

          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active">
                Bosh sahifa
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Kitoblar
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Aksiyalar
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Kontaktlar
              </a>
            </li>
          </ul>

          <a href="#" className="btn nav__btn">
            Ro’yxatdan o’tish
          </a>

          <div className="menu">
            <div className="burger"></div>
          </div>
        </div>
      </nav>
    </div>
  );
}
