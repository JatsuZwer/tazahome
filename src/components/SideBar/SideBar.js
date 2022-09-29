import React from "react";
import styled from "styled-components";
import { ReactComponent as Close } from "../../assets/img/close-sidebar.svg";

const SideBar = ({ handleOpen }) => {
  return (
    <Wrapper>
      <div className="close" onClick={handleOpen}>
        <Close />
      </div>
      <ul>
        <li>
          <a>О нас</a>
        </li>
        <li>
          <a>Преимущества</a>
        </li>
        <li>
          <a>Контакты</a>
        </li>
      </ul>
    </Wrapper>
    
  );
};

export default SideBar;

const Wrapper = styled.div`
  position: absolute;
  top: 50px;
  right: 50px;
  z-index: 999;
  width: 30%;

  background: #203e86;
  border-radius: 10px;
  padding: 7px 5px 40px 10px;

  .close {
    position: absolute;
    right: 10px;
    cursor: pointer;
  }
  ul {
    margin-top: 53px;
  }
  li {
    margin-bottom: 20px;
  }

  a {
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #ffffff;
    font-family: "Sensei";
    font-style: normal;
    margin-bottom: 15px;
  }
`;
