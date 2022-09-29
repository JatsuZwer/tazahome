import React from "react";
import s from "./MainBlock.css";
import styled from "styled-components";
import Bg from "../../assets/img/main-bg.png";
import RightBg from "../../assets/img/main-bg-behind.png";
import LeftBg from "../../assets/img/main-bg-left.png";

const MainBlock = () => {
  return (
    <Wrapper>
      <div className="right_green_bg">
        <img src={RightBg} />
      </div>
      <div className="left_green_bg">
        <img src={LeftBg} />
      </div>

      <div className="main_inner ">
        <h1 className="title title_mobile">
          Мы за чистый <br /> дом
        </h1>
        <div className="main_header">
          <h1 className="title title_desctop">
            Мы за чистый <br /> дом
          </h1>
          <p className="purity__text">
            Вывоз мусора прямо с ваших дверей <br /> за
            <span className="purity__blue"> 3 сома </span> каждый день
          </p>
        </div>
        <div className="main_bg">
          <img src={Bg} />
        </div>
      </div>
      <div className="button button__mobile">
        <button>Оставьте заявку</button>
      </div>
    </Wrapper>
  );
};

export default MainBlock;

const Wrapper = styled.div`
  margin-top: 150px;
  position: relative;
  .button{
    display: none;
  }
  .button__mobile{
    @media (max-width: 768px) {
      display: block;
      margin-top: 55px;
      margin-left: 69px;

    }
    button {
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff;
    background: #203e86;
    border-radius: 20px;
    padding: 10px 37px;
  }
  }
  .right_green_bg {
    position: absolute;
    right: 0;
    top: -150px;
    z-index: -1;
    padding: 0px 0px 58% 0px;
	  overflow: hidden;
    @media (max-width: 758px) {
      width: 80%;
    }
  }
  .right_green_bg img{
    width: 100%;
	  height: 100%;
	  object-fit: cover;
  }
  .left_green_bg {
    position: absolute;
    left: 0;
    top: -150px;
    z-index: -1;
    @media (max-width: 758px) {
      width: 120.13px;
      height: 128px;
    }
  }

  .main_inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
  }

  .main_header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
      order: 2;
    }
  }
  .title {
    font-weight: 400;
    font-size: 96px;
    line-height: 115px;
    text-align: center;
    color: #96c22b;
    font-family: "Sensei";
    font-style: normal;
    margin-bottom: 66px;
  }
  .title_desctop {
    @media (max-width: 758px) {
      display: none;
    }
  }

  .title_mobile {
    display: none;
    @media (max-width: 768px) {
      display: block;
      font-weight: 400;
      font-size: 33.4459px;
      line-height: 40px;
      text-align: center;
    }
  }
  .main_bg {
    img {
      width: 80%;
    }
    @media (max-width: 768px) {
      order: 1;
    }
  }
  .purity__text{
   font-family: 'Roboto';
   font-style: normal;
   font-weight: 600;
   font-size: 24px;
   line-height: 28px;
   text-align: center;
   color: #4F4F4F;
   @media (max-width: 768px) {
      display: block;
      margin-top: 50px;
      font-size: 18px;
      line-height: 21px;
      text-align: center;
    }

}

.purity__blue{
   width: 143px;
   height: 58px;
   padding: 2px;
   margin: 2px 14px;
   font-family: 'Sensei';
   font-style: normal;
   font-weight: 400;
   font-size: 48px;
   line-height: 58px;
   color: #0084C0;
   @media (max-width: 768px) {
      font-size: 35px;
      line-height: 42px;
    }
}
`;