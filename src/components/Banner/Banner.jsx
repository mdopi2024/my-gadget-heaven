import React from 'react';
import img from '../../assets/banner.jpg'
import { Link } from 'react-router-dom';

const Banner = () => {
    
    return (
        <div className='bg-[#9538E2] text-center mb-48 pb-56 rounded-xl relative border   flex flex-col justify-center items-center'>
         <div className='md:w-3/4  p-10  mx-auto text-white space-y-4 '>
         <h3 className='text-3xl md:text-4xl'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h3>
         <p>Explore the latest gadgets that will take your experience to , the next level. From smart devices to the coolest accessories, we have it all!</p>
         <Link to='/deshboard' className='bg-white text-[#9538E2] hover:bg-yellow-400 hover:text-black rounded-xl p-2  inline-block'>Shop Now</Link>
        
         </div>

         <div className=' border p-3 w-full md:w-3/4 rounded-xl absolute -bottom-40 h-[400px] '>
         <img className='w-full h-full rounded-xl object-cover' src={img} alt="" />
         </div>
         
        </div>
    );s
};

export default Banner;