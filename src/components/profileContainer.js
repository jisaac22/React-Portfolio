import React, { useState } from 'react';
import NavTabs from './navTabs';
import AboutMe from './pages/aboutMe';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Resume from './pages/resume';

export default function profileContainer (){
  const [currentPage, setCurrentPage] = useState('AboutMe');

  const renderPage = () => {
    if (currentPage === 'AboutMe'){
      return <AboutMe />;
    }
    if (currentPage === 'Projects'){
      return <Projects />;
    }
    if (currentPage === 'Contact'){
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page)

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage}
    </div>
  )
}