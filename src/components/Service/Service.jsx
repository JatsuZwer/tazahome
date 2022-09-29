import React from "react";
import styled from "styled-components";
import best from "../../assets/img/best-price.png";
import clean from "../../assets/img/clean-house.png";
import save from "../../assets/img/save-time.png";
import s from "./Service.css";

const serviceData = [
  {
    img: best,
    text: "Выгодная цена",
  },
  {
    img: clean,
    text: "Чистота в доме",
  },
  {
    img: save,
    text: "Экономия времени",
  },
];

const Service = () => {
  return (
    <Wrapper id="service">
      <h1 className="title">Преимущества нашей услуги</h1>
      <div className="services">
        {serviceData.map((item, index) => {
          return (
            <div key={index} className="services_item">
              <div className="services_img">
                <img src={item.img} />
              </div>
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Service;

const Wrapper = styled.div`
  padding: 0 180px;
  @media (max-width: 768px) {
      padding: 0px 10px;
  }
  .title {
    font-family: "Sensei";
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 58px;
    color: #203e86;
    margin-bottom: 50px;
    text-align: center;
    @media (max-width:768px) {
      display: block;
      margin-top: 100px;
      font-weight: 400;
      font-size: 24px;
      line-height: 29px;
      text-align: center;
      white-space: nowrap;
    }
  }
  .services {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
  .services_img {
    height: 230px;
    width: 230px;
    margin-bottom: 35px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    @media (max-width: 768px) {
      margin-bottom: 45px;
    }
  }

  p {
   text-align: center;
   font-family: 'Roboto';
   font-style: normal;
   font-weight: 600;
   font-size: 24px;
   line-height: 28px;
   color: #4F4F4F;
   @media (max-width: 768px) {
      font-weight: 600;
      font-size: 17.1944px;
      line-height: 20px;
    }
  }
`;
