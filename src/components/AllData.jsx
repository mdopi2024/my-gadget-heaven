import { data } from 'autoprefixer';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';

const AllData = () => {
    const data = useLoaderData()
   
    return (
        <div className='grid  grid-cols-1 md:grid-cols-3 gap-5 '>
        {
         data.map((product , indx) => <Card key={indx} product={product} ></Card>)
        }
     </div>
    );
};

export default AllData;