import React from "react";
import best from "../../assets/img/best-price.png"
import figure1 from "../../assets/img/Figure1.png"
import clean from "../../assets/img/clean-house.png"
import figure2 from "../../assets/img/Figure2.png"
import save from "../../assets/img/save-time.png"
import figure3 from "../../assets/img/Figure3.png"
import s from "./Service.css"

const Service = () => {
   return(
      <div className="container">
         <div className="service">
            <div className="service__body">
               <div className="service__title">
                  Преимущества нашей услуги
               </div>
               <div className="service__row">
                  <div className="service__column">
                     <div className="item-service">
                        <div className="item-service__body">
                           <div className="item-service__icon">
                              <img src={best} alt="" />
                           </div>
                           <div className="item-service__figure">
                              <img  src={figure1} alt="" />
                           </div>
                           <div className="item-service__text">
                              Выгодная цена
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="service__column">
                     <div className="item-service">
                        <div className="item-service__body">
                           <div className="item-service__icon">
                              <img src={clean} alt="" />
                           </div>
                           <div className="item-service__figure">
                              <img  src={figure2} alt="" />
                           </div>
                           <div className="item-service__text">
                              Чистота в доме
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="service__column">
                     <div className="item-service">
                        <div className="item-service__body">
                           <div className="item-service__icon">
                              <img src={save} alt="" />
                           </div>
                           <div className="item-service__figure">
                              <img  src={figure3} alt="" />
                           </div>
                           <div className="item-service__text">
                              Экономия времени
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Service;