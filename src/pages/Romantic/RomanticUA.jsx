import RomanticGallery from 'components/ImageGalleries/RomanticGallery';
import ButtonUp from 'components/ButtonUp';
import '../pages.scss';

const RomanticUA = () => {
  return (
    <main>
      <div className="container">
        <div className="col-12 page_title">
          <p className="page_about">Портфоліо | Романтичне фото</p>
        </div>
        <RomanticGallery />
      </div>
      <ButtonUp lang='ukr' />
    </main>
  );
};

export default RomanticUA;
