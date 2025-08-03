import React, { useState, useEffect } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { useLocation } from 'react-router-dom';
import '../styles/ProjectsMap.css';

const ProjectsMap = () => {
  const location = useLocation();
  const [mapKey, setMapKey] = useState(0);

  useEffect(() => {
    setMapKey(prev => prev + 1);
  }, [location.pathname]);
  // Координаты объектов с бортами (красные метки)
  const bortsProjects = [
    { coords: [54.1930, 37.6173], title: 'Тула, Ледовый Дворец' },
    { coords: [55.7558, 37.6176], title: 'Москва. ХК Крылья Советов' },
    { coords: [56.0097, 92.8745], title: 'Красноярск. Арена Платинум. ХК Сокол (ВХЛ)' },
    { coords: [43.3186, 45.6987], title: 'Грозный, ГГНТУ им. Миллионщикова' },
    { coords: [55.8276, 37.2849], title: 'Красногорск, мкр. Опалиха (III очередь)' },
    { coords: [55.6938, 37.9107], title: 'Москва, мкр. Некрасовка' },
    { coords: [55.7104, 37.6089], title: 'Москва, Московская академия фигурного катания' },
    { coords: [68.9707, 33.0750], title: 'Мурманск' },
    { coords: [68.9707, 33.0750], title: 'Мурманск (вторая локация)' },
    { coords: [55.5690, 37.4670], title: 'Москва, пос. Коммунарка' },
    { coords: [55.5690, 37.4670], title: 'Москва, пос. Коммунарка (вторая локация)' },
    { coords: [56.2017, 95.7175], title: 'Канск, Красноярский край' },
    { coords: [55.8276, 37.2849], title: 'Красногорск, мкр. Опалиха' },
    { coords: [55.8276, 37.2849], title: 'Красногорск, мкр. Опалиха (вторая локация)' },
    { coords: [54.8065, 35.9279], title: 'Кондрово, Калужская область' },
    { coords: [54.8065, 35.9279], title: 'ЛДС «Угра», Кондрово' },
    { coords: [55.8558, 37.4763], title: 'Москва, Жилищник Головинского района' },
    { coords: [55.5524, 37.7097], title: 'Видное, Спортивный ледовый комплекс' },
    { coords: [53.2007, 45.0046], title: 'Пенза, Министерство спорта Пензенской области' },
    { coords: [55.7961, 37.9386], title: 'Балашиха, Хоккейная Академия Харламова' },
    { coords: [56.2017, 95.7175], title: 'Канск, Ледовый дворец' },
    { coords: [55.8276, 37.2849], title: 'Красногорск, Ледовый дворец «Старт»' },
    { coords: [55.9116, 37.7309], title: 'Мытищи, ЛДС «Атлант»' },
    { coords: [55.7558, 37.6176], title: 'Москва, Институт Курчатова' },
    { coords: [54.0784, 34.3282], title: 'Киров, Ледовая арена им. В.И.Исакова' },
    { coords: [53.8056, 60.6536], title: 'Чесма, ФОК «Спарта»' },
    { coords: [55.5524, 37.7097], title: 'Видное, Спортивный ледовый комплекс' },
    { coords: [45.0445, 41.9690], title: 'Ставрополь' },
    { coords: [55.5524, 37.7097], title: 'Видное' },
    { coords: [54.8065, 35.9279], title: 'Кондрово, Калужская область' },
    { coords: [57.6266, 39.8938], title: 'Ярославль' },
    { coords: [51.6720, 39.1843], title: 'Воронеж' },
    { coords: [54.0784, 34.3282], title: 'Киров, Калужская область' },
    { coords: [45.0445, 41.9690], title: 'Ставрополь' },
    { coords: [55.9116, 37.7309], title: 'Мытищи' },
    { coords: [55.7558, 37.6176], title: 'Москва' },
    { coords: [55.6376, 37.3818], title: 'Москва, Солнцево' },
    { coords: [53.8056, 60.6536], title: 'Чесма, Челябинская область' },
    { coords: [55.9116, 37.7309], title: 'Мытищи (вторая локация)' },
    { coords: [55.8004, 42.7749], title: 'Вача, Нижегородская область' },
    { coords: [54.9914, 73.3645], title: 'Омск, Арена им. Ирины Родниной' },
    { coords: [55.7558, 60.7029], title: 'Озерск, Челябинская область' },
    { coords: [58.2905, 59.7598], title: 'Кушва, ЛДС «Благодать-Арена»' },
    { coords: [66.5299, 66.6149], title: 'Салехард, ЛД «Кристалл»' },
    { coords: [55.7558, 37.6176], title: 'Москва, «АПИА Арена»' },
    { coords: [61.2540, 73.3962], title: 'Сургут, Ледовый дворец спорта' }
  ];
  
  const machinesSales = [
    // 2024
    { coords: [55.7961, 37.9386], title: 'Балашиха, СК "Никольский"', year: 2024 },
    { coords: [55.7558, 37.6176], title: 'Москва, Моск Сезоны', year: 2024 },
    { coords: [57.0004, 40.9739], title: 'Иваново, Индустриал Групп', year: 2024 },
    { coords: [55.5010, 36.0333], title: 'Можайск', year: 2024 },
    { coords: [55.7558, 37.6176], title: 'Москва, Ледовый Сервис', year: 2024 },
    { coords: [57.0004, 40.9739], title: 'Иваново', year: 2024 },
    
    // 2023
    { coords: [55.7558, 37.6176], title: 'Москва, Траст Инвест', year: 2023 },
    { coords: [48.7194, 44.5018], title: 'Волгоград, ИП Петруша И.В.', year: 2023 },
    { coords: [55.0302, 82.9204], title: 'Новосибирск, Эгида Сибирь', year: 2023 },
    { coords: [55.7558, 37.6176], title: 'Москва, Ледовый Сервис', year: 2023 },
    { coords: [55.7558, 37.6176], title: 'Москва, ИП Разливахина', year: 2023 },
    { coords: [55.7558, 37.6176], title: 'Москва, ИП Савина К.С.', year: 2023 },
    { coords: [56.0104, 38.3795], title: 'Черноголовка, СШ Черноголовка', year: 2023 },
    { coords: [55.7558, 37.6176], title: 'Москва, Ледовый Сервис', year: 2023 },
    
    // 2022
    { coords: [58.6031, 49.6680], title: 'Киров, ИП Урванцев А.В.', year: 2022 },
    { coords: [55.7558, 37.6176], title: 'Москва, ИП Разливахина', year: 2022 },
    { coords: [55.7558, 37.6176], title: 'Москва, ГК ЛС', year: 2022 },
    
    // 2021
    { coords: [59.9343, 30.3351], title: 'СПб, Ледокол СПб', year: 2021 },
    { coords: [54.8864, 38.0699], title: 'Ступино, СШР им. Боброва', year: 2021 },
    { coords: [55.7558, 37.6176], title: 'Москва, ООО "Большая Лига"', year: 2021 },
    { coords: [58.5256, 31.2742], title: 'Великий Новгород, ИП Грудин А.С.', year: 2021 },
    { coords: [55.7558, 37.6176], title: 'Москва, ИП Гончарова', year: 2021 },
    { coords: [55.7961, 37.9386], title: 'Балашиха, ООО Технопул-Р', year: 2021 },
    { coords: [54.1930, 37.6173], title: 'Тула, ООО Лайф-Тайм', year: 2021 },
    { coords: [58.5973, 35.8175], title: 'Пестово', year: 2021 },
    { coords: [54.7104, 20.4522], title: 'Калининград', year: 2021 },
    { coords: [59.9343, 30.3351], title: 'СПб, ООО Холодмаш', year: 2021 },
    { coords: [55.7558, 37.6176], title: 'Москва, Русский Лед', year: 2021 },
    { coords: [47.1171, 51.8814], title: 'Атырау, Казахстан, Бейбарыс', year: 2021 },
    { coords: [55.8558, 37.4763], title: 'Москва, ГБУ Голованово', year: 2021 },
    { coords: [55.5524, 37.7097], title: 'Видное', year: 2021 },
    { coords: [55.7558, 37.6176], title: 'Москва, Ледовый Сервис', year: 2021 },
    { coords: [55.7558, 37.6176], title: 'Москва, МС', year: 2021 },
    { coords: [55.7558, 37.6176], title: 'Москва, Легенда 77', year: 2021 },
    { coords: [53.2007, 45.0046], title: 'Пенза', year: 2021 },
    { coords: [55.7558, 37.6176], title: 'Москва, каток Шайба', year: 2021 }
  ];
  return (
    <section className="projects-map-section">
      <div className="map-container">
        <h2 className="map-title">НАШИ ПРОЕКТЫ И ПРОДАЖИ</h2>
        <div className="map-legend">
          <div className="legend-item">
            <div className="legend-color borts-color"></div>
            <span>Установка бортов</span>
          </div>
          <div className="legend-item">
            <div className="legend-color machines-color"></div>
            <span>Продажа машин</span>
          </div>
        </div>

        <div className="yandex-map">
     <YMaps 
  key={`ymaps-${mapKey}`}
  query={{ 
    apikey: '0a0a0df4-96a0-4a97-b092-d327f042930b',
    lang: 'ru_RU',
    load: "Map,Placemark,control.ZoomControl,geoObject.addon.balloon",
  }}
>
            <Map
              defaultState={{
                center: [55.751244, 37.618423],
                zoom: 5,
                controls: ['zoomControl']
              }}
              width="100%"
              height="600px"
            >
              {/* Красные метки - борты */}
              {bortsProjects.map((project, index) => (
                <Placemark
                  key={`borts-${index}`}
                  geometry={project.coords}
                  properties={{
                    balloonContent: project.title,
                    iconCaption: project.title
                  }}
                  options={{
                    preset: 'islands#redDotIcon',
                    iconColor: '#ff0000'
                  }}
                />
              ))}

              {/* Синие метки - машины */}
              {machinesSales.map((sale, index) => (
                <Placemark
                  key={`machines-${index}`}
                  geometry={sale.coords}
                  properties={{
                    balloonContent: sale.title,
                    iconCaption: sale.title
                  }}
                  options={{
                    preset: 'islands#blueDotIcon',
                    iconColor: '#2091F9'
                  }}
                />
              ))}
            </Map>
          </YMaps>
        </div>
      </div>
    </section>
  );
};

export default ProjectsMap;