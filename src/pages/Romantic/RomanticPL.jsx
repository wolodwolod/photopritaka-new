import RomanticGallery from 'components/ImageGalleries/RomanticGallery';
import ButtonUp from 'components/ButtonUp';
import '../pages.scss';

const RomanticPL = () => {
  return (
    <main>
      <section className="page_title">
        <div className="container">
          <h3 className="page_about">Portfolio | Fotografia romantyczna</h3>
        </div>
      </section>
      <div className="container">
        <RomanticGallery />
      </div>
      <ButtonUp lang="pol" />
    </main>
  );
};

export default RomanticPL;
