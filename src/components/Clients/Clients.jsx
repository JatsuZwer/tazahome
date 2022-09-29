import React from "react";
import s from "./Clients.css";
import clientsImg from "../../assets/img/Clients.png";
import clientsBg from "../../assets/img/Clients_bg.png";
import styled from "styled-components";

const Clients = () => {
  return (
    <Wrapper>
      <div className="clients__bg">
        <img src={clientsBg} />
      </div>
      <div className="clients_inner">
        <h1 className="title title_mobile">1233</h1>
        <div className="clients__image">
          <img src={clientsImg} />
        </div>
        <div className="clients_header">
          <h1 className="title title_desctop">1233</h1>
          <p className="clients__text">
            Довольных клиентов <br /> и чистых домов
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Clients;

const Wrapper = styled.div`
  position: relative;
  margin-top: 100px;
  .clients_inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
  }

  .clients_header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
      order: 2;
    }
  }
  .title {
    font-family: "Sensei";
    font-style: normal;
    font-weight: 400;
    font-size: 80px;
    line-height: 96px;
    color: #0084c0;
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
      margin-top: 70px;
      font-weight: 400;
      font-size: 33.4459px;
      line-height: 40px;
      text-align: center;
      order: 2;
    }
  }

  .clients__bg {
      position: absolute;
      right: 0;
      padding: 0px 0px 58% 0px;
	   overflow: hidden;
    @media (max-width: 758px) {
      width: 30%;
      margin-top: 400px;
    }
  }
  .clients__bg img{
      width: 100%;
	   height: 100%;
	   object-fit: cover;
  }
  .clients__title {
    font-family: "Sensei";
    font-style: normal;
    font-weight: 400;
    font-size: 80px;
    line-height: 96px;
    color: #0084c0;
  }
  .clients__text {
    margin-top: 40px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    color: #4f4f4f;
    @media (max-width: 768px) {
      display: block;
      font-weight: 600;
      font-size: 18px;
      line-height: 21px;
    }
  }
  .clients__image {
    img {
      width: 80%;
    }
    @media (max-width: 768px) {
      order: 1;
    }
  }
`;
