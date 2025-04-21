import React, { useState, useEffect, useRef } from 'react';
import '../styles/InfoPanel.css';

const InfoPanel = () => {
    const [isVisible, setIsVisible] = useState(false);
    const componentRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.2,
            }
        );

        if (componentRef.current) {
            observer.observe(componentRef.current);
        }

        return () => {
            if (componentRef.current) {
                observer.unobserve(componentRef.current);
            }
        };
    }, []);


    return (
        <div className={`info-panel ${isVisible ? 'fade-in' : ''}`} ref={componentRef}>
            <div className="info-panel-content">
                <h2 className="info-panel-title">Надежные решения для вашего катка</h2>
                <p className="info-panel-text">
                    Мы предлагаем качественное оборудование и решения для обслуживания ледовых арен, обеспечивая долговечность и
                    надежность.
                </p>
                <div className="info-panel-stats">
                    <div className="info-panel-stat">
                        <span className="info-panel-stat-number">10+</span>
                        <span className="info-panel-stat-label">Лет опыта</span>
                    </div>
                    <div className="info-panel-stat">
                        <span className="info-panel-stat-number">50+</span>
                        <span className="info-panel-stat-label">Успешных проектов</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoPanel;
