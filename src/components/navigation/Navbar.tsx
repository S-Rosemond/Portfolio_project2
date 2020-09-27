import React from 'react';
import NavbarListItems from './NavbarListItems';
import listItems from './listItems';

import './navigation.css';

const Navbar = () => {
  return (
    <header className='nav-header'>
      <nav className='navbar-container '>
        <div className='logo'>
          <h2>Room</h2>
        </div>

        <ul className='list-items'>
          <div className='list-items-border'>
            <NavbarListItems listItems={listItems} />
          </div>
        </ul>

        <div className='menu-item'></div>
      </nav>
    </header>
  );
};

export default Navbar;
