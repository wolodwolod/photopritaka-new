import s from './image-gallery.module.scss';
import { useState, useCallback } from 'react';
import Modal from 'components/Modal';

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

  const Imgs = ({ imgs }) => {
    
    return imgs.map(({ id, img, limg, tag }) => (
      <div
        key={id}
        className="col-lg-4 col-md-6 col-sm-12"
        onClick={() => {
          openModal(limg, tag);
        }}
      >
        <img className={s.GalleryItem__Img} src={img} alt={tag} />
      </div>
    ));
  };

  return (
    <div className="container">
      <div className="row">
        <Imgs imgs={imgs} />
      </div>

      {modal.open && (
        <Modal onClose={closeModal}>
          <img className={s.Modal_Img} src={modal.lImg} alt={modal.tag} />
        </Modal>
      )}
    </div>
  );
};

export default Gallery;
