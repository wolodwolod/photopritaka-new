import RomanticGallery from 'components/ImageGalleries/RomanticGallery';
import ButtonUp from 'components/ButtonUp';
import '../pages.scss';

const RomanticUA = () => {
  return (
    <main>
      <section className="page_title">
        <div className="container">
          <p className="page_about">Портфоліо | Романтичне фото</p>
        </div>
      </section>
      <div className="container">
        <RomanticGallery />
      </div>
      <ButtonUp lang="ukr" />
    </main>
  );
};

export default RomanticUA;
