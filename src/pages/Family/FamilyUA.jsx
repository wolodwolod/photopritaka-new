// import arrayOfImg from '../../shared/images/array';
import FamilyImgGallery from 'components/ImageGalleries/FamilyGallery';


const FamilyUA = () => {
  return (
    <main>
      <div>
        <div className="col-12">
          <h2 className="text-center text-uppercase color3 page_title">
            Твоє особисте
          </h2>
        </div>
        <FamilyImgGallery  />
        
      </div>
    </main>
  );
};

export default FamilyUA;
