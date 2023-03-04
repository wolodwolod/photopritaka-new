import FamilyImgGallery from 'components/ImageGalleries/FamilyGallery';

const FamilyPL = () => {
  return (
    <main>
      <div className="container">
        <div className="col-12 page_title">
          <p className="page_about">Portfolio | Zdjęcia rodzinne</p>
        </div>
        <FamilyImgGallery />
      </div>
    </main>
  );
};

export default FamilyPL;
