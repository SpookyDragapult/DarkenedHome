// src/components/SidebarMenu.js
import React from 'react';

const SidebarMenu = () => {
  return (
    <aside id="sidebar">
      <div className='sidebar-logo'>
        <a href='#'>TICKETING</a>
      </div>
      <ul className='sidebar-nav p-0'>
        <li className='sidebar-item'>
          <a className='sidebar-link'>
            <i className='bi bi-film sz'></i>
            <span className='link-txt'>Film</span>
          </a>
        </li>
        <li className='sidebar-item'>
          <a className='sidebar-link'>
            <i className='bi bi-fire sz'></i>
            <span className='link-txt'>Trending</span>
          </a>
        </li>
        <li className='sidebar-item'>
          <a className='sidebar-link'>
            <i className='bi bi-cup-straw sz'></i>
            <span className='link-txt'>Food</span>
          </a>
        </li>
        <li className='sidebar-item'>
          <a className='sidebar-link'>
            <i className='bi bi-building sz'></i>
            <span className='link-txt'>Bioskop</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default SidebarMenu;
