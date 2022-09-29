import React, { useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MainBlock from "./components/MainBlock/MainBlock";
import Clients from "./components/Clients/Clients";
import Service from "./components/Service/Service";
import AboutUs from "./components/AboutUs/AboutUs";
import Request from "./components/Request/Request";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  console.log("isOpen", isOpen);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <BrowserRouter>
      <div className="wrapper">
        {isOpen && <SideBar handleOpen={handleOpen} />}
        <Header handleOpen={handleOpen} />
        <MainBlock />
        <Clients />
        <Service />
        <AboutUs />
        <Request />
        <Contacts />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
