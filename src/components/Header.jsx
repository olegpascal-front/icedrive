import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import Logo from "../assets/images/logo.png";
import Telegram from "../assets/images/icon-telegram.png";
import WhatsApp from "../assets/images/icon-whatsapp.png";
import VK from "../assets/images/icon-vk.png";
import { motion } from "framer-motion";
import Menu from "../assets/images/icon-menu.png";
import Close from "../assets/images/icon-close.png";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Определяем, находимся ли мы на главной странице
  const isHomePage = location.pathname === '/';

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${!isHomePage ? 'light-text' : ''}`}>
      <div className="container">
        <div className="header-menu-img-wrapper">
          <motion.img
            src={Menu}
            alt="Menu"
            className="header-menu-img"
            onClick={() => setToggleMenu(true)}
            whileHover={{ scale: 1.1 }}
          />
        </div>
        
        <nav className="header-nav">
          <ul className="header-ul">
            <li>
              <NavLink to="/" className={({isActive}) => isActive ? 'active' : ''}>Главная</NavLink>
            </li>
            <li>
              <NavLink to="/ice" className={({isActive}) => isActive ? 'active' : ''}>Катки</NavLink>
            </li>
            <li>
              <NavLink to="/arctic" className={({isActive}) => isActive ? 'active' : ''}>Машины ARTIC</NavLink>
            </li>
            <li>
              <NavLink to="/sports" className={({isActive}) => isActive ? 'active' : ''}>Спортивное Оборудование</NavLink>
            </li>
          </ul>
        </nav>
        
        <NavLink to='/'>
          <motion.img
            src={Logo}
            alt="Логотип"
            className="header-logo"
            whileHover={{ scale: 1.05 }}
          />
        </NavLink>
        
        <div className="header-icons">
          {[WhatsApp, Telegram, VK].map((icon, index) => (
            <motion.img
              key={index}
              src={icon}
              alt={`Иконка ${index}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
        
        {toggleMenu && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ type: 'spring', stiffness: 100 }}
            className={`header-mobile ${!isHomePage ? 'light-text' : ''}`}
          >
            <motion.img
              src={Close}
              alt="Закрыть"
              className="header-mobile-close-img"
              onClick={() => setToggleMenu(false)}
              whileHover={{ rotate: 90 }}
            />
            
            <nav>
              <ul className="header-mobile-ul">
                {[
                  { path: '/', name: 'Главная' },
                  { path: '/ice', name: 'Катки' },
                  { path: '/arctic', name: 'Машины ARTIC' },
                  { path: '/sports', name: 'Спортивное Оборудование' }
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <NavLink 
                      to={item.path} 
                      onClick={() => setToggleMenu(false)}
                      className={({isActive}) => isActive ? 'active' : ''}
                    >
                      {item.name}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
            </nav>
            
            <div className="header-mobile-icons">
              {[WhatsApp, Telegram, VK].map((icon, index) => (
                <motion.img
                  key={index}
                  src={icon}
                  alt={`Иконка ${index}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;