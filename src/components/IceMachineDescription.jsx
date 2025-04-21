import React, {  useState} from 'react';
import  "../styles/IceMachineDescription.css"; // Импорт стилей
import photoarctic from '../assets/images/arcric.png'
import Modal from './Modal';
import ContactForm from './ContactForm';



const products = [
    { 
        name: 'Модель ARCTIC H2',
        image: photoarctic,
        price: '150000 руб.',
        shortDescription: 'Надежный и мощный инструмент для обработки льда.',
        description: {
            title: 'Технические характеристики:',
            features: [
                'Двигатель внутреннего сгорания HONDA GCV200',
                'Мощность: 5,6 л.с.;',
                'Рабочий объем двигателя – 166 см3;',
                'Запуск – ручной;',
                'Топливо – Аи92;',
                'Защитное покрытие платформы - порошковое окрашивание, RAL 2009 / RAL 9005;',
                'Количество режущих пластин – 3 шт.;',
                'Диск (3-х лучевая звезда) – сталь, толщина - 6 мм, диаметр – 320мм;',
                'Колеса – 4 шт., диаметр 80 мм;',
                'Контроль глубины среза льда - плавная регулировка SDAS (Smooths Depth Adjustment System).',
            ],
        },
        fullDescription: 'Это надежный инструмент для профессионалов, разработанный для работы в самых требовательных условиях. Он обеспечивает высокую производительность и долговечность.',
    },
    {
        name: 'Модель ICE CUTTER X1',
        image: photoarctic,
        price: '120000 руб.',
        shortDescription: 'Электрический станок с высокой точностью резки.',
        description: {
            title: 'Особенности модели:',
            features: [
                'Электрический двигатель 220В',
                'Мощность 7,5 кВт',
                'Скорость вращения 2500 об/мин',
                'Запуск кнопкой',
                'Усиленная рама',
                'Алмазные резцы',
                'Бесшумная работа',
                'Система защиты от перегрузки',
                'Вес 120 кг',
            ],
        },
        fullDescription: 'ICE CUTTER X1 – это современный электрический станок, разработанный для точной и эффективной резки льда. Он обладает высокой производительностью и требует минимального обслуживания.',
    },
    {
        name: 'Модель SNOW MASTER 3000',
        image: photoarctic,
        price: '200000 руб.',
        shortDescription: 'Аккумуляторный станок для быстрой обработки снега.',
        description: {
            title: 'Главные характеристики:',
            features: [
              'Аккумулятор 36В',
              'Время работы 4 часа',
               'Зарядка от сети',
              'Удобная регулировка ручки',
              'Легкий вес',
              'Прочный корпус',
             'Легкая замена ножей',
             'Радиус действия 10 м',
                'Светодиодная подсветка'
            ],
        },
         fullDescription: 'SNOW MASTER 3000 – это аккумуляторный станок для быстрой и эффективной обработки снега. Он идеально подходит для использования на небольших и средних площадях, обеспечивая легкость и удобство работы.',
    },

];


const IceMachineDescription = () => {
    const [currentProductIndex, setCurrentProductIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const currentProduct = products[currentProductIndex];
    const productCount = products.length;

     const handlePreviousProduct = () => {
    setCurrentProductIndex(prevIndex =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

   const handleNextProduct = () => {
    setCurrentProductIndex(prevIndex =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };



    const handleDetailsClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        
        <div className="ice-machine-container" >
            <h2 className="ice-machine-model">{currentProduct.name}</h2>
            <p className="ice-machine-short-description">{currentProduct.shortDescription}</p>
            <p className="ice-machine-price">Цена: {currentProduct.price}</p>
            <div className="ice-machine-content">
                <div className="ice-machine-image-container">
                    <img src={currentProduct.image} alt={currentProduct.name} />
                </div>
                <div className="ice-machine-text-container">
                    <h3>{currentProduct.description.title}</h3>
                    <ul>
                        {currentProduct.description.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                    <button className="details-button" onClick={handleDetailsClick}>Подробнее</button>
                    <button className="cart-button">В корзину</button>
                </div>
            </div>
            <div className="product-counter">
                Страница {currentProductIndex + 1} из {productCount}
            </div>
            <div className="separator"></div>
            <div className="buttons-container">
                <button className="prev-button" onClick={handlePreviousProduct}>Предыдущий</button>
                <button className="next-button" onClick={handleNextProduct}>Следующий</button>
            </div>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} title={currentProduct.name}>
                <p>{currentProduct.fullDescription}</p>
            </Modal>
          
        </div>
    );
};

export default IceMachineDescription;