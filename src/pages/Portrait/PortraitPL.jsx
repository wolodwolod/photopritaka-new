import '../pages.scss';
import PortraitGallery from 'components/ImageGalleries/PortraitGallery';
import ButtonUp from 'components/ButtonUp';


const PortraitPL = () => {
  return (
    <main>
      <div className="container">
        <div className="col-12 page_title">
          <p className="page_about">Portfolio | Portret</p>
        </div>
        <PortraitGallery />
      </div>
      <ButtonUp />
    </main>
  );
};

export default PortraitPL;
