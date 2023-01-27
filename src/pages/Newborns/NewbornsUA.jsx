// import arrayOfImg from '../../shared/images/array';
import NewbornsGallery from 'components/ImageGalleries/NewbornsGallery';


const NewbornsUA = () => {
  return (
    <main>
       <div className="container">
        <div className="col-12 page_title">
        <p className="page_about">Портфоліо | Новонароджені</p>
          {/* <h2 className="text-center text-uppercase color3">
            Це - ти, і ти - ідеал.
          </h2> */}
        </div>
        <NewbornsGallery  />
        
      </div>
    </main>
  );
};

export default NewbornsUA;
