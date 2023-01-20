import { useState, useCallback } from 'react';
// import Masonry from 'react-masonry-css';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import Modal from 'components/Modal';
import s from './image-gallery.module.scss';
import './masonry.scss';

const Gallery = ({ imgs }) => {
    const [modal, setModal] = useState({
      open: false,
      lImg: null,
      tag: '',
    });

    const openModal = useCallback((limg, tag) => {
      setModal({
        open: true,
        lImg: limg,
        tag: { tag },
      });
    }, []);

    const closeModal = () => {
      setModal({
        open: false,
        lImg: null,
        tag: '',
      });
    };

  console.log(imgs);

  const imgsList = imgs.map(function ({ id, img, limg, tag }) {
    return (
      <div
      
      
        key={id}
        onClick={() => {
          openModal(limg, tag);
        }}
      >
        <img className={s.GalleryItem__Img} src={img} alt={tag} />
      </div>
    );
  });

  return (
    <div className="container">
     
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter={'10px'}>{imgsList}</Masonry>
        </ResponsiveMasonry>
      

      {modal.open && (
        <Modal onClose={closeModal}>
          <img className={s.Modal_Img} src={modal.lImg} alt={modal.tag} />
        </Modal>
      )}
    </div>
  );
};

export default Gallery;
