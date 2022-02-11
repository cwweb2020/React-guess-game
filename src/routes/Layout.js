import React from 'react';
import { Outlet } from "react-router-dom";
import Footer from '../components/Footer';
import Navbar from "../components/Navbar";



const Layout = () => {
  return (
      <>
         
          <Outlet />
          <Footer />
          
      </>
  )
};

export default Layout;
