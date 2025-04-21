import React from 'react';
import '../styles/ArcticFacts.css';

const ArcticFacts = () => {
  const specifications = [
    { 
      category: 'Технические параметры',
      items: [
        'Двигатель: Honda GX390 (13 л.с.)',
        'Ширина обработки: 1200-1500 мм',
        'Глубина реза: регулируемая 0-50 мм',
        'Скорость движения: 2-5 км/ч',
        'Вес: 320-350 кг'
      ]
    },
    { 
      category: 'Эксплуатация',
      items: [
        'Расход топлива: 1.5-2 л/ч',
        'Ресурс ножей: 200-300 часов',
        'Температурный диапазон: от -30°C до +40°C',
        'Рекомендуемая площадь: от 500 м² за смену',
        'Обслуживание: каждые 50 моточасов'
      ]
    },
    { 
      category: 'Комплектация',
      items: [
        'Базовый набор ножей (3 шт)',
        'Инструмент для регулировки',
        'Руководство оператора',
        'Гарантия: 12 месяцев',
        'Доп. опции: световое оборудование, датчики износа'
      ]
    }
  ];

  const comparisons = [
    { parameter: 'Ремонтопригодность', arctic: '4.8/5', competitors: '3.2-4.5/5' },
    { parameter: 'Наличие запчастей', arctic: '2-5 дней', competitors: '7-30 дней' },
    { parameter: 'Срок службы', arctic: '8-10 лет', competitors: '5-12 лет' }
  ];

  return (
    <div className="arctic-facts-container">
      <h2 className="arctic-facts-title">Факты о технике Arctic</h2>
      <p className="arctic-facts-subtitle">Реальные характеристики и сравнения</p>

      <div className="arctic-specs-grid">
        {specifications.map((spec, index) => (
          <div key={index} className="arctic-spec-category">
            <h3 className="arctic-spec-category-title">{spec.category}</h3>
            <ul className="arctic-spec-list">
              {spec.items.map((item, i) => (
                <li key={i} className="arctic-spec-item">
                  <div className="arctic-spec-marker"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="arctic-comparison">
        <h3 className="arctic-comparison-title">Сравнение с аналогами</h3>
        <div className="arctic-comparison-table">
          <div className="arctic-comparison-header">
            <div className="arctic-comparison-parameter">Параметр</div>
            <div className="arctic-comparison-value">Arctic</div>
            <div className="arctic-comparison-value">Конкуренты</div>
          </div>
          {comparisons.map((item, index) => (
            <div key={index} className="arctic-comparison-row">
              <div className="arctic-comparison-parameter">{item.parameter}</div>
              <div className="arctic-comparison-value">{item.arctic}</div>
              <div className="arctic-comparison-value">{item.competitors}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="arctic-limitations">
        <h3 className="arctic-limitations-title">Ограничения и требования</h3>
        <ul className="arctic-limitations-list">
          <li>Требуется ровная поверхность льда (перепады не более 10 мм/м)</li>
          <li>Не рекомендуется для использования на неровном/разрушенном льду</li>
          <li>Обязательное техобслуживание перед сезоном</li>
          <li>Только квалифицированный персонал</li>
        </ul>
      </div>
    </div>
  );
};

export default ArcticFacts;