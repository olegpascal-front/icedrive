import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/ArcticElitePerformance.css';

const ArcticElitePerformance = () => {
  const [activeTab, setActiveTab] = useState('engineering');
  
  const eliteFeatures = {
    engineering: [
      "Гидростатическая трансмиссия ArcticDrive™",
      "Титановая рама с квантовым упрочнением",
      "Система антивибрации 4-го поколения",
      "Нанопокрытие режущих кромок (износостойкость +300%)"
    ],
    technology: [
      "ИИ-контроль качества льда в реальном времени",
      "Автопилот для точных повторяющихся операций",
      "HUD-проекция параметров на лобовое стекло",
      "Квантовые датчики температуры поверхности"
    ],
    service: [
      "Персональный инженер 24/7",
      "Дистанционная диагностика через ArcticCloud",
      "Гарантия 5 лет на все компоненты",
      "Программа лояльности ArcticCircle"
    ]
  };

  const performanceStats = [
    { value: "0.01", unit: "мм", label: "точность реза" },
    { value: "400%", unit: "", label: "эффективность" },
    { value: "-50°C", unit: "", label: "рабочий диапазон" },
    { value: "10", unit: "лет", label: "ресурс до капремонта" }
  ];

  return (
    <div className="arctic-elite-container">
      <div className="arctic-elite-inner">
        {/* Анимированный заголовок */}
        <motion.div 
          className="arctic-elite-header"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="arctic-elite-title">
            <span className="arctic-elite-title-gradient">ARCTIC ELITE</span>
            <br />
            <span className="arctic-elite-subtitle">Непревзойденная инженерия</span>
          </h2>
          <div className="arctic-elite-divider"></div>
        </motion.div>

        {/* Интерактивные табы */}
        <div className="arctic-elite-tabs">
          {Object.keys(eliteFeatures).map((tab) => (
            <motion.button
              key={tab}
              className={`arctic-elite-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab === 'engineering' && 'Инженерия'}
              {tab === 'technology' && 'Технологии'}
              {tab === 'service' && 'Сервис'}
            </motion.button>
          ))}
        </div>

        {/* Контент табов с анимацией */}
        <div className="arctic-elite-content">
          <AnimatePresence mode="wait">
            <motion.ul
              key={activeTab}
              className="arctic-elite-features"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
            >
              {eliteFeatures[activeTab].map((feature, index) => (
                <motion.li
                  key={index}
                  className="arctic-elite-feature-item"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="arctic-elite-feature-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18457 2.99721 7.13633 4.39828 5.49707C5.79935 3.85782 7.69279 2.71538 9.79619 2.24015C11.8996 1.76491 14.1003 1.98234 16.07 2.86" stroke="#2091F9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 4L12 14.01L9 11.01" stroke="#2091F9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  {feature}
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>

        {/* Блок статистики */}
        <div className="arctic-elite-stats">
          {performanceStats.map((stat, index) => (
            <motion.div
              key={index}
              className="arctic-elite-stat-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="arctic-elite-stat-value">
                {stat.value}
                {stat.unit && <span className="arctic-elite-stat-unit">{stat.unit}</span>}
              </div>
              <div className="arctic-elite-stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Эксклюзивный CTA */}
        <motion.div
          className="arctic-elite-cta-wrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button className="arctic-elite-cta">
            <span>Запросить эксклюзивный демо-тур</span>
            <div className="arctic-elite-cta-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="arctic-elite-cta-hover"></div>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ArcticElitePerformance;