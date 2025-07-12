import React from 'react';
import { motion } from 'framer-motion';
import '../styles/DecorativeBoards.css';

// Импорт изображений
import image1 from '../assets/images/newbort2.jpg';
import image2 from '../assets/images/fasolkatok.jpg';

const DecorativeBoards = () => {
  return (
    <section className="decorative-boards" id="boards">
      <div className="boards-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="boards-header"
        >
          <h1 className="boards-title">ДЕКОРАТИВНЫЕ БОРТА</h1>
          <h2 className="boards-subtitle">ДЛЯ КАТКОВ МАССОВОГО КАТАНИЯ</h2>
          <p className="boards-materials">
            <span>ПРОЗРАЧНЫЙ ПЛАСТИК</span> • <span>ДЕРЕВЯННЫЕ</span>
          </p>
        </motion.div>

        <div className="boards-gallery">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="board-image-container"
          >
            <img 
              src={image1} 
              alt="Декоративные борта из прозрачного пластика" 
              className="board-image"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="board-image-container"
          >
            <img 
              src={image2} 
              alt="Деревянные декоративные борта" 
              className="board-image"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DecorativeBoards;