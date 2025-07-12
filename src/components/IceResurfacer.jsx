import React from 'react';
import { motion } from 'framer-motion';
import '../styles/IceResurfacer.css';

// Импорт изображений
import image1 from '../assets/images/zaboni1.jpg';
import image2 from '../assets/images/zaboni2.jpg';

const IceResurfacer = () => {
  return (
    <section className="ice-resurfacer" id="resurfacer">
      <div className="resurfacer-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="resurfacer-header"
        >
          <h1 className="resurfacer-title">ЛЕДОЗАЛИВОЧНАЯ ТЕХНИКА</h1>
          <h2 className="resurfacer-subtitle">PROFESSIONAL RESURFACER</h2>
          <p className="resurfacer-features">
            <span>АВТОМАТИЗИРОВАННАЯ ЗАЛИВКА</span> • <span>ПРЕЦИЗИОННОЕ ВЫРАВНИВАНИЕ</span> • <span>ЭКОНОМИЯ ВОДЫ</span>
          </p>
        </motion.div>

        <div className="resurfacer-gallery">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="resurfacer-image-container"
          >
            <img 
              src={image1} 
              alt="Профессиональная ледозаливочная машина" 
              className="resurfacer-image"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="resurfacer-image-container"
          >
            <img 
              src={image2} 
              alt="Ледозаливочная техника в работе" 
              className="resurfacer-image"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IceResurfacer;