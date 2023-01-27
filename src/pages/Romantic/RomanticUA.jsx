// import arrayOfImg from '../../shared/images/array';
import RomanticGallery from 'components/ImageGalleries/RomanticGallery';


const RomanticUA = () => {
  return (
    <main>
      <div className="container">
        <div className="col-12 page_title">
        <p className="page_about">Портфоліо | Романтичне фото</p>
          {/* <h2 className="text-center text-uppercase color3">
            Це - ти, і ти - ідеал.
          </h2> */}
        </div>
        <RomanticGallery  />
        
      </div>
    </main>
  );
};

export default RomanticUA;
