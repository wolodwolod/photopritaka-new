// import PropTypes from 'prop-types';
// import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { useState, useCallback } from 'react';
import s from './image-gallery.module.scss';
import Modal from 'components/Modal';
// import { memo } from 'react';
import img1 from '../../shared/images/family-img/s/1.jpg';
import img2 from '../../shared/images/family-img/s/2.jpg';
import img3 from '../../shared/images/family-img/s/3.jpg';
import img4 from '../../shared/images/family-img/s/4.jpg';
import img5 from '../../shared/images/family-img/s/5.jpg';
import img6 from '../../shared/images/family-img/s/6.jpg';
import img7 from '../../shared/images/family-img/s/7.jpg';
import img8 from '../../shared/images/family-img/s/8.jpg';
import img9 from '../../shared/images/family-img/s/9.jpg';
import img10 from '../../shared/images/family-img/s/10.jpg';
import img11 from '../../shared/images/family-img/s/11.jpg';
import img12 from '../../shared/images/family-img/s/12.jpg';
import img13 from '../../shared/images/family-img/s/13.jpg';
import img14 from '../../shared/images/family-img/s/14.jpg';
import img15 from '../../shared/images/family-img/s/15.jpg';
import img16 from '../../shared/images/family-img/s/16.jpg';
import img17 from '../../shared/images/family-img/s/17.jpg';
import img18 from '../../shared/images/family-img/s/18.jpg';
import img19 from '../../shared/images/family-img/s/19.jpg';
import img20 from '../../shared/images/family-img/s/20.jpg';
import img21 from '../../shared/images/family-img/s/21.jpg';
import img22 from '../../shared/images/family-img/s/22.jpg';
import img23 from '../../shared/images/family-img/s/23.jpg';

import limg1 from '../../shared/images/family-img/l/1.jpg';
import limg2 from '../../shared/images/family-img/l/2.jpg';
import limg3 from '../../shared/images/family-img/l/3.jpg';
import limg4 from '../../shared/images/family-img/l/4.jpg';
import limg5 from '../../shared/images/family-img/l/5.jpg';
import limg6 from '../../shared/images/family-img/l/6.jpg';
import limg7 from '../../shared/images/family-img/l/7.jpg';
import limg8 from '../../shared/images/family-img/l/8.jpg';
import limg9 from '../../shared/images/family-img/l/9.jpg';
import limg10 from '../../shared/images/family-img/l/10.jpg';
import limg11 from '../../shared/images/family-img/l/11.jpg';
import limg12 from '../../shared/images/family-img/l/12.jpg';
import limg13 from '../../shared/images/family-img/l/13.jpg';
import limg14 from '../../shared/images/family-img/l/14.jpg';
import limg15 from '../../shared/images/family-img/l/15.jpg';
import limg16 from '../../shared/images/family-img/l/16.jpg';
import limg17 from '../../shared/images/family-img/l/17.jpg';
import limg18 from '../../shared/images/family-img/l/18.jpg';
import limg19 from '../../shared/images/family-img/l/19.jpg';
import limg20 from '../../shared/images/family-img/l/20.jpg';
import limg21 from '../../shared/images/family-img/l/21.jpg';
import limg22 from '../../shared/images/family-img/l/22.jpg';
import limg23 from '../../shared/images/family-img/l/23.jpg';

