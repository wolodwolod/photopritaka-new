// import PropTypes from 'prop-types';
// import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { useState, useCallback } from 'react';
import s from './image-gallery.module.scss';
import Modal from 'components/Modal';

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

export const NewbornsGallery = ({ onClick }) => {
  
  const imgs = [
    { img: img1, limg: limg1, tag: 'photo1' },
    { img: img2, limg: limg2, tag: 'photo2' },
    { img: img3, limg: limg3, tag: 'photo3' },
    {img:img4, limg:limg4, tag:'photo4'},
    {img:img5, limg:limg5, tag:'photo5'},
    {img:img6, limg:limg6, tag:'photo6'},
    {img:img7, limg:limg7, tag:'photo7'},
    {img:img8, limg:limg8, tag:'photo8'},
    {img:img9, limg:limg9, tag:'photo9'},
    {img:img10, limg:limg10, tag:'photo10'},
    {img:img11, limg:limg11, tag:'photo11'},
    {img:img12, limg:limg12, tag:'photo12'},
  ];

  const ImgGallery = () => {
    console.log(imgs)
    return imgs.map(({ img, limg, tag }) => (
      <div
        className="col-lg-4 col-md-6 col-sm-12"
        onClick={() => {
          openModal(limg, tag);
        }}
      >
        <img className={s.GalleryItem__Img} src={img} alt={tag} />
      </div>
    ));
  };

  const [modal, setModal] = useState({
    open: false,
    modalImg: null,
    tag: '',
  });

  const openModal = useCallback((limg, tag) => {
    setModal({
      open: true,
      modalImg: limg,
      tag: {tag},
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
        <ImgGallery />
        </div>

        {modal.open && (
          <Modal onClose={closeModal}>
            <img className={s.Modal_Img} src={modal.modalImg} alt={modal.alt} />
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

export default NewbornsGallery;
