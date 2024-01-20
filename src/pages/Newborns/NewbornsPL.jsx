import NewbornsGallery from 'components/ImageGalleries/NewbornsGallery';
import ButtonUp from 'components/ButtonUp';
import '../pages.scss';

const NewbornsPL = () => {
  return (
    <main>
      <section className="page_title">
        <div className="container">
          <p className="page_about">Portfolio | Fotografia noworodkowa</p>
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
