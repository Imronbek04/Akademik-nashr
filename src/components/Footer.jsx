import React from "react";
import Img from "../img/favicon.svg"


export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container footer__container">
          <div className="footer-top">
            <a href="./index.html" className="footer__logo">
              <img
                className="footer__img"
                src={Img}
                alt="Akademnashr"
              />

              <h2 className="footer__title">
                Akadem<span>nashr</span>
              </h2>
            </a>

            <div className="footer__icons">
              <a href="https://t.me/Webdasturchi_2223" className="icon__link">
                <i className="fab fa-telegram"></i>
              </a>

              <a href="#" className="icon__link">
                <i className="fab fa-facebook"></i>
              </a>

              <a href="#" className="icon__link">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <span className="footer__line"></span>

          <ul className="footer__lists">
            <li className="footer__items">
              <ul className="footer__list">
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Bosh sahifa
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Kitoblar
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Aksiyalar
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Yangiliklar
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Kontaktlar
                  </a>
                </li>
              </ul>
            </li>

            <li className="footer__items">
              <ul className="footer__list">
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Ilmiy nashrlar
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Ilmiy-ommabop nashrlar
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Ma’rifiy nashrlar
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Lug’atlar
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Adabiy-badiiy nashrlar
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Abituriyentlar uchun
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Bolalar uchun
                  </a>
                </li>
              </ul>
            </li>

            <li className="footer__items">
              <ul className="footer__list">
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Ko’p so’raladigan savollar
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Yetkazib berish haqida
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    To’lov usullari haqida
                  </a>
                </li>
              </ul>
            </li>

            <li className="footer__items">
              <ul className="footer__list">
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Bo’sh ish o’rinlari
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Biz bilan bog’lanish
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Maxfiylik nizomi
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
