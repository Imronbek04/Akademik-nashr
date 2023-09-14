import React from "react";
import Img1 from "../img/img1.svg";
import Img2 from "../img/img2.svg";
import Img3 from "../img/img3.svg";

export default function About() {
  let arr = [
    {
      id: 1,
      img: Img1,
      title: "Oson buyurtma qilish",
      text: `Akademnashr.uz saytidan o’zingizga yoqqan kitobni sodda usulda
      buyurtma qila olasiz.`,
    },
    {
      id: 2,
      img: Img2,
      title: "Eng sara kitoblar",
      text: `Trenddagi eng ommabop, turli auditoriyalarga mo’ljallangan har
      xil janrdagi kitoblarni topa olasiz.`,
    },
    {
      id: 3,
      img: Img3,
      title: "Tez yetkazib berish",
      text: `O’zbekistonning ixtiyoriy hududiga 3 ish kuni ichida, xalqaro
      buyurtmalarni 10 ish kuni ichida yetkazib beriladi.`,
    },
  ];
  return (
    <div>
      <div className="books">
        <div className="container books__container">
          <span className="line books__line"></span>

          <h2 className="books__title">Nega aynan Akademnashr?</h2>

          <div className="card__wrap">
            {arr.map((item) => {
              return (
                <div key={item.id}>
                  <div className="card">
                    <div className="card__img-box">
                      <img src={item.img} alt="Oson buyurtma qilish" className="card__img"/>
                    </div>

                    <div className="card__text-box">
                      <h3 className="card__title">{item.title}</h3>

                      <p className="card__text">{item.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
