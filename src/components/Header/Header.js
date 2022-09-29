import React from "react";
import styled from "styled-components";
import { ReactComponent as LogoIcon } from "../../assets/img/logo.svg";
import { ReactComponent as BurgerIcon } from "../../assets/img/burger.svg";

const Header = ({handleOpen}) => {
  return (
    <HaederWrapper>
      <Logo>
        <LogoIcon />
      </Logo>
      <NavLinks>
        <li>
          <a href="#about_us">О нас</a>
        </li>
        <li>
          <a href="#service">Преимущества </a>
        </li>
        <li>
          <a href="#contacts">Контакты</a>
        </li>
      </NavLinks>
      <NavBtn>
        <button>Оставьте заявку</button>
      </NavBtn>
      <Burger onClick={handleOpen}>
        <BurgerIcon />
      </Burger>
    </HaederWrapper>
  );
};

export default Header;

const HaederWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  width: 100%;
  padding: 23px 60px 23px 60px;
`;
const Logo = styled.div``;
const NavLinks = styled.ul`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  a {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    margin: 0 70px;
    white-space: nowrap;
    cursor: pointer;
    color: #203e86;
    text-decoration: none;
  }
`;
const NavBtn = styled.div`
  @media (max-width: 768px) {
    display: none;
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
`;

const Burger = styled.div`
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;
