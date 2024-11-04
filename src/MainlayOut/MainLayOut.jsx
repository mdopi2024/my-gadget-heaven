import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import { FiDivideCircle } from 'react-icons/fi';
import Footer from '../Footer/Footer';

const MainLayOut = () => {
    return (
        <div className='px-10 '>
          <div>
          <NavBar></NavBar>
          </div>
         <div className='h-[calc(100vh-430px)]'>
         <Outlet></Outlet>
         </div>
         
         <Footer></Footer>

        </div>
    );
};

export default MainLayOut;