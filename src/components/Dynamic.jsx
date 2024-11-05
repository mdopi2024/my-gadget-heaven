import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Dynamic = () => {
    const data=useLoaderData()
    const category = useParams()
    return (
        <div>
            ima dynamic route
        </div>
    );
};

export default Dynamic;