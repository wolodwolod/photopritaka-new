import PortraitGallery from 'components/ImageGalleries/PortraitGallery';

import '../pages.scss';

import ButtonUp from 'components/ButtonUp';

const PortraitUA = () => {
  return (
    <main>
      <div className="container">
        <div className="col-12 page_title">
          <p className="page_about">Портфоліо | Портрет</p>
        </div>
        <PortraitGallery />
      </div>
      <ButtonUp />
    </main>
  );
};

export default PortraitUA;
