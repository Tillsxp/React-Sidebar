import './Sidebar.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faHouse, faUser } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <nav>
      <button id="nav-toggle" onClick={handleClick}>
        <FontAwesomeIcon icon={faList} />
      </button>
      <ul className={isClicked ? 'show' : ''}>
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
  );
};

export default Sidebar;
