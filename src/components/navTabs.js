import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header>
      <h1> Jacob Sierra</h1>
    
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a 
          href="#AboutMe"
          onClick={() => handlePageChange("AboutMe")}
          className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
          >
            About Me
          </a>
      </li>
      <li className="nav-item">
        <a 
          href="#Projects"
          onClick={() => handlePageChange('Projects')}
          className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
          >
            Projects
          </a>
      </li>
      <li className="nav-item">
        <a 
          href="#Contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
      </li>
      <li className="nav-item">
        <a 
          href="#esume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
      </li>
    </ul>
    </header>
  );
}

export default NavTabs;