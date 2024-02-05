import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../components/css/Hero.css';

export default function Hero () {
    let navigate = useNavigate();
    function handleGetInTouchClick() {
      navigate('/contact'); 
    }
    return (
        <>
        <div className="hero-container">
          <h1>Hey, I'm Sanjana Gadagoju</h1>
          <p>I enjoy designing tech websites and digital products</p>
          <button className="btn-primary" onClick={handleGetInTouchClick}>Get in touch</button>
        </div>
        
        </>
      )
};