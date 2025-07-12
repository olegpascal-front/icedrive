import React from 'react';
import { motion } from 'framer-motion';
import '../styles/WaterSystems.css';

// Импорт изображения
import image1 from '../assets/images/voda.jpg';

const WaterSystems = () => {
  return (
    <section className="water-systems" id="water">
      <div className="systems-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="systems-header"
        >
          <h1 className="systems-title">СИСТЕМЫ ПОДГОТОВКИ ВОДЫ</h1>
          <h2 className="systems-subtitle">ДЛЯ ЗАЛИВКИ КАТКОВ</h2>
          <p className="systems-features">
            <span>НАГРЕВ</span> • <span>ФИЛЬТРАЦИЯ</span> • <span>ДОЗИРОВАНИЕ</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="water-image-container"
        >
          <img 
            src={image1} 
            alt="Система подготовки воды для заливки катков" 
            className="water-image"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WaterSystems;