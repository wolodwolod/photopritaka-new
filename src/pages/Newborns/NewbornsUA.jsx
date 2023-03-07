import NewbornsGallery from 'components/ImageGalleries/NewbornsGallery';
import ButtonUp from 'components/ButtonUp';

const NewbornsUA = () => {
  return (
    <main>
      <div className="container">
        <div className="col-12 page_title">
          <p className="page_about">Портфоліо | Новонароджені</p>
        </div>
        <NewbornsGallery />
      </div>
      <ButtonUp />
    </main>
  );
};

export default NewbornsUA;
