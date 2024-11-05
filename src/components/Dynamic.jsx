import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';


const Dynamic = () => {
    const data=useLoaderData()
    const {category}=useParams()
    
    
    
     const [singleCategory,setSingleCategory]=useState(data)
    useEffect(()=>{
        const filter = [...data].filter(item=>item.category === category);
    setSingleCategory(filter)
    

    },[data,category])
    
    return (
        <div className='grid  grid-cols-1 md:grid-cols-3 gap-5 '>
           {
            singleCategory.map((product , indx) => <Card key={indx} product={product} ></Card>)
           }
        </div>
    );
};

export default Dynamic;