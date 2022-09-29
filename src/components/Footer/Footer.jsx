import React from "react";
import s from "./Footer.css";
import tazahome from "../../assets/img/tazahome.png";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer">
        <div className="footer__inner">
          <div className="footer__header">
            <div className="footer__logo">
              <img src={tazahome} alt="" />
            </div>
            <div className="footer__title">TazaHome 2022</div>
          </div>
          <div className="footer__text">© Все права защищены</div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  position: relative;
  margin-top: 125px;
  .footer__inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    height: 83px;
    background: #203e86;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      order: 1;
      height: 40px;
    }
  }

  .footer__header {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .footer__logo {
    position: absolute;
    left: 40px;
    top: 25px;
    width: 26.92px;
    height: 32.63px;
    @media (max-width: 768px) {
      display: none;
    }
  }
  .footer__title {
    left: 800px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    text-align: left;
    margin: 0px 0px 0px 80px;
    color: #ffffff;
    @media (max-width: 768px) {
      order: 2;
      text-align: center;
      font-size: 10px;
    line-height: 6px;
    }
  }
  .footer__text {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
    white-space: nowrap;
    text-align: right;
    margin: 0px 65px 0px 0px;
    @media (max-width: 768px) {
      text-align: center;
      margin: 10px 0px 0px 80px;
      font-size: 10px;
      line-height: 6px;
      order: 2;
    }
  }
`;
