import React, { useState, useEffect, useRef } from 'react';
import './Nav.css';
import Profile from '../assets/img2.png';
import { HiMiniBars3 } from "react-icons/hi2";
import Resume from '../assets/resume.pdf';

function Nav() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="Nav">
      <div className="nav-title">
        <div className="title">
          Syed Daniyal Hashmi
        </div>
      </div>
      <div className="nav-design">
        <img src={Profile} alt="Logo" className="small-logo" />
      </div>
      <div className="nav-items">
      <a
          href="Resume" /* Path to your CV file */
          download="Syed_Daniyal_Hashmi_CV.pdf" /* The filename for the downloaded file */
          className="nav-button"
        >
          Download CV
        </a>        <a className="nav-button">Request a Project</a>
        <button className="nav-button dropdown-toggle" onClick={toggleDropdown}>
          <HiMiniBars3 className='icon'/>
        </button>
        {isDropdownOpen && (
          <div className="dropdown-menu" ref={dropdownRef}>
            {['Home', 'About Us', 'Services', 'Projects', 'Contact Us'].map((item, index) => (
              <button
                key={index}
                className={`dropdown-item ${item.toLowerCase().replace(/\s+/g, '')}`}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Nav;
