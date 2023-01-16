// import PropTypes from 'prop-types';
// import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { useState, useCallback } from 'react';
import s from './image-gallery.module.scss';
import Modal from 'components/Modal';
// import { memo } from 'react';
import img1 from '../../shared/images/events-img/s/1.jpg';
import img2 from '../../shared/images/events-img/s/2.jpg';
import img3 from '../../shared/images/events-img/s/3.jpg';
import img4 from '../../shared/images/events-img/s/4.jpg';
import img5 from '../../shared/images/events-img/s/5.jpg';
import img6 from '../../shared/images/events-img/s/6.jpg';
import img7 from '../../shared/images/events-img/s/7.jpg';
import img8 from '../../shared/images/events-img/s/8.jpg';
import img9 from '../../shared/images/events-img/s/9.jpg';
import img10 from '../../shared/images/events-img/s/10.jpg';
import img11 from '../../shared/images/events-img/s/11.jpg';
import img12 from '../../shared/images/events-img/s/12.jpg';
import img13 from '../../shared/images/events-img/s/13.jpg';
import img14 from '../../shared/images/events-img/s/14.jpg';
import img15 from '../../shared/images/events-img/s/15.jpg';
import img16 from '../../shared/images/events-img/s/16.jpg';
import img17 from '../../shared/images/events-img/s/17.jpg';
import img18 from '../../shared/images/events-img/s/18.jpg';
import img19 from '../../shared/images/events-img/s/19.jpg';
import img20 from '../../shared/images/events-img/s/20.jpg';
import img21 from '../../shared/images/events-img/s/21.jpg';
import img22 from '../../shared/images/events-img/s/22.jpg';
import img23 from '../../shared/images/events-img/s/23.jpg';
import img24 from '../../shared/images/events-img/s/24.jpg';
import img25 from '../../shared/images/events-img/s/25.jpg';
import img26 from '../../shared/images/events-img/s/26.jpg';
import img27 from '../../shared/images/events-img/s/27.jpg';

import limg1 from '../../shared/images/events-img/l/1.jpg';
import limg2 from '../../shared/images/events-img/l/2.jpg';
import limg3 from '../../shared/images/events-img/l/3.jpg';
import limg4 from '../../shared/images/events-img/l/4.jpg';
import limg5 from '../../shared/images/events-img/l/5.jpg';
import limg6 from '../../shared/images/events-img/l/6.jpg';
import limg7 from '../../shared/images/events-img/l/7.jpg';
import limg8 from '../../shared/images/events-img/l/8.jpg';
import limg9 from '../../shared/images/events-img/l/9.jpg';
import limg10 from '../../shared/images/events-img/l/10.jpg';
import limg11 from '../../shared/images/events-img/l/11.jpg';
import limg12 from '../../shared/images/events-img/l/12.jpg';
import limg13 from '../../shared/images/events-img/l/13.jpg';
import limg14 from '../../shared/images/events-img/l/14.jpg';
import limg15 from '../../shared/images/events-img/l/15.jpg';
import limg16 from '../../shared/images/events-img/l/16.jpg';
import limg17 from '../../shared/images/events-img/l/17.jpg';
import limg18 from '../../shared/images/events-img/l/18.jpg';
import limg19 from '../../shared/images/events-img/l/19.jpg';
import limg20 from '../../shared/images/events-img/l/20.jpg';
import limg21 from '../../shared/images/events-img/l/21.jpg';
import limg22 from '../../shared/images/events-img/l/22.jpg';
import limg23 from '../../shared/images/events-img/l/23.jpg';
import limg24 from '../../shared/images/events-img/l/24.jpg';
import limg25 from '../../shared/images/events-img/l/25.jpg';
import limg26 from '../../shared/images/events-img/l/26.jpg';
import limg27 from '../../shared/images/events-img/l/27.jpg';

