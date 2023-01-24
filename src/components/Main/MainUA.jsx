import './main.scss';

import photographer from '../../shared/images/common-img/TP-3.jpg'

const Main = () => {
  return (
    <section className="main">
      <div className="container">
        <div className="row main_wrapper">
          <div className="col-md-3 col-sm-12 main_photo">
          <img
              src={photographer}
              alt="Тетяна Притака"
              className=" main-img"
            />
          </div>
          <div className="col-md-9 col-sm-12 main_about">

          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
