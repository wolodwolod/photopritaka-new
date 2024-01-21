// import PropTypes from 'prop-types';

import s from './image-gallery.module.scss';

import img1 from '../../shared/images/portrait-img/s/1.jpg';
import img2 from '../../shared/images/portrait-img/s/2.jpg';
import img3 from '../../shared/images/portrait-img/s/3.jpg';
import img4 from '../../shared/images/portrait-img/s/4.jpg';
import img5 from '../../shared/images/portrait-img/s/5.jpg';
import img6 from '../../shared/images/portrait-img/s/6.jpg';
import img7 from '../../shared/images/portrait-img/s/7.jpg';
import img8 from '../../shared/images/portrait-img/s/8.jpg';
import img9 from '../../shared/images/portrait-img/s/9.jpg';
import img10 from '../../shared/images/portrait-img/s/10.jpg';
import img11 from '../../shared/images/portrait-img/s/11.jpg';
import img12 from '../../shared/images/portrait-img/s/12.jpg';
import img13 from '../../shared/images/portrait-img/s/13.jpg';
import img14 from '../../shared/images/portrait-img/s/14.jpg';
import img15 from '../../shared/images/portrait-img/s/15.jpg';
import img16 from '../../shared/images/portrait-img/s/16.jpg';
import img17 from '../../shared/images/portrait-img/s/17.jpg';
import img18 from '../../shared/images/portrait-img/s/18.jpg';
import img19 from '../../shared/images/portrait-img/s/19.jpg';
import img20 from '../../shared/images/portrait-img/s/20.jpg';
import img21 from '../../shared/images/portrait-img/s/21.jpg';
import img22 from '../../shared/images/portrait-img/s/22.jpg';
import img23 from '../../shared/images/portrait-img/s/23.jpg';
import img24 from '../../shared/images/portrait-img/s/24.jpg';
import img25 from '../../shared/images/portrait-img/s/25.jpg';
import img26 from '../../shared/images/portrait-img/s/26.jpg';
import img27 from '../../shared/images/portrait-img/s/27.jpg';
import img28 from '../../shared/images/portrait-img/s/28.jpg';
import img29 from '../../shared/images/portrait-img/s/29.jpg';
import img30 from '../../shared/images/portrait-img/s/30.jpg';
import img31 from '../../shared/images/portrait-img/s/31.jpg';
import img32 from '../../shared/images/portrait-img/s/32.jpg';
import img33 from '../../shared/images/portrait-img/s/33.jpg';
import img34 from '../../shared/images/portrait-img/s/34.jpg';
import img35 from '../../shared/images/portrait-img/s/35.jpg';
import img36 from '../../shared/images/portrait-img/s/36.jpg';
import img37 from '../../shared/images/portrait-img/s/37.jpg';
import img38 from '../../shared/images/portrait-img/s/38.jpg';
import img39 from '../../shared/images/portrait-img/s/39.jpg';
import img40 from '../../shared/images/portrait-img/s/40.jpg';
import img41 from '../../shared/images/portrait-img/s/41.jpg';
import img42 from '../../shared/images/portrait-img/s/42.jpg';


