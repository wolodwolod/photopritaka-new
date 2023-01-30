import '../pages.scss';

// import AllSessionsUA from 'components/AllSessions/AllSessionsUA';
import Carousel from '../../shared/services/carousel.js';
// import MainUA from 'components/Main/PhotographerUA';

import img1 from '../../shared/images/portrait-img/s/1.jpg';
import img2 from '../../shared/images/portrait-img/s/2.jpg';
import img3 from '../../shared/images/portrait-img/s/3.jpg';
import img4 from '../../shared/images/portrait-img/s/4.jpg';
import img5 from '../../shared/images/portrait-img/s/5.jpg';

import limg1 from '../../shared/images/portrait-img/l/1.jpg';
import limg2 from '../../shared/images/portrait-img/l/2.jpg';
import limg3 from '../../shared/images/portrait-img/l/3.jpg';
import limg4 from '../../shared/images/portrait-img/l/4.jpg';
import limg5 from '../../shared/images/portrait-img/l/5.jpg';

const HomePageUA = () => {
  const slideItems = [
    { id: 1, img: img1, limg: limg1, tag: 'photo1' },
    { id: 2, img: img2, limg: limg2, tag: 'photo2' },
    { id: 3, img: img3, limg: limg3, tag: 'photo3' },
    { id: 4, img: img4, limg: limg4, tag: 'photo4' },
    { id: 5, img: img5, limg: limg5, tag: 'photo5' },
  ];

  return (
    <main>
      <div className="container">
        {/* <div className="row">
          <div className="col-12">
            <div className="page_title">
              <p className="page_about">Всі сесії</p>
              {/* <h2 className="text-center text-uppercase color3">
            Це - ти, і ти - ідеал.
          </h2> */}
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}

        <Carousel items={slideItems} options={{ infinite: false }} />
         
        

        {/* <AllSessionsUA /> */}
      </div>
    </main>
  );
};

export default HomePageUA;
