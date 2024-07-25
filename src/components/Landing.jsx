import React from 'react'
import Nav from './Nav'
import Introduction from './Introduction'
import './Landing.css'
function Landing() {
  return (
    <div className='Landing'>
        <div className='Landing-main'>
            <Nav />
            <Introduction />
        </div>
    </div>
  )
}

export default Landing