export const ImgEventsGallery = ({ onClick }) => {
  const [modal, setModal] = useState({
    open: false,
    modalImg: null,
    alt: '',
  });

  const openModal = useCallback(modalImg => {
    setModal({
      open: true,
      modalImg: modalImg,
      alt: '',
    });
  }, []);

  const closeModal = () => {
    setModal({
      open: false,
      modalImg: null,
      alt: '',
    });
  };
  return (
    <section className={s.Img_gallary}>
      <div className="container">
        <div className="row">
          <ul className={s.Gallery}>
            <li
              key={1}
              className={s.GalleryIitem}
              onClick={() => {
                openModal(limg1);
              }}
            >
              <img className={s.GalleryItem__Img} src={img1} alt="photo1" />
            </li>
            <li
              key={2}
              className={s.GalleryIitem}
              onClick={() => {
                openModal(limg2);
              }}
            >
              <img className={s.GalleryItem__Img} src={img2} alt="photo2" />
            </li>
            <li
              key={3}
              className={s.GalleryIitem}
              onClick={() => {
                openModal(limg3);
              }}
            >
              <img className={s.GalleryItem__Img} src={img3} alt="photo3" />
            </li>
            <li
              key={4}
              className={s.GalleryIitem}
              onClick={() => {
                openModal(limg4);
              }}
            >
              <img className={s.GalleryItem__Img} src={img4} alt="photo4" />
            </li>
            <li
              key={5}
              className={s.GalleryIitem}
              onClick={() => {
                openModal(limg5);
              }}
            >
              <img className={s.GalleryItem__Img} src={img5} alt="photo5" />
            </li>
            <li
              key={6}
              className={s.GalleryIitem}
              onClick={() => {
                openModal(limg6);
              }}
            >
              <img className={s.GalleryItem__Img} src={img6} alt="photo6" />
            </li>
            <li
              key={7}
              className={s.GalleryIitem}
              onClick={() => {
                openModal(limg7);
              }}
            >
              <img className={s.GalleryItem__Img} src={img7} alt="photo7" />
            </li>
            <li
              key={8}
              className={s.GalleryIitem}
              onClick={() => {
                openModal(limg8);
              }}
            >
              <img className={s.GalleryItem__Img} src={img8} alt="photo8" />
            </li>
            <li
              key={9}
              className={s.GalleryIitem}
              onClick={() => {
                openModal(limg9);
              }}
            >
              <img className={s.GalleryItem__Img} src={img9} alt="photo9" />
            </li>
            <li
              key={10}
              className={s.GalleryIitem}
              onClick={() => {
                openModal(limg10);
              }}
            >
              <img className={s.GalleryItem__Img} src={img10} alt="photo10" />
            </li>
            <li
              key={11}
              className={s.GalleryIitem}
              onClick={() => {
                openModal(limg11);
              }}
            >
              <img className={s.GalleryItem__Img} src={img11} alt="photo11" />
            </li>
            <li
              key={12}
              className={s.GalleryIitem}
              onClick={() => {
                openModal(limg12);
              }}
            >
              <img className={s.GalleryItem__Img} src={img12} alt="photo12" />
            </li>
            <li
              key={13}
              className={s.GalleryIitem}
              onClick={() => {
                openModal(limg13);
              }}
            >
              <img className={s.GalleryItem__Img} src={img13} alt="photo13" />
            </li>
            <li
              key={14}
              className={s.GalleryIitem}
              onClick={() => {
                openModal(limg14);
              }}
            >
              <img className={s.GalleryItem__Img} src={img14} alt="photo14" />
            </li>
            <li
              key={15}
              className={s.GalleryIitem}
              onClick={() => {
                openModal(limg15);
              }}
            >
              <img className={s.GalleryItem__Img} src={img15} alt="photo15" />
            </li>
            <li
              key={16}
              className={s.GalleryIitem}
              onClick={() => {
                openModal(limg16);
              }}
            >
              <img className={s.GalleryItem__Img} src={img16} alt="photo16" />
            </li>
            <li
              key={17}
              className={s.GalleryIitem}
              onClick={() => {
                openModal(limg17);
              }}
            >
              <img className={s.GalleryItem__Img} src={img17} alt="photo17" />
            </li>
            <li
              key={18}
              className={s.GalleryIitem}
              onClick={() => {
                openModal(limg18);
              }}
            >
              <img className={s.GalleryItem__Img} src={img18} alt="photo18" />
            </li>
            <li
              key={19}
              className={s.GalleryIitem}
              onClick={() => {
                openModal(limg19);
              }}
            >
              <img className={s.GalleryItem__Img} src={img19} alt="photo19" />
            </li>
            <li
              key={20}
              className={s.GalleryIitem}
              onClick={() => {
                openModal(limg20);
              }}
            >
              <img className={s.GalleryItem__Img} src={img20} alt="photo20" />
            </li>
            <li
              key={21}
              className={s.GalleryIitem}
              onClick={() => {
                openModal(limg21);
              }}
            >
              <img className={s.GalleryItem__Img} src={img21} alt="photo21" />
            </li>
            <li
              key={22}
              className={s.GalleryIitem}
              onClick={() => {
                openModal(limg22);
              }}
            >
              <img className={s.GalleryItem__Img} src={img22} alt="photo22" />
            </li>
            <li
              key={23}
              className={s.GalleryIitem}
              onClick={() => {
                openModal(limg23);
              }}
            >
              <img className={s.GalleryItem__Img} src={img23} alt="photo23" />
            </li>
            <li
              key={24}
              className={s.GalleryIitem}
              onClick={() => {
                openModal(limg24);
              }}
            >
              <img className={s.GalleryItem__Img} src={img24} alt="photo24" />
            </li>
            <li
              key={25}
              className={s.GalleryIitem}
              onClick={() => {
                openModal(limg25);
              }}
            >
              <img className={s.GalleryItem__Img} src={img25} alt="photo25" />
            </li>
            <li
              key={26}
              className={s.GalleryIitem}
              onClick={() => {
                openModal(limg26);
              }}
            >
              <img className={s.GalleryItem__Img} src={img26} alt="photo26" />
            </li>
            <li
              key={27}
              className={s.GalleryIitem}
              onClick={() => {
                openModal(limg27);
              }}
            >
              <img className={s.GalleryItem__Img} src={img27} alt="photo27" />
            </li>
          </ul>
          {modal.open && (
            <Modal onClose={closeModal}>
              <img
                className={s.Modal_Img}
                src={modal.modalImg}
                alt={modal.alt}
              />
            </Modal>
          )}
        </div>
      </div>
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

export default ImgEventsGallery;
