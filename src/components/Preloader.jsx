import "../styles/Preloader.css";
import React, { useEffect } from "react";

const Preloader = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const preloader = document.querySelector('.preloader');
      if (preloader) {
        preloader.style.opacity = '0';
        preloader.style.pointerEvents = 'none';
        document.body.style.overflow = 'auto';
      }
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="preloader">
      <div className="snowflakes">
        {[...Array(15)].map((_, i) => (
          <div key={i} className={`snowflake snowflake-${i}`}>❄️</div>
        ))}
      </div>
      
      <div className="preloader-content">
        <div className="icon-wrapper">
          <div className="icon gear">⚙️</div>
          <span className="text ice-text">Ледовый</span>
        </div>
        
        <div className="icon-wrapper">
          <div className="icon skate">⛸️</div>
          <span className="text metal-text">Конструктор</span>
        </div>
        
        <div className="icon-wrapper">
          <div className="icon snowflake-icon">❄️</div>
          <span className="text blue-text">Проект</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;