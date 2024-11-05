import React from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';

const Category = () => {
const data = useLoaderData()

    return (
     <div className= 'px-10 md:px-6 font-bold py-5 flex flex-col gap-4  border border-white '>
   
       {
        data.map((category, ind)=> <NavLink key={ind} to={`/category/${category.category}`} className={({isActive})=>`text-center ${ isActive? '!bg-yellow-400 rounded-xl py-2':''}`} >{category.category}</NavLink>)
       }
     
     </div>
    );
};

export default Category;