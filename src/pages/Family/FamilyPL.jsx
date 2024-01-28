import FamilyImgGallery from 'components/ImageGalleries/FamilyGallery';
import ButtonUp from 'components/ButtonUp';
import '../pages.scss';

const FamilyPL = () => {
  return (
    <main>
      <section className="page_title">
        <div className="container">
          <p className="page_about">Portfolio | Fotografia rodzinna</p>
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
