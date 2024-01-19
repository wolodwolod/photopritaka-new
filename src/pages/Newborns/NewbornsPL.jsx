import NewbornsGallery from 'components/ImageGalleries/NewbornsGallery';
import ButtonUp from 'components/ButtonUp';
import '../pages.scss';

const NewbornsPL = () => {
  return (
    <main>
      <div className="container">
        <div className="col-12 page_title">
          <p className="page_about">Portfolio | Fotografia noworodkowa</p>
        </div>
        <NewbornsGallery />
      </div>
      <ButtonUp lang='pol' />
    </main>
  );
};

export default NewbornsPL;
