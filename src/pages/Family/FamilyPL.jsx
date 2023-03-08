import FamilyImgGallery from 'components/ImageGalleries/FamilyGallery';
import ButtonUp from 'components/ButtonUp';

const FamilyPL = () => {
  return (
    <main>
      <div className="container">
        <div className="col-12 page_title">
          <p className="page_about">Portfolio | Zdjęcia rodzinne</p>
        </div>
        <FamilyImgGallery />
      </div>
      <ButtonUp lang='pol' />
    </main>
  );
};

export default FamilyPL;
