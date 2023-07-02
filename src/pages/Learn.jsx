import React from 'react';
import Banner3 from '../components/Tips/Banner3';
import Tips from '../components/Tips/Tips';
import Foster from '../components/Tips/Foster';
import PostAdopt from '../components/Tips/PostAdopt';

const Home = () => {
  return(
    <div>
        <Banner3/>
        <Tips/>
        <Foster/>
        <PostAdopt/>
    </div>
  );
};

export default Home;