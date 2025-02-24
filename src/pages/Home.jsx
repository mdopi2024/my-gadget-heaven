import React from 'react';
import Banner from '../components/Banner/Banner';

import Category from '../components/Category';
import { Outlet } from 'react-router-dom';
import Healmate from '../components/Healmate';

const Home = () => {
    return (
        <div>
          <Healmate title={'Home'}></Healmate>
          <Banner></Banner>

          <h2 className='text-3xl text-center mb-10 md:text-4xl'>Explore Cutting-Edge Gadgets</h2>
          
         <div className='grid gap-5  grid-cols-1 md:grid-cols-12'>
          <div className='md:col-span-2'>
            <Category></Category>
          </div>
          <div className='md:col-span-10 mb-10'>
              <Outlet></Outlet>
          </div>
         </div>
        
        </div>
    );
};

export default Home;