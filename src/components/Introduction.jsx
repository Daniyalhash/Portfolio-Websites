import React from 'react';
import './Introduction.css';
import profileImage from '../assets/img2.png'; // Make sure to update the path
import { FaArrowDownLong } from "react-icons/fa6";

const Introduction = () => {
    return (
   <>
   <div className='intro'>
   <div className="intro-container">
            <div className='intro-text'>
                <p>Hashmi</p>
                <h1>Quality Design & Full Stack Development</h1>
                <p2>I am a software engineer on a journey to becoming an AI engineer, passionate about creating innovative solutions at the intersection of technology and intelligence.</p2>
            </div>
            <div className='intro-element'>
                <div className='magicpattern'></div>
            </div>
           
        </div>
        <div className='iconArrow'>
                <FaArrowDownLong className='arrow' />
          </div>
   </div>
     
   </>
    );
  };
  
  export default Introduction;