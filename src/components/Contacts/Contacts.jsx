import React from "react";
import s from "./Contacts.css";
import inst from "../../assets/img/inst.png";
import facebook from "../../assets/img/facebook.png";
import watts from "../../assets/img/whatsapp.png";
import contactsBg from "../../assets/img/contacts_bg.png";
import styled from "styled-components";

const Contacts = () => {
  return (
    <Wrapper id="contacts">
      <div className="contacts__bg">
        <img src={contactsBg} alt="" />
      </div>
      <div className="contacts__body">
        <div className="contacts__title">Связаться с нами</div>
        <div className="contacts__row">
          <div className="contacts__column">
            <div className="item-contacts">
              <div className="item-contacts__body">
                <div className="item-contacts__icon">
                  <a href="http://www.instagram.com">
                    <img src={inst} alt="" style={{ width: "60px" }} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="contacts__column">
            <div className="item-contacts">
              <div className="item-contacts__body">
                <div className="item-contacts__icon">
                  <a href="http://www.facebook.com/">
                    <img src={facebook} alt="" style={{ width: "60px" }} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="contacts__column">
            <div className="item-contacts">
              <div className="item-contacts__body">
                <div className="item-contacts__icon">
                  <a href="http://www.whatsapp.ru">
                    <img src={watts} alt="" style={{ width: "60px" }} />
                  </a>
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
    </Wrapper>
  );
};

export default Contacts;

const Wrapper = styled.div`
  position: relative;
  @media (max-width: 768px) {
   margin-top: 45px;
  }
  .contacts__title {
    position: relative;
    text-align: center;
    font-family: "Sensei";
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 58px;
    color: #203e86;
    @media (max-width: 768px) {
      font-size: 24px;
      line-height: 29px;
    }
  }
  .contacts__row {
    display: flex;
    justify-content:center;
    margin: 0px -15px;
  }
  .contacts__column {
    padding: 0px 15px;
  }
  .item-contacts__icon {
   margin:50px 30px;
  }
  .contacts__number {
    text-align: center;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
    @media (max-width: 768px){
      font-size: 18px;
      line-height: 150.5%;
    }
  }
  .contacts__bg {
    position: absolute;
    right: 0;
    top: -300px;
    z-index:-1;
    img {
      width: 700px;
      height: 100%;  
  }
}
`;
