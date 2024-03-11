import FamilyImgGallery from 'components/ImageGalleries/FamilyGallery';
import ButtonUp from 'components/ButtonUp';
import '../pages.scss';

const FamilyPL = () => {
  return (
    <main>
      <section className="page_title">
        <div className="container">
          <h3 className="page_about">Portfolio | Zdięcia rodzinne</h3>
        </div>
      </section>
      <div className="container">
        <FamilyImgGallery />
      </div>
      <ButtonUp lang="pol" />
    </main>
  );
};

export default FamilyPL;
