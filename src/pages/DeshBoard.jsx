import React from 'react';
import { Helmet } from 'react-helmet';
import { NavLink, Outlet } from 'react-router-dom';
import Healmate from '../components/Healmate';

const DeshBoard = () => {
    return (
        <div>
          <Healmate title={'Deshboard'}></Healmate>
          <div className='bg-[#9538E2] text-center  pb-8 rounded-xl relative border   flex flex-col justify-center items-center'>
         <div className='md:w-3/4  p-10  mx-auto text-white space-y-4 '>
         <h3 className='text-3xl md:text-4xl'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h3>
         <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
         </div>
         <div>
            <NavLink to=''  className={ ({isActive})=>`border border-white px-5 py-2 rounded-xl text-white ${isActive?'!bg-yellow-300':''}`}>Card</NavLink>
            <NavLink to='wishlist'  className={ ({isActive})=>`border border-white px-5 py-2 rounded-xl text-white  ${isActive?'!bg--300':''} `}>Wishlist</NavLink>
         </div>

        </div>
          <div className='mb-8'>  <Outlet></Outlet></div>
        </div>
    );
};

export default DeshBoard;