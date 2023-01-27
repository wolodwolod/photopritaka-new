import PortraitGallery from "components/ImageGalleries/PortraitGallery";
import '../pages.scss'

const PortraitUA = () => {
  return (
    <main>
      <div className="container">
        <div className="col-12 page_title">
        <p className="page_about">Портфоліо | Портрет</p>
          {/* <h2 className="text-center text-uppercase color3">
            Це - ти, і ти - ідеал.
          </h2> */}
        </div>
        <PortraitGallery  />
        
      </div>
    </main>
  );
};

export default PortraitUA;
