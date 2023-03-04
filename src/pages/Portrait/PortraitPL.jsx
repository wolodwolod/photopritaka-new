import PortraitGallery from 'components/ImageGalleries/PortraitGallery';
import '../pages.scss';

const PortraitPL = () => {
  return (
    <main>
      <div className="container">
        <div className="col-12 page_title">
          <p className="page_about">Portfolio | Portret</p>
        </div>
        <PortraitGallery />
      </div>
    </main>
  );
};

export default PortraitPL;
