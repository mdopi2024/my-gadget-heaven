import React, { useEffect, useState } from 'react';
import { getCardToStorage } from '../Utilities/Utiliteis';
import ShowDeshBoardCard from './ShowDeshBoardCard';
import { NavLink } from 'react-router-dom';

const DeshBoardCard = () => {
    const card = getCardToStorage()
    const [cards,setCard]= useState(card)
    const [price,setPrice]=useState(0)
    const handleSort = ()=>{
      const sortPrice = [...card].sort((a,b)=>b.price - a.price)
      setCard(sortPrice)
    }

    useEffect(()=>{
       const totalPrice = cards.reduce((total,proudct)=>total+ proudct.price ,0)
       const fixed = totalPrice.toFixed(2)
       setPrice(fixed)
    },cards)

    const handleModal =()=>{
      console.log('iam modal')
    }
  
    return (
        <div className='my-6  flex flex-col gap-10'>
           <div className='flex justify-between items-center'>
           <h1 className='text-3xl font-bold'> Cards</h1>
           <div className='flex justify-center items-center gap-3'>
            <h1 className='font-bold'>Total Price : {price}</h1>
           <button onClick={handleSort} className='border-2 border-purple-800 px-3 py-2 rounded-xl text-purple-800'>Sort by Price</button> 
           <button onClick={handleModal} className=' px-3 py-2 rounded-xl bg-purple-700 text-white'>Purchase</button>
           </div>
           </div>
         {
            cards.map((card, ind)=><ShowDeshBoardCard key={ind} card={card}></ShowDeshBoardCard>)
         }
        </div>
    );
};

export default DeshBoardCard;