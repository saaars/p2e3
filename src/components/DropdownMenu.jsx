import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../pages/style.css'
import { Link } from 'react-router-dom';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle tracking-wide font-semibold dd-btn" onClick={toggleDropdown}>
        Services
     </button>
        {isOpen && (
            <div className='test'>
                <div className='test-menu'>
                    <Link onClick={toggleDropdown} className='test2' to={'/adopt'}> 
                        <span className='test-menu-option'>Adopt</span>
                    </Link>
                    
                    <Link onClick={toggleDropdown} className='test2' to={"/donate"}> 
                        <span className='test-menu-option'>Donate</span>
                    </Link>

                    <Link onClick={toggleDropdown} className='test2' to={"/volunteer"}> 
                        <span className='test-menu-option'>Volunteer</span>
                    </Link>

                </div>
            </div>
        )}
    </div>
  );
};

export default DropdownMenu;
