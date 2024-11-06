import React from 'react';
import {Helmet} from "react-helmet";
import favicon from '../assets/favicon-16x16.png'
const Healmate = ({title}) => {
    return (
        <div>
         <Helmet>
            <link rel="shortcut icon" href={favicon} type="image/x-icon" />
            <title>{title} | Heaven Gadget</title>
         </Helmet>
        </div>
    );
};

export default Healmate;