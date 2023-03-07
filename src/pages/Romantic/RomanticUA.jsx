import RomanticGallery from 'components/ImageGalleries/RomanticGallery';
import ButtonUp from 'components/ButtonUp';

const RomanticUA = () => {
  return (
    <main>
      <div className="container">
        <div className="col-12 page_title">
          <p className="page_about">Портфоліо | Романтичне фото</p>
        </div>
        <RomanticGallery />
      </div>
      <ButtonUp />
    </main>
  );
};

export default RomanticUA;
