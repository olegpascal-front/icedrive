import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "../styles/Features.css";

// Импорт изображений
import IconArctic from "../assets/images/icon-arctic.png";
import IconBord from "../assets/images/icon-bort.png";
import IconIce from "../assets/images/icon-ice-court.png";
import ArcticImg from "../assets/images/arcric.png";
import HockeyImg from "../assets/images/xokkeibort.png";
import RinkImg from "../assets/images/katok.png";

const featuresData = [
  {
    icon: IconArctic,
    title: "ARCTIC PRO - флагманская модель",
    description: "Мощная бортоподрезная машина с цифровым контролем толщины льда. Оснащена системой рекуперации энергии и автоматической диагностикой.",
    img: ArcticImg,
    highlights: ["Автоматическая диагностика", "Цифровой контроль льда", "Энергосберегающая система"]
  },
  {
    icon: IconIce,
    title: "Коммерческая аренда катков",
    description: "Предоставляем ледовые площадки под мероприятия любого масштаба - от любительских матчей до международных соревнований. Полный сервисный пакет включен.",
    img: RinkImg,
    highlights: ["Любые размеры", "Полное обслуживание", "Профессиональное покрытие"]
  },
  {
    icon: IconBord,
    title: "Модульные хоккейные борты",
    description: "Быстромонтируемые системы с усиленной конструкцией. 3 варианта комплектации: для тренировок, полупрофессионального и профессионального использования.",
    img: HockeyImg,
    highlights: ["Быстрый монтаж", "3 варианта комплектации", "Усиленная конструкция"]
  }
];

const Features = () => {
  return (
    <section className="features" id="solutions">
      <div className="features-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="features-header"
        >
          <h2 className="features-subtitle">Наши решения</h2>
          <h1 className="features-title">Профессиональные технологии</h1>
          <div className="header-decoration"></div>
          <p className="features-intro">
            Инновационные разработки и проверенные временем технологии для создания идеального льда
          </p>
        </motion.div>

        <div className="features-content">
          <div className="features-grid">
            {featuresData.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true, margin: "-50px" }}
                className="feature-card"
                whileHover={{ y: -10 }}
              >
                <div className="feature-icon-container">
                  <div className="icon-background"></div>
                  <img src={feature.icon} alt={feature.title} className="feature-icon" />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <div className="feature-highlights">
                  {feature.highlights.map((item, i) => (
                    <div key={i} className="highlight-item">
                      <div className="highlight-marker"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="feature-hover-effect"></div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="features-carousel-container"
          >
            <Swiper
              modules={[Pagination, Autoplay, EffectFade]}
              effect="fade"
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ 
                clickable: true,
                el: '.custom-pagination',
                bulletClass: 'custom-bullet',
                bulletActiveClass: 'custom-bullet-active'
              }}
              autoplay={{ 
                delay: 5000,
                disableOnInteraction: false
              }}
              loop={true}
              className="features-carousel"
            >
              {featuresData.map((feature, index) => (
                <SwiperSlide key={index}>
                  <div className="carousel-slide">
                    <img 
                      src={feature.img} 
                      alt={feature.title} 
                      className="carousel-image"
                    />
                    <div className="carousel-overlay">
                      <div className="overlay-content">
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                        <button className="carousel-button">
                          Подробнее
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="custom-pagination"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;