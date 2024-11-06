import React from 'react';

const ShowDeshBoardCard = ({card}) => {
    const { product_title, img, price, rating,description} = card
    return (
        <div className='grid grid-cols-1 md:grid-cols-12 gap-10 border border-gray-600 rounded-2xl p-7'>
          <div className='w-full h-[300px] md:col-span-4'>
            <img className='w-full h-full  object-cover rounded-2xl' src={img} alt="" />
          </div>
          <div className='md:col-span-8'>
            <h2 className='text-2xl font-bold'>{product_title}</h2>
            <p className='text-[14px] mb-5 mt-3'>  {description}</p>
            <p className=''> price : $  {price}</p>
            <p>Rating : {rating}</p>
          </div>
        </div>
    );
};

export default ShowDeshBoardCard;