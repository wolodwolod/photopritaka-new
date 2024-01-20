import NewbornsGallery from 'components/ImageGalleries/NewbornsGallery';
import ButtonUp from 'components/ButtonUp';
import '../pages.scss';

const NewbornsUA = () => {
  return (
    <main>
      <section className="page_title">
        <div className="container">
          <p className="page_about">Портфоліо | Новонароджені</p>
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
