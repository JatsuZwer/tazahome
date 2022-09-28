import React from "react";
import s from "./MainBlock.css"
import rabotnik from "../../assets/img/rabotnik.png"
import musor from "../../assets/img/musor.png"
import vector1 from "../../assets/img/Vector1.png"
import vector2 from "../../assets/img/Vector2.png"
import vector3 from "../../assets/img/Vector3.png"
import ellipse1 from "../../assets/img/Ellipse1.png"
import ellipse2 from "../../assets/img/Ellipse2.png"
import ellipse3 from "../../assets/img/Ellipse3.png"

const MainBlock = () => {
   return(
      <div className="container">
         <div className="purity">
            <div className="purity__body">
               <div className="purity__title">
                  Мы за чистый дом
               </div>
               <div className="purity__text">
                  Вывоз мусора прямо с ваших дверей <br /> за <span className="purity__blue"> 3 сома </span>  каждый день  
               </div>
               <img className="purity__image" src={rabotnik} alt="" />
               <img className="purity__musor" src={musor} alt="" />
               <div className="mainfigure">
                  <img className="mainfigure__one" src={vector1} alt=""/>
                  <img className="mainfigure__two" src={vector2} alt=""/>
                  <img className="mainfigure__three" src={vector3} alt=""/>
                  <img className="mainfigure__four" src={ellipse1} alt=""/>
                  <img className="mainfigure__five" src={ellipse2} alt=""/>
                  <img className="mainfigure__six" src={ellipse3} alt=""/>
               </div>
            </div>
         </div>
      </div>
   )
}

export default MainBlock;