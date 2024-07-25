import React from 'react';
import './About.css';
import image from '../assets/img2.png'
import { MdOutlineArrowOutward } from "react-icons/md";

function About() {
  return (
    <div className='about'>
      <div className='container-img'>
        <img src={image} />
              </div>
      <div className='container-txt'>
        <h3>About Me</h3>
        <h1>Designing Solutions, Not Just Visuals</h1>
        <p>Passionate about continuous learning and innovation, I thrive on transforming challenges into opportunities and making a meaningful impact.</p>
        <div className='button-jungle'>
          <div className='btn-linkedIn'>
            <span className='linkedIn-text'>LinkedIn</span>
            <a href='https://www.linkedin.com/in/syed-daniyal-hashmi-275806238/' target='_blank' rel='noopener noreferrer'>
              <MdOutlineArrowOutward className='arrow-icon' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
