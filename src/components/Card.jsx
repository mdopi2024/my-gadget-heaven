import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegStar } from "react-icons/fa6";

const Card = ({ product }) => {

    const { product_title, id, img, price, rating, availability, Specification } = product
    return (
        <div className='border border-gray-300 rounded-xl p-4 '>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure className='mb-2 rounded-xl h-[200px] '>
                    <img
                        className='w-full h-full object-cover'
                        src={img}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product_title}</h2>
                    <p className='font-bold'>Rating : {rating}</p>
                    <div className='flex'>
                        <FaRegStar className='text-yellow-500 text-xl'></FaRegStar>
                        <FaRegStar className='text-yellow-500 text-xl'></FaRegStar>
                        <FaRegStar className='text-yellow-500 text-xl'></FaRegStar>
                        <FaRegStar className='text-yellow-500 text-xl'></FaRegStar>
                    </div>
                    <h2 className='font-bold'>Price : $ {price}</h2>
                   
                    <Link to={`/details/${id}`} className='bg-sky-500 text-center text-white font-bold py-2 rounded-2xl'> View Details</Link>
                </div>
            </div>

        </div>
    );
};

export default Card;