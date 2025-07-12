import React from 'react';
import { motion } from 'framer-motion';
import '../styles/SyntheticIce.css';

// Импорт изображений
import image1 from '../assets/images/broskovaya.jpg';
import image2 from '../assets/images/katokprimer.jpg';

const SyntheticIce = () => {
  return (
    <section className="synthetic-ice" id="synthetic-ice">
      <div className="ice-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="ice-header"
        >
          <h1 className="ice-title">КОМПЛЕКСНЫЕ РЕШЕНИЯ</h1>
          <h2 className="ice-subtitle">ДЛЯ ЛЕДОВЫХ АРЕН И ТРЕНИНГОВЫХ ЗОН</h2>
        </motion.div>

        <div className="ice-solutions">
          {/* Секция синтетического льда */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="solution-section"
          >
            <h3 className="solution-title">
              <span className="highlight">СИНТЕТИЧЕСКИЙ ЛЁД</span>
            </h3>
            <p className="solution-description">
              Пластиковые покрытия для бросковых зон и мини-площадок для отработки техники катания
            </p>
            <div className="solution-gallery">
              <div className="solution-image-container">
                <img src={image1} alt="Бросковая зона из синтетического льда" className="solution-image" />
                <div className="image-label">Бросковые зоны</div>
              </div>
              <div className="solution-image-container">
                <img src={image2} alt="Мини-площадка с синтетическим льдом" className="solution-image" />
                <div className="image-label">Тренировочные площадки</div>
              </div>
            </div>
          </motion.div>

          {/* Секция дополнительного оборудования */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="solution-section equipment-section"
          >
            <h3 className="solution-title">
              <span className="highlight">ДОПОЛНИТЕЛЬНОЕ ОБОРУДОВАНИЕ</span>
            </h3>
            <div className="equipment-grid">
              <div className="equipment-item">
                <h4>Пункты проката</h4>
                <ul>
                  <li>Стеллажи для коньков</li>
                  <li>Сушилки</li>
                  <li>Локеры для посетителей</li>
                </ul>
              </div>
              <div className="equipment-item">
                <h4>Раздевалки</h4>
                <ul>
                  <li>Шкафчики для спортсменов</li>
                  <li>Скамьи</li>
                  <li>Вешалки</li>
                </ul>
              </div>
              <div className="equipment-item">
                <h4>МТУ установки</h4>
                <ul>
                  <li>Демонтаж сезонных катков</li>
                  <li>Быстрый прогрев льда</li>
                  <li>Мобильные решения</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SyntheticIce;