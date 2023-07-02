import React from 'react';
import Donation from '../components/Donate/Donation';
import Resource from '../components/Donate/Resource';

const Home = () => {
    return(
      <div className='container'>
        <div className='grid grid-cols-12'>
          <Resource/>
          <Donation/>
        </div>
      </div>
    );
  };

export default Home;