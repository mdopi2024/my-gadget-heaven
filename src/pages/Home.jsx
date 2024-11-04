import React from 'react';
import Banner from '../components/Banner/Banner';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <h2>Explore Cutting-Edge Gadgets</h2>
          
        
        </div>
    );
};

export default Home;