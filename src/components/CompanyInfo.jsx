import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../styles/CompanyInfo.css';
const CompanyInfo = () => {
  const sections = [
    {
      id: 1,
      title: "Экспертиза в ледовых технологиях",
      description: "15 лет специализируемся на создании и обслуживании профессиональных ледовых покрытий. Наши специалисты проходили обучение в Канаде и Финляндии.",
      image: "https://avatars.mds.yandex.net/i?id=b26c70db3c760fe032f5c376a1e4c024_l-5279811-images-thumbs&n=13",
      icon: "🏢"
    },
    {
      id: 2,
      title: "Полный цикл строительства",
      description: "От проектирования холодильных систем до финальной заливки льда. Гарантируем соблюдение всех стандартов NHL и IIHF.",
      image: "https://goseewow.com/upload/medialibrary/294/%D0%9A%D0%B0%D1%82%D0%BE%D0%BA%20%D0%92%D0%94%D0%9D%D0%A5.jpg",
      icon: "🏗️"
    },
    {
      id: 3,
      title: "Инновационные машины",
      description: "Собственная линейка оборудования для ухода за льдом. Энергоэффективные модели с системой автоматического контроля температуры.",
      image: "https://avatars.mds.yandex.net/i?id=70ee22ad3a4780f4e915087f75e18dba_l-5254476-images-thumbs&ref=rim&n=13&w=1024&h=685",
      icon: "🚜"
    },
    {
      id: 4,
      title: "Профессиональный инвентарь",
      description: "Сертифицированное оборудование для хоккея и фигурного катания. Работаем напрямую с ведущими производителями.",
      image: "https://i.pinimg.com/originals/17/9b/7a/179b7ac0de234f8344ef65bd0d88a6ca.jpg",
      icon: "🏒"
    }
  ];

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
         Преимущества  <span>Компании</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="company-subtitle"
        >
          Комплексные решения для ледовых арен любого масштаба
        </motion.p>
      </motion.div>

      {/* Desktop Grid View */}
      <div className="company-grid">
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="company-card"
            whileHover={{ y: -10 }}
          >
            <div className="card-icon">{section.icon}</div>
            <div className="card-image-container">
              <img 
                src={section.image} 
                alt={section.title} 
                className="card-image"
                loading="lazy"
              />
              <div className="image-overlay"></div>
            </div>
            <div className="card-content">
              <h3>{section.title}</h3>
              <p>{section.description}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="card-button"
              >
                Подробнее →
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile Swiper */}
      <div className="company-swiper">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="mySwiper"
        >
          {sections.map((section) => (
            <SwiperSlide key={`swiper-${section.id}`}>
              <div className="swiper-card">
                <div className="swiper-icon">{section.icon}</div>
                <div className="swiper-image-container">
                  <img src={section.image} alt={section.title} />
                </div>
                <div className="swiper-content">
                  <h3>{section.title}</h3>
                  <p>{section.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CompanyInfo;