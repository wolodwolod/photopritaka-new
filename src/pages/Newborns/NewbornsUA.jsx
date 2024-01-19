import NewbornsGallery from 'components/ImageGalleries/NewbornsGallery';
import ButtonUp from 'components/ButtonUp';
import '../pages.scss';

const NewbornsUA = () => {
  return (
    <main>
      <div className="container">
        <div className="col-12 page_title">
          <p className="page_about">Портфоліо | Новонароджені</p>
        </div>
        <NewbornsGallery />
      </div>
      <ButtonUp lang='ukr' />
    </main>
  );
};

export default NewbornsUA;
