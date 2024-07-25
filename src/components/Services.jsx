import React from 'react'
import './Services.css'

import { MdOutlineArrowOutward } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
function Services() {
  const servicess = [
    {
      id: 1,
      title: 'UX/UI design',
      price:'Rs 450',
      description: 'User interface development for websites and applications, design systems engineering',
    },
    {
      id: 2,
      title: 'Web Development',
      price:'Rs 550',
      description: 'User interface development for websites and applications, design systems engineering',
      
    }
    // Add more articles as needed
  ];
return (
<div className='services'>
  <div className='services-text'>
    <div className='text-div'>
    <div className='text-link'>
    <h1>Services</h1>

  
  </div>
    </div>
  </div>
  <div className='services-show'>
    
    {
      servicess.map(servicess=>(
        <articles className="service-article">
      <div className='art-text-div'>
        <h2>
          {servicess.title}
        </h2>
        <p2>
        {servicess.price}

        </p2>
      </div>
      <div className='art-text-div-2'>
       <p3>
       {servicess.description}
       </p3>
      </div>
      <div className='art-text-div-3'>
       <div className='iconOrder'>
       <h3>Leave a request</h3>
       <IoIosArrowForward />

       </div>
       <p4>Hashmi</p4>
      </div>
    </articles>
      ))
    }
    
  </div>
</div>
);
}

export default Services
