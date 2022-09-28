import React from "react";
import s from "./Contacts.css"
import ellipse1 from "../../assets/img/Ellipse1.png"
import ellipse3 from "../../assets/img/Ellipse3.png"
import ellipse5 from "../../assets/img/Ellipse5.png"
import inst from "../../assets/img/inst.png"
import facebook from "../../assets/img/facebook.png"
import watts from "../../assets/img/whatsapp.png"

const Contacts = () => {
   return(
      <>
         <div className="contacts">
            <div className="contacts__body">
               <div className="contacts__title">
                  Связаться с нами
               </div>
               <div className="contacts__row">
                  <div className="contacts__column">
                     <div className="item-contacts">
                        <div className="item-contacts__body">
                           <div className="item-contacts__icon">
                              <a href="instagram.com"> <img src={inst} alt="" style={{width: "60px"}}/></a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="contacts__column">
                     <div className="item-contacts">
                        <div className="item-contacts__body">
                           <div className="item-contacts__icon">
                              <a href="https://www.instagram.com/"> <img src={facebook} alt="" style={{width: "60px"}}/></a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="contacts__column">
                     <div className="item-contacts">
                        <div className="item-contacts__body">
                           <div className="item-contacts__icon">
                              <a href="instagram.com"> <img src={watts} alt="" style={{width: "60px"}}/></a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="contacts__number">
                  +996 555 555 555 <br /> <br />
                  +996 555 555 555
               </div>
            </div>
               <img src={ellipse5} alt="" className="contacts__ellipse5" />
               <img src={ellipse1} alt="" className="contacts__ellipse1" />
               <img src={ellipse3} alt="" className="contacts__ellipse3" />
               <img src={ellipse3} alt="" className="contacts__ellipse4" />
               <img src={ellipse1} alt="" className="contacts__ellipse6" />
         </div>
      </>
   )
}

export default Contacts