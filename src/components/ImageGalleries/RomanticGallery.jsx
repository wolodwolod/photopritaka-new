// import PropTypes from 'prop-types';

import s from './image-gallery.module.scss';

import img1 from '../../shared/images/romantic-img/s/1.jpg';
import img2 from '../../shared/images/romantic-img/s/2.jpg';
import img3 from '../../shared/images/romantic-img/s/3.jpg';
import img4 from '../../shared/images/romantic-img/s/4.jpg';
import img5 from '../../shared/images/romantic-img/s/5.jpg';
import img6 from '../../shared/images/romantic-img/s/6.jpg';
import img7 from '../../shared/images/romantic-img/s/7.jpg';
import img8 from '../../shared/images/romantic-img/s/8.jpg';
import img9 from '../../shared/images/romantic-img/s/9.jpg';
import img10 from '../../shared/images/romantic-img/s/10.jpg';
import img11 from '../../shared/images/romantic-img/s/11.jpg';
import img12 from '../../shared/images/romantic-img/s/12.jpg';
import img13 from '../../shared/images/romantic-img/s/13.jpg';
import img14 from '../../shared/images/romantic-img/s/14.jpg';
import img15 from '../../shared/images/romantic-img/s/15.jpg';
import img16 from '../../shared/images/romantic-img/s/16.jpg';
import img17 from '../../shared/images/romantic-img/s/17.jpg';
import img18 from '../../shared/images/romantic-img/s/18.jpg';
import img19 from '../../shared/images/romantic-img/s/19.jpg';
import img20 from '../../shared/images/romantic-img/s/20.jpg';
import img21 from '../../shared/images/romantic-img/s/21.jpg';
import img22 from '../../shared/images/romantic-img/s/22.jpg';
import img23 from '../../shared/images/romantic-img/s/23.jpg';
import img24 from '../../shared/images/romantic-img/s/24.jpg';

import limg1 from '../../shared/images/romantic-img/l/1.jpg';
import limg2 from '../../shared/images/romantic-img/l/2.jpg';
import limg3 from '../../shared/images/romantic-img/l/3.jpg';
import limg4 from '../../shared/images/romantic-img/l/4.jpg';
import limg5 from '../../shared/images/romantic-img/l/5.jpg';
import limg6 from '../../shared/images/romantic-img/l/6.jpg';
import limg7 from '../../shared/images/romantic-img/l/7.jpg';
import limg8 from '../../shared/images/romantic-img/l/8.jpg';
import limg9 from '../../shared/images/romantic-img/l/9.jpg';
import limg10 from '../../shared/images/romantic-img/l/10.jpg';
import limg11 from '../../shared/images/romantic-img/l/11.jpg';
import limg12 from '../../shared/images/romantic-img/l/12.jpg';
import limg13 from '../../shared/images/romantic-img/l/13.jpg';
import limg14 from '../../shared/images/romantic-img/l/14.jpg';
import limg15 from '../../shared/images/romantic-img/l/15.jpg';
import limg16 from '../../shared/images/romantic-img/l/16.jpg';
import limg17 from '../../shared/images/romantic-img/l/17.jpg';
import limg18 from '../../shared/images/romantic-img/l/18.jpg';
import limg19 from '../../shared/images/romantic-img/l/19.jpg';
import limg20 from '../../shared/images/romantic-img/l/20.jpg';
import limg21 from '../../shared/images/romantic-img/l/21.jpg';
import limg22 from '../../shared/images/romantic-img/l/22.jpg';
import limg24 from '../../shared/images/romantic-img/l/24.jpg';

import Gallery from './GalleryMasornyFancybox';

const RomanticGallery = () => {
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
    { id: 13, img: img13, limg: limg13, tag: 'photo13' },
    { id: 14, img: img14, limg: limg14, tag: 'photo14' },
    { id: 15, img: img15, limg: limg15, tag: 'photo15' },
    { id: 16, img: img16, limg: limg16, tag: 'photo16' },
    { id: 17, img: img17, limg: limg17, tag: 'photo17' },
    { id: 18, img: img18, limg: limg18, tag: 'photo18' },
    { id: 19, img: img19, limg: limg19, tag: 'photo19' },
    { id: 20, img: img20, limg: limg20, tag: 'photo20' },
    { id: 21, img: img21, limg: limg21, tag: 'photo21' },
    { id: 22, img: img22, limg: limg22, tag: 'photo22' },
    { id: 24, img: img24, limg: limg24, tag: 'photo24' },
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

export default RomanticGallery;
