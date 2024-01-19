import FamilyImgGallery from 'components/ImageGalleries/FamilyGallery';
import ButtonUp from 'components/ButtonUp';
import '../pages.scss';

const FamilyUA = () => {
  return (
    <main>
      <div className="container">
        <div className="col-12 page_title">
          <p className="page_about">Портфоліо | Сімейне фото</p>
        </div>
        <FamilyImgGallery />
      </div>
      <ButtonUp lang='ukr' />
    </main>
  );
};

export default FamilyUA;
