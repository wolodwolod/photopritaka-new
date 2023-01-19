import './feedbacks.scss';
import Volodymyr from '../../shared/images/feedbacks-img/Volodymyr-1.jpg';

const FeedbacksUA = () => {
  return (
    <section className="reviews">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center text-uppercase color3 mb-5">ВІДГУКИ</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-12 justify-content-center">
            <img
              src={Volodymyr}
              alt="Володимир"
              className="rounded mx-auto d-block"
            />
            <h4 className="text-center mb-3 mt-3">Володимир</h4>
            <p>
              Зустріч з Тетяною – це спілкування з цікавою людиною, отримання
              заряду позитивної енергії.
            </p>
            <p>
              Тетяна здатна підвищити настрій, прибрати скованість
              перед камерою, створити приємну атмосферу, що надихає.
            </p>
            <p>
            Ви отримаєте нового приятеля, з яким Ви схочете ще не раз зустрітися.
            </p>

            <div className="line"></div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 justify-content-center">
            <img
              src={Volodymyr}
              alt="Володимир"
              className="rounded mx-auto d-block"
            />
            <h4 className="text-center mb-3 mt-3">Володимир</h4>
            <p>
              Зустріч з Тетяною – спілкування з цікавою людиною, отримання
              заряду позитивної енергії.
            </p>
            <p>
              Тетяна здатна підвищити настрій, прибрати скованість
              перед камерою, створити приємну атмосферу, що надихає.
            </p>
            <p>
            Ви отримаєте нового приятеля, з яким Ви схочете ще не раз зустрітися.
            </p>

            <div className="line bg2"></div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 justify-content-center">
            <img
              src={Volodymyr}
              alt="Володимир"
              className="rounded mx-auto d-block"
            />
            <h4 className="text-center mb-3 mt-3">Володимир</h4>
            <p>
              Зустріч з Тетяною – спілкування з цікавою людиною, отримання
              заряду позитивної енергії.
            </p>
            <p>
              Тетяна здатна підвищити настрій, прибрати скованість
              перед камерою, створити приємну атмосферу, що надихає.
            </p>
            <p>
            Ви отримаєте нового приятеля, з яким Ви схочете ще не раз зустрітися.
            </p>

            <div className="line bg2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbacksUA;
