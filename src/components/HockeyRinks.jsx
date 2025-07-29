import React from 'react';
import { motion } from 'framer-motion';
import '../styles/HockeyRinks.css';

// Импорт изображений
import image1 from '../assets/images/profbort.jpg';
import image2 from '../assets/images/bort1.jpg';
import image3 from '../assets/images/bort2.jpg';

const HockeyRinks = () => {
  return (
    <section className="hockey-rinks" id="rinks">
      <div className="rinks-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rinks-header"
        >
          <h1 className="rinks-title">ХОККЕЙНЫЕ КОРТЫ</h1>
          <h2 className="rinks-subtitle">С ОСТЕКЛЕНИЕМ И БОКСАМИ ДЛЯ ИГРОКОВ</h2>
          <p className="rinks-series">
            <span>ТРЕНИНГ</span> • <span>ПРОФЕССИОНАЛ</span> • <span>ЭКСТРА</span>
          </p>
        </motion.div>

        <div className="rinks-gallery">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rink-image-container"
          >
            <img 
              src={image1} 
              alt="Профессиональный хоккейный корт" 
              className="rink-image"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="rink-image-container"
          >
            <img 
              src={image2} 
              alt="Хоккейный корт серии Тренинг" 
              className="rink-image"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="rink-image-container"
          >
            <img 
              src={image3} 
              alt="Хоккейный корт серии Экстра" 
              className="rink-image"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HockeyRinks;