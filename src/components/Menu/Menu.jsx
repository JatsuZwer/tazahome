import React from "react";
import s from "./Menu.css"
import logo from "../../assets/img/logo.png"
import logotext from "../../assets/img/text.png"


const Menu = () => {

   return(
		<header className="header">
			<div className="container">
				<div className="header__body">
					<a href="#" className="header__logo">
						<img src={logo} alt="" />
					</a>
					<a href="" className="header__logotext">
						TAZA <span className="header__green">HOME</span>
					</a>
					<div className="header__burger">
						<span></span>
					</div>
					<nav className="header__menu">
						<ul className="header__list">
							<li>
								<a href="#a" className="header__link">О нас</a>
							</li>
							<li>
								<a href="#b" className="header__link">Преимущества</a>
							</li>
							<li>
								<a href="#c" className="header__link">Контакты</a>
							</li>
						</ul>
						<button className="header__button">Оставьте заявку</button>
					</nav>
				</div>
			</div>
		</header>
   )
}

export default Menu; 