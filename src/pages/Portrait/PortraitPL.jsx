import '../pages.scss';
import PortraitGallery from 'components/ImageGalleries/PortraitGallery';
import ButtonUp from 'components/ButtonUp';

const PortraitPL = () => {
  return (
    <main>
      <section className="page_title">
        <div className="container">
          <h3 className="page_about">Portfolio | Portret</h3>
        </div>
      </section>
      <div className="container">
        <PortraitGallery />
      </div>
      <ButtonUp lang="pol" />
    </main>
  );
};

export default PortraitPL;
