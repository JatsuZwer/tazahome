import React from "react";
import s from "./AboutUs.css"
import trash from "../../assets/img/trash.png"
import homeWindow from "../../assets/img/window.png"

const AboutUs = () => {
   return(
      <div className="container">
         <p><a name="a"></a></p>
         <div className="about">
            <div className="about__body section">
               <div className="about__title">
                  О нас
               </div>
               <div className="about__text">
                  Quam non leo facilisi sed scelerisque malesuada mauris posuere vulputate. Proin eleifend eros, integer neque. Tortor porttitor netus in vulputate neque. Iaculis eu id faucibus at odio enim, malesuada. Etiam enim velit habitasse semper nisi, sollicitudin id. In duis nascetur consectetur cursus. Congue sed sagittis, justo, tempor risus. Donec sapien enim amet mattis eleifend. Fermentum est vestibulum morbi mattis vel turpis nisl sit mattis. In et aenean arcu eget pretium sit nunc iaculis.
               </div>
               <img src={trash} alt="" className="about__trash" />   
               <img src={homeWindow} alt="" className="about__window" />
            </div>
         </div>
      </div>
   )
}

export default AboutUs;