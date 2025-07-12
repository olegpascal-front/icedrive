import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import image1 from '../assets/images/big1.jpg';
import image2 from '../assets/images/honda.jpg';
import '../styles/ArcticModel.css';

const ArcticModel = () => {
  const [activeModel, setActiveModel] = useState(0);
  
  const models = [
    {
      name: 'ARCTIC BIGLOG',
      image: image1,
      features: [
        'Двигатель "CHAMPION" G340VKE',
        'Рабочий объем: 340 см³',
        'Мощность: 11 л.с. (8,1 кВт) при 3600 об/мин',
        'Крутящий момент: 17,8 Нм при 2500 об/мин',
        'Запуск: электрический стартер',
        'Топливо: АИ-92',
        'Покрытие платформы: порошковое окрашивание RAL 2009/9005',
        'Режущие пластины: 3 шт',
        'Диск: нерж. сталь, 6 мм, Ø390 мм',
        'Колёса: задние 2×Ø100 мм, передние 2×Ø80 мм',
        'Контроль глубины: SDAS система'
      ],
      description: 'Профессиональная бортоподрезная машина для коммерческого использования на крупных ледовых аренах.'
    },
    {
      name: 'ARCTIC H',
      image: image2,
      features: [
        'Двигатель: HONDA GCV170',
        'Рабочий объем: 166 см³',
        'Запуск: ручной',
        'Топливо: АИ-92',
        'Покрытие платформы: порошковое окрашивание RAL 2009/9005',
        'Режущие пластины: 3 шт',
        'Диск: 3-х лучевая звезда из нерж. стали, 6 мм, Ø320 мм',
        'Колёса: 4×Ø80 мм',
        'Контроль глубины: SDAS система'
      ],
      description: 'Компактная и надежная модель с японским двигателем для регулярного обслуживания катков.'
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
                  <img src={model.image} alt={model.name} className="model-image" />
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