export const ImgFamilyGallery = ({ onClick }) => {
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
                      
              <div className="col-lg-4 col-md-6 col-sm-12"
                key={1}
                // className={s.GalleryIitem}
                onClick={() => {
                  openModal(limg1);
                }}>
              
                <img className={s.GalleryItem__Img} src={img1} alt="photo1" />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12"
                key={2}
                // className={s.GalleryIitem}
                onClick={() => {
                  openModal(limg2);
                }}
              >
                <img className={s.GalleryItem__Img} src={img2} alt="photo2" />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12"
                key={3}
                // className={s.GalleryIitem}
                onClick={() => {
                  openModal(limg3);
                }}
              >
                <img className={s.GalleryItem__Img} src={img3} alt="photo3" />
              </div>
              <div
                key={4}
                className="col-lg-4 col-md-6 col-sm-12"
                onClick={() => {
                  openModal(limg4);
                }}
              >
                <img className={s.GalleryItem__Img} src={img4} alt="photo4" />
              </div>
              <div
                key={5}
                className="col-lg-4 col-md-6 col-sm-12"
                onClick={() => {
                  openModal(limg5);
                }}
              >
                <img className={s.GalleryItem__Img} src={img5} alt="photo5" />
              </div>
              <div
                key={6}
                className="col-lg-4 col-md-6 col-sm-12"
                onClick={() => {
                  openModal(limg6);
                }}
              >
                <img className={s.GalleryItem__Img} src={img6} alt="photo6" />
              </div>
              <div
                key={7}
                className="col-lg-4 col-md-6 col-sm-12"
                onClick={() => {
                  openModal(limg7);
                }}
              >
                <img className={s.GalleryItem__Img} src={img7} alt="photo7" />
              </div>
              <div
                key={8}
                className="col-lg-4 col-md-6 col-sm-12"
                onClick={() => {
                  openModal(limg8);
                }}
              >
                <img className={s.GalleryItem__Img} src={img8} alt="photo8" />
              </div>
              <div
                key={9}
                className="col-lg-4 col-md-6 col-sm-12"
                onClick={() => {
                  openModal(limg9);
                }}
              >
                <img className={s.GalleryItem__Img} src={img9} alt="photo9" />
              </div>
              <div
                key={10}
                className="col-lg-4 col-md-6 col-sm-12"
                onClick={() => {
                  openModal(limg10);
                }}
              >
                <img className={s.GalleryItem__Img} src={img10} alt="photo10" />
              </div>
              <div
                key={11}
                className="col-lg-4 col-md-6 col-sm-12"
                onClick={() => {
                  openModal(limg11);
                }}
              >
                <img className={s.GalleryItem__Img} src={img11} alt="photo11" />
              </div>
              <div
                key={12}
                className="col-lg-4 col-md-6 col-sm-12"
                onClick={() => {
                  openModal(limg12);
                }}
              >
                <img className={s.GalleryItem__Img} src={img12} alt="photo12" />
              </div>
              <div
                key={13}
                className="col-lg-4 col-md-6 col-sm-12"
                onClick={() => {
                  openModal(limg13);
                }}
              >
                <img className={s.GalleryItem__Img} src={img13} alt="photo13" />
              </div>
              <div
                key={14}
                className="col-lg-4 col-md-6 col-sm-12"
                onClick={() => {
                  openModal(limg14);
                }}
              >
                <img className={s.GalleryItem__Img} src={img14} alt="photo14" />
              </div>
              <div
                key={15}
                className="col-lg-4 col-md-6 col-sm-12"
                onClick={() => {
                  openModal(limg15);
                }}
              >
                <img className={s.GalleryItem__Img} src={img15} alt="photo15" />
              </div>
              <div
                key={16}
                className="col-lg-4 col-md-6 col-sm-12"
                onClick={() => {
                  openModal(limg16);
                }}
              >
                <img className={s.GalleryItem__Img} src={img16} alt="photo16" />
              </div>
              <div
                key={17}
                className="col-lg-4 col-md-6 col-sm-12"
                onClick={() => {
                  openModal(limg17);
                }}
              >
                <img className={s.GalleryItem__Img} src={img17} alt="photo17" />
              </div>
              <div
                key={18}
                className="col-lg-4 col-md-6 col-sm-12"
                onClick={() => {
                  openModal(limg18);
                }}
              >
                <img className={s.GalleryItem__Img} src={img18} alt="photo18" />
              </div>
              <div
                key={19}
                className="col-lg-4 col-md-6 col-sm-12"
                onClick={() => {
                  openModal(limg19);
                }}
              >
                <img className={s.GalleryItem__Img} src={img19} alt="photo19" />
              </div>
              <div
                key={20}
                className="col-lg-4 col-md-6 col-sm-12"
                onClick={() => {
                  openModal(limg20);
                }}
              >
                <img className={s.GalleryItem__Img} src={img20} alt="photo20" />
              </div>
              <div
                key={21}
                className="col-lg-4 col-md-6 col-sm-12"
                onClick={() => {
                  openModal(limg21);
                }}
              >
                <img className={s.GalleryItem__Img} src={img21} alt="photo21" />
              </div>
              <div
                key={22}
                className="col-lg-4 col-md-6 col-sm-12"
                onClick={() => {
                  openModal(limg22);
                }}
              >
                <img className={s.GalleryItem__Img} src={img22} alt="photo22" />
              </div>
              <div
                key={23}
                className="col-lg-4 col-md-6 col-sm-12"
                onClick={() => {
                  openModal(limg23);
                }}
              >
                <img className={s.GalleryItem__Img} src={img23} alt="photo23" />
              </div>
            
          </div>

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
      {/* </div> */}
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

export default ImgFamilyGallery;
