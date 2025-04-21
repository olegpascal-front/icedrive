import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import photoArctic from '../assets/images/arcric.png';
import '../styles/ArcticModel.css';

const ArcticModel = () => {
  const [activeModel, setActiveModel] = useState(0);
  
  const models = [
    {
      name: 'BIGLOG',
      features: [
        'Мощность двигателя: 15 л.с.',
        'Ширина обработки: 1.2 м',
        'Глубина подрезки: до 5 см',
        'Вес: 320 кг',
        'Топливо: бензин АИ-95',
        'Скорость работы: 3 км/ч'
      ],
      description: 'Профессиональная бортоподрезная машина для коммерческого использования на крупных ледовых аренах.'
    },
    {
      name: 'H2 ARCTIC',
      features: [
        'Мощность двигателя: 18 л.с.',
        'Ширина обработки: 1.5 м',
        'Глубина подрезки: до 7 см',
        'Вес: 350 кг',
        'Топливо: дизель',
        'Скорость работы: 4 км/ч'
      ],
      description: 'Инновационная модель с гидравлической системой управления и цифровым контролем параметров.'
    },
    {
      name: 'Revolution',
      features: [
        'Мощность двигателя: 20 л.с.',
        'Ширина обработки: 1.8 м',
        'Глубина подрезки: до 10 см',
        'Вес: 400 кг',
        'Топливо: дизель',
        'Скорость работы: 5 км/ч'
      ],
      description: 'Флагманская модель с автоматической системой выравнивания и рекуперацией энергии.'
    }
  ];

  return (
    <div className="arctic-model-container">
      {/* Блок видео в правом верхнем углу */}
      <div className="video-preview">
        <div className="video-placeholder">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#2091F9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 8L16 12L10 16V8Z" stroke="#2091F9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <p>Видеообзор</p>
        </div>
      </div>

      {/* Основной блок с каруселью и характеристиками */}
      <div className="model-content">
        <div className="model-info">
          <div className="model-titles">
            {models.map((model, index) => (
              <motion.div
                key={index}
                className={`model-name ${activeModel === index ? 'active' : ''}`}
                onClick={() => setActiveModel(index)}
                whileHover={{ scale: 1.05 }}
              >
                {model.name}
              </motion.div>
            ))}
          </div>

          <div className="model-specs">
            <h3>Характеристики</h3>
            <ul>
              {models[activeModel].features.map((feature, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="spec-icon">✓</span>
                  {feature}
                </motion.li>
              ))}
            </ul>
            <p className="model-description">{models[activeModel].description}</p>
          </div>
        </div>

        <div className="model-carousel">
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSlideChange={(swiper) => setActiveModel(swiper.activeIndex)}
            initialSlide={activeModel}
          >
            {models.map((model, index) => (
              <SwiperSlide key={index}>
                <motion.div 
                  className="carousel-image-container"
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <img src={photoArctic} alt={model.name} className="model-image" />
                  <div className="image-overlay"></div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ArcticModel;