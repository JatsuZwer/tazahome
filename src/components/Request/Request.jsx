import React from "react";
import s from "./Request.css"
import ellipse6 from "../../assets/img/Ellipse6.png"
import request from "../../assets/img/Request.png"
import ellipse11 from "../../assets/img/Ellipse11.png"
import ellipse1 from "../../assets/img/Ellipse1.png"
import ellipse3 from "../../assets/img/Ellipse3.png"


const Request = () =>{
   return(
      <div className="container">
         <div className="request">
            <div className="request__body">
               <div className="request__title">
                  Обратный звонок
               </div>
               <div className="request__text">
                  Оставьте вашу заявку и мы с вами свяжемся за короткое время
               </div>
               <form action="">
                  <input type="text" placeholder="Ваше имя" className="item-request__name"/>
                  <input type="text" placeholder="Ваш номер" className="item-request__number"/>
                  <textarea type="text" placeholder="Ваше сообщение"  className="item-request__message"/>
                  <button className="request__button">Отправить</button>
               </form>
               <img src={request} alt="" className="request__image" />
               <img src={ellipse11} alt="" className="request__back" />
               <img src={ellipse6} alt="" className="request__ellipse6" />
               <img src={ellipse1} alt="" className="request__ellipse1" />
               <img src={ellipse3} alt="" className="request__ellipse3" />
            </div>
         </div>
      </div>
   )
}

export default Request