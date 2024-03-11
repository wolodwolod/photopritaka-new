import NewbornsGallery from 'components/ImageGalleries/NewbornsGallery';
import ButtonUp from 'components/ButtonUp';
import '../pages.scss';

const NewbornsUA = () => {
  return (
    <main>
      <section className="page_title">
        <div className="container">
          <h3 className="page_about">Портфоліо | Новонароджені</h3>
        </div>
      </section>
      <div className="container">
        <NewbornsGallery />
      </div>
      <ButtonUp lang="ukr" />
    </main>
  );
};

export default NewbornsUA;
