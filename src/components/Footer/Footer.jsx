import React from "react";
import s from "./Footer.css"
import tazahome from "../../assets/img/tazahome.png"

const Footer = () => {
   return(
      <>
         <div className="footer">
            <div className="footer__body">
               <img src={tazahome} alt="" className="footer__logo" />
               <div className="footer__title">
                  TazaHome 2022
               </div>
               <div className="footer__text">
                  © Все права защищены
               </div>
            </div>
         </div>
      </>
   )
}

export default Footer