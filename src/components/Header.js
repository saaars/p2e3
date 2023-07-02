import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../p2-images copy/logo.png';
import '../pages/style.css'
import DropdownMenu from './DropdownMenu';

const Header = () => {
  return (
    <header className='py-6 border-b'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to='/'>
          <img className='logo' src={Logo} alt=''/>
        </Link>

        <div className='flex items-center gap-20'>
          <Link className='hover:font-extrabold transition text-black font-semibold tracking-wider' to='/'> Home </Link>
          <Link className='hover:font-extrabold transition text-black font-semibold tracking-wider' to='about'> About </Link>
          <Link className='hover:font-extrabold transition text-black font-semibold tracking-wider' to='learn'> Post-Adoption Tips</Link>
          <DropdownMenu/>
        </div>
      </div>  
      <div className='line mt-2'></div>
    </header>
  );
};

export default Header;
