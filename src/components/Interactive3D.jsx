import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import model3d from '../assets/3D/katok_P.png';
import '../styles/Interactive3D.css';

const Interactive3D = () => {
  const navigate = useNavigate();
  const [activeTooltip, setActiveTooltip] = useState(null);

  const hotspots = [
    {
      id: 1,
      title: "Машины ARCTIC",
      description: "Профессиональное оборудование для ухода за льдом",
      x: 30,
      y: 75,
      route: "/arctic"
    },
    {
      id: 2,
      title: "Ледовые борты",
      description: "Модульные системы для хоккейных площадок",
      x: 48,
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

  const handleHotspotClick = (route) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(route);
  };

  return (
    <div className="iceviz-section">
      <div className="iceviz-container">
        <h2 className="iceviz-title">Интерактивная 3D визуализация</h2>
        <p className="iceviz-subtitle">Исследуйте наши продукты</p>
        
        <div className="iceviz-image-wrapper">
          <img 
            src={model3d} 
            alt="3D модель ледовой арены" 
            className="iceviz-model"
          />
          
          {/* Общий SVG для всех соединительных линий */}
          <svg 
            className="iceviz-connectors" 
            style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              width: '100%', 
              height: '100%', 
              pointerEvents: 'none' 
            }}
          >
            {hotspots.map((spot) => (
              <React.Fragment key={`connector-${spot.id}`}>
                {/* Линия от цифры к точке */}
                <line
                  x1={`${spot.x + 3}%`}
                  y1={`${spot.y - 8}%`}
                  x2={`${spot.x}%`}
                  y2={`${spot.y}%`}
                  stroke="#2091F9"
                  strokeWidth="2"
                  strokeDasharray="5,3"
                />
                {/* Кружок с цифрой */}
                <circle
                  cx={`${spot.x + 3}%`}
                  cy={`${spot.y - 8}%`}
                  r="12"
                  fill="#2091F9"
                />
                <text
                  x={`${spot.x + 3}%`}
                  y={`${spot.y - 8}%`}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="white"
                  fontSize="12"
                  fontWeight="bold"
                >
                  {spot.id}
                </text>
              </React.Fragment>
            ))}
          </svg>

          {hotspots.map((spot) => (
            <div 
              key={spot.id}
              className="iceviz-hotspot-wrapper"
              style={{ 
                left: `${spot.x}%`, 
                top: `${spot.y}%`,
              }}
              onMouseEnter={() => setActiveTooltip(spot.id)}
              onMouseLeave={() => setActiveTooltip(null)}
              onClick={() => handleHotspotClick(spot.route)}
            >
              {/* Хотспот (синяя точка) */}
              <div className="iceviz-hotspot">
                <div className="iceviz-hotspot-core"></div>
                <div className="iceviz-hotspot-outer"></div>
              </div>

              {/* Подсказка сверху */}
              <div 
                className={`iceviz-tooltip ${activeTooltip === spot.id ? 'visible' : ''}`}
              >
                <div className="iceviz-tooltip-arrow"></div>
                <h3>{spot.title}</h3>
                <p>{spot.description}</p>
                <button 
                  className="iceviz-tooltip-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleHotspotClick(spot.route);
                  }}
                >
                  Подробнее
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Interactive3D;