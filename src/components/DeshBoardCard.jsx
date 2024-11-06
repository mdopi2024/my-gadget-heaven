import React from 'react';
import { getCardToStorage } from '../Utilities/Utiliteis';
import ShowDeshBoardCard from './ShowDeshBoardCard';

const DeshBoardCard = () => {
    const card = getCardToStorage()
  
    return (
        <div className='my-6  flex flex-col gap-10'>
            <h1 className='text-3xl font-bold'> Cards</h1>
         {
            card.map((card, ind)=><ShowDeshBoardCard key={ind} card={card}></ShowDeshBoardCard>)
         }
        </div>
    );
};

export default DeshBoardCard;