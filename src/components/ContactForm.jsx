import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import InputMask from 'react-input-mask';
import '../styles/ContactForm.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const formRef = useRef(null);

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
      { threshold: 0.2 }
    );

    if (formRef.current) observer.observe(formRef.current);
    return () => {
      if (formRef.current) observer.unobserve(formRef.current);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!name || !phone) {
      alert('Пожалуйста, заполните все поля.');
      return;
    }

    if (!isValidPhoneNumber(phone)) {
      alert('Пожалуйста, введите корректный номер телефона.');
      return;
    }

    emailjs.send(
      'ваш_service_ID',
      'ваш_template_ID',
      { name, phone },
      'ваш_user_ID'
    ).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        setName('');
        setPhone('');
        setMessageSent(true);
      },
      (err) => {
        console.log('FAILED...', err);
        alert('Ошибка при отправке сообщения. Попробуйте позже.');
      }
    );
  };

  const isValidPhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\+7\s?\(?\d{3}\)?\s?\d{3}-?\d{2}-?\d{2}$/;
    return phoneRegex.test(phoneNumber);
  };

  return (
    <div className={`contact-form ${isVisible ? 'fade-in' : ''}`} ref={formRef}>
      <div className="form-header-container">
        <h2 className="form-header">Оставьте заявку и мы свяжемся с вами</h2>
        <div className="header-decoration"></div>
      </div>
      
      <div className="contact-form-content">
        <div className="contact-form-left">
          <h3>Перезвоним в течение 15 минут</h3>
          <div className="contact-info">
            <p>Или позвоните нам прямо сейчас:</p>
            <a href="tel:+79999999999" className="phone-link">+7 (999) 999-99-99</a>
          </div>
          <div className="contact-features">
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <p>Бесплатная консультация</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <p>Профессиональный подход</p>
            </div>
          </div>
        </div>

        <div className="contact-form-right">
          {messageSent ? (
            <div className="success-message-container">
              <div className="success-icon">✓</div>
              <h3>Спасибо за заявку!</h3>
              <p>Мы свяжемся с вами в ближайшее время</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form-fields">
              <div className="input-group">
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ваше имя"
                  required
                />
                <div className="input-decoration"></div>
              </div>
              
              <div className="input-group">
                <InputMask
                  mask="+7 (999) 999-99-99"
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Номер телефона"
                  required
                />
                <div className="input-decoration"></div>
              </div>
              
              <button type="submit" className="submit-button">
                <span>Отправить заявку</span>
                <div className="button-arrow">→</div>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;