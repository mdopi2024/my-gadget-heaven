import React from 'react';

const UpcomingCard = ({up}) => {
    console.log(up)
    return (
        <div  className='border border-gray-300 rounded-xl p-4 '>
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure className='mb-2 rounded-xl h-[300px] '>
                <img
                className='w-full h-full object-cover'
                    src={up.img}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{up.name}</h2>
                <p className=''>{up.description}</p>
              
               
            </div>
        </div>

    </div>
    );
};

export default UpcomingCard;