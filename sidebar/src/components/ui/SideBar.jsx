import './Sidebar.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faHouse, faUser } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const hamburger = document.getElementById('nav-toggle');

  return (
    <>
      <nav>
        <button id="nav-toggle">
          <FontAwesomeIcon icon={faList} />
        </button>
        <ul>
          <li>
            <button>
              <FontAwesomeIcon icon={faHouse} />
            </button>
          </li>
          <li>
            <button>
              <FontAwesomeIcon icon={faUser} />
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Sidebar;
