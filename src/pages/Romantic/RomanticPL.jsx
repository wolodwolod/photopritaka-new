import RomanticGallery from 'components/ImageGalleries/RomanticGallery';
import ButtonUp from 'components/ButtonUp';

const RomanticPL = () => {
  return (
    <main>
      <div className="container">
        <div className="col-12 page_title">
          <p className="page_about">Portfolio | Fotografia romantyczna</p>
        </div>
        <RomanticGallery />
      </div>
      <ButtonUp lang='pol' />
    </main>
  );
};

export default RomanticPL;
