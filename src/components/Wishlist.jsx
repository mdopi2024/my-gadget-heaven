import React from 'react';
import { getWishList } from '../Utilities/Utiliteis';
import ShowDeshBoardCard from './ShowDeshBoardCard';

const Wishlist = () => {
    const card = getWishList()
    return (
        <div>
            <h1 className='text-3xl font-bold'> Wishlist</h1>
          <div className='my-6  flex flex-col gap-10'>
         {
            card.map((card, ind)=><ShowDeshBoardCard key={ind} card={card}></ShowDeshBoardCard>)
         }
        </div>
        </div>
    );
};

export default Wishlist;