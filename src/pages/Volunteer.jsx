import React from 'react';
import Donation from '../components/Donate/Donation';
import Available from '../components/Volunteer/Available';

const Home = () => {
    return(
        <div className='container'>
        <div className='grid grid-cols-12'>
            <Available/>
            <Donation/>
        </div>
      </div>
    );
  };

export default Home;