import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HeroSection.css';
import { FaArrowDown, FaChevronRight } from 'react-icons/fa';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Импортируем изображения
import slide1 from '../assets/images/katok.png';
import slide2 from '../assets/images/xokkeibort.png';
import slide3 from '../assets/images/1.jpg';
import slide4 from '../assets/images/2.jpg';
import slide5 from '../assets/images/3.jpg';
import backgroundImage from '../assets/3D/katok_P.png';

const HeroSection = ({ onOpenModal }) => {
    const navigate = useNavigate();
    const h1Ref = useRef(null);
    const pRef = useRef(null);
    const heroRef = useRef(null);
    const [contactList, setContactList] = useState([]);
    const [showContactInfo, setShowContactInfo] = useState(false);
    const endOfPageRef = useRef(null);

    const hotspots = [
        {
            id: 1,
            title: "Машины ARCTIC",
            description: "Профессиональное оборудование для ухода за льдом",
            x: 25,
            y: 75,
            route: "/arctic"
        },
        {
            id: 2,
            title: "Ледовые борты",
            description: "Модульные системы для хоккейных площадок",
            x: 45,
            y: 70,
            route: "/sports"
        },
        {
            id: 3,
            title: "Катки",
            description: "Полный цикл строительства ледовых арен",
            x: 60,
            y: 70,
            route: "/ice"
        }
    ];

    const handleContactClick = () => {
        setContactList([
            "Монтаж ледовых катков любого размера",
            "Демонтаж ледовых катков",
            "Обслуживание ледовых катков",
            "Замена льда",
            "Установка холодильного оборудования",
            "Установка освещения",
            "Укладка защитного ограждения",
            "Ремонт и обслуживание оборудования",
            "Подготовка основания под каток",
            "Консультации по обслуживанию катков"
        ]);
        setShowContactInfo(true);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateText(h1Ref.current, 'hero__title--slide-in-from-left');
                    animateText(pRef.current, 'hero__subtitle--fade-in');
                    observer.unobserve(entry.target);
                }
            });
        });

        if (heroRef.current) {
            observer.observe(heroRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const animateText = (element, animationName) => {
        if (element) {
            element.classList.add(animationName);
        }
    };

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        fade: true
    };

    const sliderImages = [slide1, slide2, slide3, slide4, slide5];

    const scrollToBottom = () => {
        endOfPageRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleHotspotClick = (route) => {
        navigate(route);
    };

    return (
        <section className="hero" ref={heroRef}>
               {/* Фоновое изображение с хотспотами */}
               <div className="hero__background-container">
                <div className="hero__background-wrapper">
                    <img 
                        src={backgroundImage} 
                        alt="3D панорама ледового катка" 
                        className="hero__background-image"
                    />
                    {hotspots.map((hotspot) => (
                        <div 
                            key={hotspot.id}
                            className="hero__hotspot"
                            style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                            onClick={() => handleHotspotClick(hotspot.route)}
                        >
                            <div className="hero__hotspot-marker"></div>
                            <div className="hero__hotspot-tooltip">
                                <h4>{hotspot.title}</h4>
                                <p>{hotspot.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Остальной код остается без изменений */}
            <div className="hero__content">
                <div className="hero__text-content">
                    <h1 ref={h1Ref} className="hero__title">
                        <span className="hero__title-line">Профессиональный</span>
                        <span className="hero__title-line">монтаж ледовых катков</span>
                    </h1>
                    <p ref={pRef} className="hero__subtitle">
                        Полный цикл услуг от проектирования до обслуживания
                    </p>
                    
                    <button 
                        onClick={handleContactClick} 
                        className="hero__cta-button"
                    >
                        <span>Наши услуги</span>
                        <FaChevronRight className="cta-arrow"/>
                    </button>
                </div>

                {showContactInfo && (
                    <div className="hero__info-section">
                        <div className="services-list">
                            <h3 className="services-title">Мы предлагаем:</h3>
                            <ul className="services-items">
                                {contactList.map((item, index) => (
                                    <li key={index} className="service-item">
                                        <div className="service-marker"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <div className="hero__slider-container">
                            <Slider {...sliderSettings}>
                                {sliderImages.map((image, index) => (
                                    <div key={index} className="hero__slider-item">
                                        <img 
                                            src={image} 
                                            alt={`Наш проект ${index + 1}`} 
                                            className="hero__slider-image"
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                )}
            </div>

            <button 
                onClick={scrollToBottom} 
                className="scroll-down-button"
            >
                <FaArrowDown className="scroll-icon"/>
                <span>Листайте вниз</span>
            </button>

            <div ref={endOfPageRef} style={{ height: '1px' }} />
        </section>
    );
};

export default HeroSection;