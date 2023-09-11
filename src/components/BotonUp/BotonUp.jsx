/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

export const BotonUp = () => {
    const [isVisible, setIsVisible] = useState(false);
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  

    const handleScroll = () => {
      if (window.pageYOffset > 200) { 
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <button
        className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
        onClick={scrollToTop}
      >
        <i className="fa-solid fa-up-long"></i>
      </button>
    );
}
