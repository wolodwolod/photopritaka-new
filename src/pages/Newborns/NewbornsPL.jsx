import NewbornsGallery from 'components/ImageGalleries/NewbornsGallery';
import ButtonUp from 'components/ButtonUp';
import '../pages.scss';

const NewbornsPL = () => {
  return (
    <main>
      <section className="page_title">
        <div className="container">
          <h3 className="page_about">Portfolio | Fotografia noworodkowa</h3>
        </div>
      </section>
      <div className="container">
        <NewbornsGallery />
      </div>
      <ButtonUp lang="pol" />
    </main>
  );
};

export default NewbornsPL;