import limg1 from '../../shared/images/portrait-img/l/1.jpg';
import limg2 from '../../shared/images/portrait-img/l/2.jpg';
import limg3 from '../../shared/images/portrait-img/l/3.jpg';
import limg4 from '../../shared/images/portrait-img/l/4.jpg';
import limg5 from '../../shared/images/portrait-img/l/5.jpg';
import limg6 from '../../shared/images/portrait-img/l/6.jpg';
import limg7 from '../../shared/images/portrait-img/l/7.jpg';
import limg8 from '../../shared/images/portrait-img/l/8.jpg';
import limg9 from '../../shared/images/portrait-img/l/9.jpg';
import limg10 from '../../shared/images/portrait-img/l/10.jpg';
import limg11 from '../../shared/images/portrait-img/l/11.jpg';
import limg12 from '../../shared/images/portrait-img/l/12.jpg';
import limg13 from '../../shared/images/portrait-img/l/13.jpg';
import limg14 from '../../shared/images/portrait-img/l/14.jpg';
import limg15 from '../../shared/images/portrait-img/l/15.jpg';
import limg16 from '../../shared/images/portrait-img/l/16.jpg';
import limg17 from '../../shared/images/portrait-img/l/17.jpg';
import limg18 from '../../shared/images/portrait-img/l/18.jpg';
import limg19 from '../../shared/images/portrait-img/l/19.jpg';
import limg20 from '../../shared/images/portrait-img/l/20.jpg';
import limg21 from '../../shared/images/portrait-img/l/21.jpg';
import limg22 from '../../shared/images/portrait-img/l/22.jpg';
import limg23 from '../../shared/images/portrait-img/l/23.jpg';
import limg24 from '../../shared/images/portrait-img/l/24.jpg';
import limg25 from '../../shared/images/portrait-img/l/25.jpg';
import limg26 from '../../shared/images/portrait-img/l/26.jpg';
import limg27 from '../../shared/images/portrait-img/l/27.jpg';
import limg28 from '../../shared/images/portrait-img/l/28.jpg';
import limg29 from '../../shared/images/portrait-img/l/29.jpg';
import limg30 from '../../shared/images/portrait-img/l/30.jpg';
import limg31 from '../../shared/images/portrait-img/l/31.jpg';
import limg32 from '../../shared/images/portrait-img/l/32.jpg';
import limg33 from '../../shared/images/portrait-img/l/33.jpg';
import limg34 from '../../shared/images/portrait-img/l/34.jpg';
import limg35 from '../../shared/images/portrait-img/l/35.jpg';
import limg36 from '../../shared/images/portrait-img/l/36.jpg';
import limg37 from '../../shared/images/portrait-img/l/37.jpg';
import limg38 from '../../shared/images/portrait-img/l/38.jpg';
import limg39 from '../../shared/images/portrait-img/l/39.jpg';
import limg40 from '../../shared/images/portrait-img/l/40.jpg';
import limg41 from '../../shared/images/portrait-img/l/41.jpg';
import limg42 from '../../shared/images/portrait-img/l/42.jpg';

import Gallery from './GalleryMasornyFancybox';

const PortraitGallery = () => {
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
    { id: 23, img: img23, limg: limg23, tag: 'photo23' },
    { id: 24, img: img24, limg: limg24, tag: 'photo24' },
    { id: 25, img: img25, limg: limg25, tag: 'photo25' },
    { id: 26, img: img26, limg: limg26, tag: 'photo26' },
    { id: 27, img: img27, limg: limg27, tag: 'photo27' },
    { id: 28, img: img28, limg: limg28, tag: 'photo28' },
    { id: 29, img: img29, limg: limg29, tag: 'photo29' },
    { id: 30, img: img30, limg: limg30, tag: 'photo30' },
    { id: 31, img: img31, limg: limg31, tag: 'photo31' },
    { id: 32, img: img32, limg: limg32, tag: 'photo32' },
    { id: 33, img: img33, limg: limg33, tag: 'photo33' },
    { id: 34, img: img34, limg: limg34, tag: 'photo34' },
    { id: 35, img: img35, limg: limg35, tag: 'photo35' },
    { id: 36, img: img36, limg: limg36, tag: 'photo36' },
    { id: 37, img: img37, limg: limg37, tag: 'photo37' },
    { id: 38, img: img38, limg: limg38, tag: 'photo38' },
    { id: 39, img: img39, limg: limg39, tag: 'photo39' },
    { id: 40, img: img40, limg: limg40, tag: 'photo40' },
    { id: 41, img: img41, limg: limg41, tag: 'photo41' },
    { id: 42, img: img42, limg: limg42, tag: 'photo42' },
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

export default PortraitGallery;
