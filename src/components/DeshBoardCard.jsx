import React, { useState } from 'react';
import { getCardToStorage } from '../Utilities/Utiliteis';
import ShowDeshBoardCard from './ShowDeshBoardCard';

const DeshBoardCard = () => {
    const card = getCardToStorage()
    const [cards,setCard]= useState(card)
    const handleSort = ()=>{
      const sortPrice = [...card].sort((a,b)=>b.price - a.price)
      setCard(sortPrice)
    }
  
    return (
        <div className='my-6  flex flex-col gap-10'>
           <div className='flex justify-between items-center'>
           <h1 className='text-3xl font-bold'> Cards</h1>
           <div className='flex justify-center items-center gap-3'>
           <button onClick={handleSort} className='border-2 border-purple-800 px-3 py-2 rounded-xl text-purple-800'>Sort by Price</button> 
           <button className=' px-3 py-2 rounded-xl bg-purple-700 text-white'>Purchase</button> 
           </div>
           </div>
         {
            cards.map((card, ind)=><ShowDeshBoardCard key={ind} card={card}></ShowDeshBoardCard>)
         }
        </div>
    );
};

export default DeshBoardCard;