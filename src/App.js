import React, { useState, useEffect } from 'react';
import './App.css';
import FlipCountdown from '@rumess/react-flip-countdown';

function App() {
  const [visibleBlock, setVisibleBlock] = useState('');

  function callbackFunc(entries, observer) {
    entries.forEach(entry => {
      setVisibleBlock('anim')
    });
    setTimeout(() => setVisibleBlock(''), 1000);
  }

  let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    };

  let observer = new IntersectionObserver(callbackFunc, options);

  useEffect(() => {
    if(document) {
      observer.observe(document.getElementById('anim'));
    }
  },[])

console.log()
  return (
    <div className="App">
      <header className='header'>
        <h1 className='header__title'>Дмитрий и Мария</h1>
        <p className='header__subtitle'>27.08.2023</p>
      </header>
      <section className='section'>
        <h2 className='section__title section__title_animation'>С большой радостью приглашаем вас на нашу свадьбу!</h2>
        <p className='article__info article__info_animation'>Мы будем очень рады видеть вас на своей свадьбе <br/> и надеемся, что этот день станет для нас, а также для вас, <br/> незабываемым праздником счастья и любви.</p>
      </section>
      <section className='section section_countdown'>
        <h2 className='section__title'>Обратный отсчет</h2>
        <FlipCountdown
        theme='light'
        endAt={'2023-08-27 15:00:00'}
      />
      </section>
      <section id="anim" className='section section_bg'>
        <h2 className='section__title'>Где и когда</h2>
        <article className='article'>
          <svg className={`icon ${visibleBlock&&'icon_animation'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"/></svg>
          <h3 className='article__title'>Детали мероприятия</h3>
          <p className='article__info'>Дата: <span className='article__content'>27.08.2023</span></p>
          <p className='article__info'>Время: <span className='article__content'>15:00</span></p>
          <p className='article__info'>Место: <span className='article__content'>Лесная усадьба, 21км</span></p>
        </article>
        <article className='article'>
          <svg className={`icon ${visibleBlock&&'icon_animation'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M375.7 19.7c-1.5-8-6.9-14.7-14.4-17.8s-16.1-2.2-22.8 2.4L256 61.1 173.5 4.2c-6.7-4.6-15.3-5.5-22.8-2.4s-12.9 9.8-14.4 17.8l-18.1 98.5L19.7 136.3c-8 1.5-14.7 6.9-17.8 14.4s-2.2 16.1 2.4 22.8L61.1 256 4.2 338.5c-4.6 6.7-5.5 15.3-2.4 22.8s9.8 13 17.8 14.4l98.5 18.1 18.1 98.5c1.5 8 6.9 14.7 14.4 17.8s16.1 2.2 22.8-2.4L256 450.9l82.5 56.9c6.7 4.6 15.3 5.5 22.8 2.4s12.9-9.8 14.4-17.8l18.1-98.5 98.5-18.1c8-1.5 14.7-6.9 17.8-14.4s2.2-16.1-2.4-22.8L450.9 256l56.9-82.5c4.6-6.7 5.5-15.3 2.4-22.8s-9.8-12.9-17.8-14.4l-98.5-18.1L375.7 19.7zM269.6 110l65.6-45.2 14.4 78.3c1.8 9.8 9.5 17.5 19.3 19.3l78.3 14.4L402 242.4c-5.7 8.2-5.7 19 0 27.2l45.2 65.6-78.3 14.4c-9.8 1.8-17.5 9.5-19.3 19.3l-14.4 78.3L269.6 402c-8.2-5.7-19-5.7-27.2 0l-65.6 45.2-14.4-78.3c-1.8-9.8-9.5-17.5-19.3-19.3L64.8 335.2 110 269.6c5.7-8.2 5.7-19 0-27.2L64.8 176.8l78.3-14.4c9.8-1.8 17.5-9.5 19.3-19.3l14.4-78.3L242.4 110c8.2 5.7 19 5.7 27.2 0zM256 368a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM192 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z"/></svg>
          <h3 className='article__title'>Ожидаемая погода</h3>
          <p className='article__info'>Температура: <span className='article__content'>+25</span></p>
          <p className='article__info'>Дождь: <span className='article__content'>0%</span></p>
          <p className='article__info'>Ветер: <span className='article__content'>1 м/с</span></p>
        </article>
        <div className='color-block'>
          <p className='article__title color-block__title'>Будем благодарны, если подбирая наряд вы будете придерживаться нашей цветой гаммы</p>
          <div className='color-block__list'>
            <span className='color-block__item color-block__item_green'/> 
            <span className='color-block__item color-block__item_olive'/> 
            <span className='color-block__item color-block__item_beige'/> 
            <span className='color-block__item color-block__item_rose'/> 
          </div>
        </div>
      </section>
      <section className='section section_countdown'>
        <form action="https://send.pageclip.co/SVAMWXvgsdyWetCTT0IK2i6LinepASg9" className="pageclip-form" method="post">
          <input type="name" name="name" />
          <input type="email" name="email" />
          <button type="submit" className="pageclip-form__submit">
            <span>Send</span>
          </button>
        </form>
      </section>
      <section className='section'>
        <h2 className='section__title'>Контакты</h2>
        <p className='article__info'>Координаторы: <span className='article__content'>+7-920-239-07-46</span></p>
        <p className='article__info'><span className='article__content'>+7-900-495-27-79</span></p>
        <p className='article__info'>Дмитрий: <span className='article__content'>+7-910-657-36-45</span></p>
        <p className='article__info'>Мария: <span className='article__content'>+7-910-651-79-09</span></p>
      </section>
      <section className='section__map'>
        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2557.1180027286155!2d41.76471923643562!3d52.67592239352743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sru!2sru!4v1680004120187!5m2!1sru!2sru" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </section>
    </div>
  );
}

export default App;
