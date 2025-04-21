import React from 'react';
import '../styles/RinkInfo.css'; // Подключаем стили

const RinkInfo = () => {
    const rinkTypes = [
        {
          title: "Открытые катки",
          description: "Идеальное решение для зимних развлечений на свежем воздухе. Мы предлагаем строительство открытых катков с учетом особенностей климата и местности.",
          icon: "❄️"
        },
        {
          title: "Крытые катки",
          description: "Круглогодичное удовольствие от катания. Мы строим крытые катки с использованием современных технологий охлаждения и вентиляции.",
          icon: "⛸️"
        },
        {
          title: "Технологии",
          description: "Мы используем передовые технологии для строительства катков. Это включает в себя высококачественное морозильное оборудование и материалы, обеспечивающие долговечность и эффективность.",
          icon: "⚙️"
        },
        {
          title: "Индивидуальные решения",
          description: "Мы предлагаем индивидуальные решения для каждого клиента. Мы поможем вам построить каток, который идеально соответствует вашим потребностям и бюджету.",
          icon: "💡"
        }
      ];
    
      return (
        <section className="rink-info-premium">
          <div className="rink-info-container">
            <div className="section-header">
              <h2 className="section-title">Виды катков и технологии</h2>
              <div className="title-decoration"></div>
            </div>
    
            <div className="rink-grid">
              {rinkTypes.map((rink, index) => (
                <div key={index} className="rink-card">
                  <div className="card-icon">{rink.icon}</div>
                  <h3 className="card-title">{rink.title}</h3>
                  <p className="card-description">{rink.description}</p>
                  <div className="card-highlight"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    };

export default RinkInfo;