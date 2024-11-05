import React from 'react';
import Banner from '../components/Banner/Banner';

import Category from '../components/Category';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
          <Banner></Banner>

          <h2 className='text-3xl text-center mb-10 md:text-4xl'>Explore Cutting-Edge Gadgets</h2>
          
         <div className='grid  grid-cols-1 md:grid-cols-12'>
          <div className='col-span-2'>
            <Category></Category>
          </div>
          <div className='col-span-10 mb-52'>
              <Outlet></Outlet>
          </div>
         </div>
        
        </div>
    );
};

export default Home;