import React from 'react';
import Banner2 from '../components/About/Banner-2';
import AboutUs from '../components/About/About-Us';
import HowTo from '../components/About/HowTo';
import Change from '../components/About/Change';

const Home = () => {
  return(
    <div className=''>
      <Banner2/>
      <AboutUs/>
      <HowTo/>
      <Change/>
    </div>
  );
};

export default Home;
