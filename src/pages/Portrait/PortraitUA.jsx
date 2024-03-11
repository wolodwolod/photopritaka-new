import PortraitGallery from 'components/ImageGalleries/PortraitGallery';

import '../pages.scss';

import ButtonUp from 'components/ButtonUp';

const PortraitUA = () => {
  return (
    <main>
      <section className="page_title">
        <div className="container">
          <h3 className="page_about">Портфоліо | Портрет</h3>
        </div>
      </section>
      <div className="container">
        <PortraitGallery />
      </div>
      <ButtonUp lang="ukr" />
    </main>
  );
};

export default PortraitUA;
