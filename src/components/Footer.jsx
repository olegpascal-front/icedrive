import React from 'react';
import { motion } from 'framer-motion';
import { FaTelegram, FaWhatsapp, FaVk, FaMapMarkerAlt, FaPhone, FaEnvelope, FaRegCopyright } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  const socialLinks = [
    { icon: <FaTelegram />, url: "https://t.me/iceconstructor" },
    { icon: <FaWhatsapp />, url: "https://wa.me/79035194151" },
    { icon: <FaVk />, url: "https://vk.com/iceconstructor" }
  ];

  return (
    <footer className="footer">
      <div className="footer-wave"></div>
      
      <div className="footer-container">
        {/* Логотип и реквизиты */}
        <motion.div 
          className="footer-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="footer-brand-container">
            <motion.p 
              className="footer-brand"
              whileHover={{ scale: 1.03 }}
            >
              Ледовый
            </motion.p>
            <motion.p 
              className="footer-brand"
              whileHover={{ scale: 1.03 }}
            >
              Конструктор
            </motion.p>
          </div>

          <motion.div 
            className="footer-info"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p className="footer-info-item">
              <span>ИНН:</span> 7714944599
            </p>
            <p className="footer-info-item">
              <span>ОГРН:</span> 1237700413774
            </p>
            <p className="footer-info-item">
              <span>КПП:</span> 771401001
            </p>
          </motion.div>
        </motion.div>

        {/* Центральный блок */}
        <motion.div 
          className="footer-middle"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="footer-company"
            whileHover={{ scale: 1.02 }}
          >
            <p>Профессиональные решения для ледовых арен</p>
          </motion.div>
          
          <motion.div 
            className="footer-address"
            whileHover={{ scale: 1.02 }}
          >
            <FaMapMarkerAlt className="address-icon" />
            <p>г. Москва, ул. Бутырская, д. 17</p>
          </motion.div>

          <motion.div 
            className="footer-copyright"
            whileHover={{ scale: 1.05 }}
          >
            <FaRegCopyright /> 2024 Ice Constructor
          </motion.div>
        </motion.div>

        {/* Контакты */}
        <motion.div 
          className="footer-right"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h3 
            className="footer-contact-title"
            whileHover={{ scale: 1.05 }}
          >
            Контакты
          </motion.h3>
          
          <div className="footer-contact-info">
            <motion.a 
              href="tel:+79035194151" 
              className="footer-contact-item"
              whileHover={{ x: 5 }}
            >
              <FaPhone className="contact-icon" />
              <span>+7 (903) 519-41-51</span>
            </motion.a>
            
            <motion.a 
              href="mailto:info@iceconstructor.ru" 
              className="footer-contact-item"
              whileHover={{ x: 5 }}
            >
              <FaEnvelope className="contact-icon" />
              <span>info@iceconstructor.ru</span>
            </motion.a>
          </div>

          <motion.div 
            className="footer-social"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                whileHover={{ y: -5, scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <p>
          Разработано: <motion.a 
            href="https://github.com/olegpascal-front" 
            target="_blank"
            whileHover={{ color: "#4dd2ff" }}
          >Pascal Oleg</motion.a>
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;