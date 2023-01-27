// import arrayOfImg from '../../shared/images/array';
import FamilyImgGallery from 'components/ImageGalleries/FamilyGallery';


const FamilyUA = () => {
  return (
    <main>
       <div className="container">
        <div className="col-12 page_title">
        <p className="page_about">Портфоліо | Сімейне фото</p>
          {/* <h2 className="text-center text-uppercase color3">
            Це - ти, і ти - ідеал.
          </h2> */}
        </div>
        <FamilyImgGallery  />
        
      </div>
    </main>
  );
};

export default FamilyUA;
