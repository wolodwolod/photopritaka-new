import '../pages.scss';
import './home-page.scss';

import Carousel from '../../shared/services/carousel.js';

import img1 from '../../shared/images/portrait-img/s/1.jpg';
import img2 from '../../shared/images/family-img/s/21.jpg';
import img3 from '../../shared/images/romantic-img/s/7.jpg';
import img4 from '../../shared/images/newborns-img/s/1.jpg';
import img5 from '../../shared/images/events-img/s/14.jpg';
// import img5 from '../../shared/images/events-img/s/20.jpg';

const HomePageUA = () => {
  const slideItems = [
    { id: 1, img: img1, tag: 'Портрет' },
    { id: 2, img: img2, tag: 'Сімейне фото' },
    { id: 3, img: img3, tag: 'Романтичне фото' },
    { id: 4, img: img4, tag: 'Новонароджені' },
    { id: 5, img: img5, tag: 'Події' },
  ];

  return (
    <main>
      <div className="container">
        <Carousel items={slideItems} options={{ infinite: false }} />
      </div>
    </main>
  );
};

export default HomePageUA;
