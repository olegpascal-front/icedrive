import React from 'react';
import { motion } from 'framer-motion';
import '../styles/CompanyInfo.css';

const CompanyInfo = () => {
  return (
    <div className="company-container">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="company-header"
      >
        <motion.h2 
          initial={{ y: -50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.6 }}
          className="company-main-title"
        >
          НАША <span>КОМПАНИЯ</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="company-subtitle"
        >
          Группа «Ледовый Конструктор» (Москва) специализируется на выпуске оборудования для ледовых катков. 
          Собственные производственные мощности позволяют создавать качественное оборудование широкого диапазона.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default CompanyInfo;