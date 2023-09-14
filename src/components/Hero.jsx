import React from "react";
import Book from "../img/book.png"

export default function Hero() {
  return (
    <div>
      <div className="hero" id="home">
        <div className="container hero__container">
          <div className="hero__text-box">
            <span className="line hero__line"></span>

            <h2 className="hero__title">Pythonda dasturlash asoslari</h2>

            <p className="hero__text">
              Dasturlash asoslariga oid o‘zbek tilidagi ilk eng mukammal
              qo‘llanma. Kitobning har bir bo‘limi uchun maxsus video darslar
              yozilgan bo‘lib, ularga kitobda ko‘rsatilgan QR kod orqali o‘tish
              mumkin.
            </p>

            <a href="#" className="btn">
              Buyurtma berish
            </a>
          </div>

          <div className="hero__img-box">
            <img
              className="hero__img"
              src={Book}
              alt="Python Book"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
