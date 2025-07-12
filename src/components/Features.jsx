import React from "react";
import { motion } from "framer-motion";
import "../styles/Features.css";

// Импорт изображений
import image1 from '../assets/images/big1.jpg';
import image2 from '../assets/images/honda.jpg';

const Features = () => {
  return (
    <section className="features" id="solutions">
      <div className="features-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="features-header"
        >
          <h2 className="features-subtitle">НАША ТЕХНИКА</h2>
          <h1 className="features-title">МАШИНЫ ДЛЯ ПОДРЕЗАНИЯ ЛЬДА (EDGER)</h1>
          <div className="header-decoration"></div>
        </motion.div>

        <div className="edger-gallery">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="edger-image-container"
          >
            <img 
              src={image1} 
              alt="Профессиональная машина для подрезки льда" 
              className="edger-image"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="edger-image-container"
          >
            <img 
              src={image2} 
              alt="Компактная машина для подрезки льда" 
              className="edger-image"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="edger-description"
        >
          <p>
            Профессиональные машины для подрезки бортов ледовой арены. 
            Обеспечивают идеальную кромку льда для хоккея и фигурного катания.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;