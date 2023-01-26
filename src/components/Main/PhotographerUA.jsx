import './photographer.scss';

import photographer from '../../shared/images/common-img/TP-4.jpg'

const Main = () => {
  return (
    <section className="main">
      <div className="container">
        <div className="row main_wrapper">
          <div className="col-md-4 col-sm-12 main_photo">
          <img
              src={photographer}
              alt="Тетяна Притака"
              className=" main-img"
            />
          </div>
          <div className="col-md-8 col-sm-12 main_about">
          <h2 className="text-center">Фотографія - це можливість побачити надзвичайне, відчути мить життя як чудо!</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
