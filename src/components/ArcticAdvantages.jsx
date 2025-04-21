import React from 'react';
import { motion } from 'framer-motion';
import '../styles/ArcticAdvantages.css';

const ArcticAdvantages = () => {
  const advantages = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#2091F9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 12L12 8L8 12" stroke="#2091F9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 16V8" stroke="#2091F9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Высочайшая точность",
      description: "Погрешность подрезки всего 0.3 мм благодаря запатентованной системе стабилизации"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#2091F9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 12H16" stroke="#2091F9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 16V8" stroke="#2091F9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Энергоэффективность",
      description: "На 30% меньше расход топлива по сравнению с аналогами за счет инновационной системы рекуперации"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#2091F9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 16V12" stroke="#2091F9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 8H12.01" stroke="#2091F9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Умный контроль",
      description: "Встроенная система диагностики предупредит о необходимости обслуживания"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#2091F9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 8L8 16" stroke="#2091F9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 8L16 16" stroke="#2091F9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Безотказность",
      description: "98.7% безотказной работы в экстремальных условиях при -30°C"
    }
  ];

  return (
    <div className="arctic-advantages-section">
      <div className="arctic-advantages-container">
        <motion.div 
          className="arctic-advantages-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="arctic-advantages-main-title">
            Почему <span>ARCTIC</span> — выбор профессионалов
          </h2>
          <p className="arctic-advantages-subtitle">
            Технологии, проверенные на самых престижных ледовых аренах мира
          </p>
        </motion.div>

        <div className="arctic-advantages-grid">
          {advantages.map((item, index) => (
            <motion.div
              key={index}
              className="arctic-advantage-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="arctic-advantage-icon-wrapper">
                {item.icon}
              </div>
              <h3 className="arctic-advantage-title">{item.title}</h3>
              <p className="arctic-advantage-description">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="arctic-advantages-stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="arctic-stat-item">
            <div className="arctic-stat-number">15+</div>
            <div className="arctic-stat-label">лет на рынке</div>
          </div>
          <div className="arctic-stat-item">
            <div className="arctic-stat-number">420+</div>
            <div className="arctic-stat-label">арен по всему миру</div>
          </div>
          <div className="arctic-stat-item">
            <div className="arctic-stat-number">24/7</div>
            <div className="arctic-stat-label">техподдержка</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ArcticAdvantages;