import './feedbacks-list.scss';
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
              Тетяна здатна підвищити настрій, прибрати скованість
              перед камерою, створити приємну атмосферу, що надихає.
            </p>
            <p>
            Світлини Тетяни - це безмежність і можливість побачити чудо в звичайному. Вони не тільки розповідають про тих, кого вона фотографує, але багато чого Вам розкажуть і про самого фотографа.
            </p>

            <div className="line"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default FeedbacksUA;
