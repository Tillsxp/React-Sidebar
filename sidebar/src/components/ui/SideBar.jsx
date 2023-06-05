import './Sidebar.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <>
      <nav>
        <button id="nav-toggle">
          <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
        </button>
        <ul>
          <li>Home</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  );
};
export default Sidebar;
