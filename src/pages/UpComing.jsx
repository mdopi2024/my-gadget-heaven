import React from 'react';
import { useLoaderData } from 'react-router-dom';
import UpcomingCard from '../components/UpcomingCard';

const UpComing = () => {
    const data= useLoaderData()
    console.log(data)
    
    return (
       <div>
        <h2 className='text-3xl font-bold mt-7 text-center'>Up Coming Products</h2>
         <div className='my-10 grid grid-cols-1 md:grid-cols-3 gap-7'>
            
            {
                data.map((up,ind)=><UpcomingCard key={ind} up={up}></UpcomingCard>)
            }
        </div>
       </div>
    );
};

export default UpComing;