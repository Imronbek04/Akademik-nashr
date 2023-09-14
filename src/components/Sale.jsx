import React from "react";
import Salebook from "../img/sale.png"

export default function Sale() {
  return (
    <div>
      <div className="action">
        <div className="container action__container">
          <div className="action__text-box">
            <h2 className="action__title">
              Bolalar kitoblari uchun ajoyib aksiya!
            </h2>

            <p className="action__text">
              Ertaklar, she’rlar, sarguzasht asarlar, fikrlashni o’stirish uchun
              turli mashq qo’llanmalari va komikslar.
            </p>

            <p className="action__text">
              Aksiyadagi eng katta to’plamda <strong>50 ta kitob</strong>ni{" "}
              <strong>350 ming</strong> so’mga (aslida 383 ming so’m) sotib
              olishingiz mumkin.
            </p>

            <a href="#" className="btn action__btn">
              Buyurtma berish
            </a>
          </div>

          <div className="action__img-box">
            <img
              src={Salebook}
              alt="Bolalar kitoblari uchun ajoyib aksiya!"
              className="action__img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
