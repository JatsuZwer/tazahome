import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Menu from './components/Menu/Menu';
import MainBlock from './components/MainBlock/MainBlock';
import Clients from './components/Clients/Clients';
import Service from './components/Service/Service';
import AboutUs from './components/AboutUs/AboutUs';
import Request from './components/Request/Request';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Menu/>
        <MainBlock/>
        <Clients/>
        <Service/>
        <AboutUs/>
        <Request/>
        <Contacts/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
