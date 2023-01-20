// import PropTypes from 'prop-types';

import s from './image-gallery.module.scss';

// import { memo } from 'react';
import img1 from '../../shared/images/newborns-img/s/1.jpg';
import img2 from '../../shared/images/newborns-img/s/2.jpg';
import img3 from '../../shared/images/newborns-img/s/3.jpg';
import img4 from '../../shared/images/newborns-img/s/4.jpg';
import img5 from '../../shared/images/newborns-img/s/5.jpg';
import img6 from '../../shared/images/newborns-img/s/6.jpg';
import img7 from '../../shared/images/newborns-img/s/7.jpg';
import img8 from '../../shared/images/newborns-img/s/8.jpg';
import img9 from '../../shared/images/newborns-img/s/9.jpg';
import img10 from '../../shared/images/newborns-img/s/10.jpg';
import img11 from '../../shared/images/newborns-img/s/11.jpg';
import img12 from '../../shared/images/newborns-img/s/12.jpg';

import limg1 from '../../shared/images/newborns-img/l/1.jpg';
import limg2 from '../../shared/images/newborns-img/l/2.jpg';
import limg3 from '../../shared/images/newborns-img/l/3.jpg';
import limg4 from '../../shared/images/newborns-img/l/4.jpg';
import limg5 from '../../shared/images/newborns-img/l/5.jpg';
import limg6 from '../../shared/images/newborns-img/l/6.jpg';
import limg7 from '../../shared/images/newborns-img/l/7.jpg';
import limg8 from '../../shared/images/newborns-img/l/8.jpg';
import limg9 from '../../shared/images/newborns-img/l/9.jpg';
import limg10 from '../../shared/images/newborns-img/l/10.jpg';
import limg11 from '../../shared/images/newborns-img/l/11.jpg';
import limg12 from '../../shared/images/newborns-img/l/12.jpg';

import Gallery from './GalleryMasornyFancybox';

const NewbornsGallery = () => {
  
  const imgs = [
    { id: 1, img: img1, limg: limg1, tag: 'photo1' },
    { id: 2, img: img2, limg: limg2, tag: 'photo2' },
    { id: 3, img: img3, limg: limg3, tag: 'photo3' },
    { id: 4, img: img4, limg: limg4, tag: 'photo4' },
    { id: 5, img: img5, limg: limg5, tag: 'photo5' },
    { id: 6, img: img6, limg: limg6, tag: 'photo6' },
    { id: 7, img: img7, limg: limg7, tag: 'photo7' },
    { id: 8, img: img8, limg: limg8, tag: 'photo8' },
    { id: 9, img: img9, limg: limg9, tag: 'photo9' },
    { id: 10, img: img10, limg: limg10, tag: 'photo10' },
    { id: 11, img: img11, limg: limg11, tag: 'photo11' },
    { id: 12, img: img12, limg: limg12, tag: 'photo12' },
  ];

  return (
    <section className={s.Img_gallary}>
      <Gallery imgs={imgs} />
    </section>
  );
};

// ImageGallery.propTypes = {
//   images: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       webformatURL: PropTypes.string.isRequired,
//       largeImageURL: PropTypes.string.isRequired,
//       tags: PropTypes.string.isRequired,
//     })
//   ),
//   onClick: PropTypes.func.isRequired,
// };

export default NewbornsGallery;
