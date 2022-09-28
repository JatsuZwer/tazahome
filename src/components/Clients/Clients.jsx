import React from "react";
import s from "./Clients.css"
import clients from "../../assets/img/Clients.png"
import ellipse4 from "../../assets/img/Ellipse4.png"
import ellipse5 from "../../assets/img/Ellipse5.png"
import ellipse6 from "../../assets/img/Ellipse1.png"
import ellipse3 from "../../assets/img/Ellipse3.png"

const Clients = () => {
   return(
      <div className="container">
         <div className="clients">
            <div className="clients__body">
               <div className="clients__title">
                  1233
               </div>
               <div className="clients__text">
                  Довольных клиентов и чистых домов
               </div>
               <img className="clients__image" src={clients} alt="" />
               <img className="clients__ellipse1" src={ellipse4} alt="" />
               <img className="clients__ellipse2" src={ellipse5} alt="" />
               <img className="clients__ellipse3" src={ellipse6} alt="" />
               <img className="clients__ellipse4" src={ellipse6} alt="" />
               <img className="clients__ellipse5" src={ellipse3} alt="" />
               <img className="clients__ellipse6" src={ellipse3} alt="" />
            </div>    
         </div>  
      </div>
   )
}

export default Clients;