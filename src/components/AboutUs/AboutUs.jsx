import React from "react";
import s from "./AboutUs.css";
import trash from "../../assets/img/trash.png";
import homeWindow from "../../assets/img/window.png";
import styled from "styled-components";

const AboutUs = () => {
  return (
    <Wrapper id="about_us">
      <p>
        <a name="a"></a>
      </p>
      <div className="about">
        <div className="about__body section">
          <div className="about__title">О нас</div>
          <div className="about__text">
            Quam non leo facilisi sed scelerisque malesuada mauris posuere
            vulputate. Proin eleifend eros, integer neque. Tortor porttitor
            netus in vulputate neque. Iaculis eu id faucibus at odio enim,
            malesuada. Etiam enim velit habitasse semper nisi, sollicitudin id.
            In duis nascetur consectetur cursus. Congue sed sagittis, justo,
            tempor risus. Donec sapien enim amet mattis eleifend. Fermentum est
            vestibulum morbi mattis vel turpis nisl sit mattis. In et aenean
            arcu eget pretium sit nunc iaculis.
          </div>
          <img src={trash} alt="" className="about__trash" />
          <img src={homeWindow} alt="" className="about__window" />
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutUs;

const Wrapper = styled.div`
  margin-top: 230px;
  @media (max-width: 768px) {
    margin-top: 43px;
  }
  .about__body {
    position: relative;
    padding: 89px 330px 165px 292px;
    background: #0084c0;
    overflow: hiddens;
    @media (max-width: 768px) {
      padding: 76px 60px 47px 60px;
    }
  }
  .section {
    clip-path: polygon(0 0, 100% 15%, 100% 85%, 0 100%);
  }
  .about__title {
    text-align: center;
    margin-bottom: 50px;
    font-family: "Sensei";
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 58px;
    color: #ffffff;
    @media (max-width: 768px) {
      font-size: 24px;
      line-height: 29px;
      margin-top: 8px;
      margin-bottom: 10px;
    }
  }
  .about__text {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 158.9%;
    text-align: justify;
    color: #ffffff;
    @media (max-width: 768px) {
      font-size: 12px;
      line-height: 158.9%;
    }
  }
  .about__window {
    position: absolute;
    width: 131px;
    height: 176px;
    right: 0;
    bottom: 30px;
    overflow: hidden;
    @media (max-width: 768px) {
      width: 60px;
      height: auto;
      bottom: 10px;
    }
  }
  .about__trash {
    position: absolute;
    left: 0;
    top: 0;
    overflow: hidden;
    @media (max-width: 768px) {
      width: 76.34px;
    }
  }
`;
