import React from 'react'
import './HeroSection.css';
import '../App.css';
import { Button } from './Button';
import videos from '../videos/video-1.mp4'
function HeroSection() {
  return (
    <div className='hero-container'>
        <video src={videos} autoPlay loop muted />
        <h1>DIVE INTO MUSIC</h1>
        <p>What are you waiting for?</p>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' 
                buttonSize='btn--large'>
                    GET STARTED
            </Button>
          
            {/* <Button className='btns' buttonStyle='btn--primary' 
                buttonSize='btn--large'>
                    WATCH TRAILER
                    <i className='far fa-play-circle' />
            </Button> */}


        </div>
      
    </div>
  );
}

export default HeroSection;
