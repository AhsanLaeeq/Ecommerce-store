import React from 'react';
import  { Outlet } from 'react-router-dom';
import "./Layout.css";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';



const Layout = () => {
  return (
    <div className="layout">
        <Navbar/>

          <div className="content">
        <Outlet/>
    </div>
    <Footer/>
    </div>
  
  )
}

export default Layout