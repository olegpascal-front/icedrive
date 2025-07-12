import React from 'react';
import { motion } from 'framer-motion';
import '../styles/CoolingSystems.css';

// Импорт изображений
import image1 from '../assets/images/chiller.jpg';
import image2 from '../assets/images/kollector.jpg';

const CoolingSystems = () => {
  return (
    <section className="cooling-systems" id="cooling">
      <div className="systems-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="systems-header"
        >
          <h1 className="systems-title">СИСТЕМЫ ОХЛАЖДЕНИЯ</h1>
          <h2 className="systems-subtitle">ДЛЯ ЛЕДОВЫХ АРЕН</h2>
          <p className="systems-types">
            <span>ЧИЛЛЕРЫ</span> • <span>ПЛИТЫ ОХЛАЖДЕНИЯ</span> • <span>КОЛЛЕКТОРНЫЕ СИСТЕМЫ</span>
          </p>
        </motion.div>

        <div className="systems-gallery">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="system-image-container"
          >
            <img 
              src={image1} 
              alt="Чиллеры для ледовых арен" 
              className="system-image"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="system-image-container"
          >
            <img 
              src={image2} 
              alt="Коллекторные системы охлаждения" 
              className="system-image"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoolingSystems;