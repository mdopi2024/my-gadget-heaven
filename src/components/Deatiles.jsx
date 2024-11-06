import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

import { GiSelfLove } from "react-icons/gi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { addWishlist, setCard } from '../Utilities/Utiliteis';
import Healmate from './Healmate';

const Deatiles = () => {
    const { id } = useParams()
    const data = useLoaderData()
    const [singleCard, setSingleCard] = useState({})
    useEffect(() => {
        const findData = data.find(fine => fine.id == id)
        setSingleCard(findData)
    }, [])
    const { product_title, img, price, rating, availability, description, Specification } = singleCard


    const handleCard = ()=>{
        setCard(singleCard)
    }
    
    const handleWish = ()=>{
        addWishlist(singleCard)
    }


    return (
        
        <div className='bg-[#9538E2] pb-56 md:pb-36 mb-[450px] md:mb-[350px] relative text-white text-center space-x-3'>
            <Healmate title={'Details'}></Healmate>


            <div className='md:w-1/2 mx-auto px-5 mb-8'>
                <h2 className='font-bold text-3xl  md:text-4xl mb-3'>Product Details</h2>
                <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>



            <div className=' text-black  absolute'>

                <div className='w-4/6 rounded-xl bg-white  mx-auto grid gap-5 grid-cols-1 md:grid-cols-12 '>

                    <div className='w-auto h-auto  md:col-span-5 '>
                        <img className='w-full md:h-[400px]  rounded-xl object-cover' src={img} alt="" />
                    </div>

                    <div className=' flex flex-col justify-center md:text-left  md:col-span-7 space-y-4'>
                        <h3 className='font-bold'>{product_title}</h3>
                        <p>Price : {price}</p>
                        <span >{`${availability ? 'instock' : 'out of stock'}`}</span>
                        <p className='text-gray-700 text-[14px]'>{description}</p>
                         <ol>
                            {
                                Specification?.map((spaci,ind)=> <li key={ind}>{spaci}</li>)
                            }
                         </ol>

                        <p>Rating : {rating}</p>
                        <div className='flex items-center gap-6'>
                            <button onClick={handleCard} className='bg-[#9538E2] px-2 mb-3 py-2 rounded-xl text-white flex items-center gap-3'>Add to Card <MdOutlineShoppingCart></MdOutlineShoppingCart></button>
                            <button onClick={handleWish} className='text-3xl p-2 rounded-full flex justify-center items-center hover:border-2'><GiSelfLove ></GiSelfLove></button>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Deatiles;