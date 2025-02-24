import React from 'react';
import { Link, NavLink, useLoaderData } from 'react-router-dom';

const Category = () => {
const data = useLoaderData()

    return (
     <div className= 'px-10  md:px-6 font-bold py-5 flex flex-col gap-4  border-2 rounded-xl border-gray-400 shadow-2xl shadow-gray-700'>
       <NavLink to='/' className={({isActive})=>`text-center ${ isActive? '!bg-[#9538E2] text-white rounded-xl py-2':''}`}> All Product</NavLink>
       {
        data.map((category, ind)=> <NavLink key={ind} to={`/category/${category.category}`} className={({isActive})=>`text-center ${ isActive? '!bg-[#9538E2] text-white rounded-xl py-2':''}`} >{category.category}</NavLink>)
       }
     
     </div>
    );
};

export default Category;