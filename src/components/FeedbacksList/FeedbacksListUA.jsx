import './feedbacks-list.scss';
import Volodymyr_Bendyk from '../../shared/images/feedbacks-img/Volodymyr_Bendyk.jpg';

const FeedbacksListUA = () => {
  return (
    // <section className="feedbacks">
    <div className="feedbacks_list">
      {/* <div className="row">
          <div className="col-12">
            <h2 className="text-center text-uppercase color3 mb-5">ВІДГУКИ</h2>
          </div>
        </div> */}

      <div className="feedbacks_item">
        <div className="feedbacks_item-info justify-content-center">
          <img
            src={Volodymyr_Bendyk}
            alt="Володимир Бендик"
            className="rounded mx-auto d-block"
          />
          <h5 className="text-center mb-3 mt-3">Володимир Бендик</h5>
        </div>
        <div className="feedbacks_item-text">
          <p>
            Тетяна здатна підвищити настрій, прибрати скованість перед камерою,
            створити приємну атмосферу.
          </p>
          <p>
            Світлини Тетяни - це безмежність і можливість побачити чудо в
            звичайному. Вони не тільки розповідають про тих, кого вона
            фотографує, але багато чого Вам розкажуть і про самого фотографа.
          </p>
        </div>
      </div>

      {/* <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 col-sm-12 justify-content-center">
          <img
            src={Volodymyr}
            alt="Володимир"
            className="rounded mx-auto d-block"
          />
          <h4 className="text-center mb-3 mt-3">Володимир</h4>

          <p>
            Тетяна здатна підвищити настрій, прибрати скованість перед камерою,
            створити приємну атмосферу.
          </p>
          <p>
            Світлини Тетяни - це безмежність і можливість побачити чудо в
            звичайному. Вони не тільки розповідають про тих, кого вона
            фотографує, але багато чого Вам розкажуть і про самого фотографа.
          </p>

          <div className="line"></div>
        </div>
      </div> */}
    </div>
    // </section>
  );
};

export default FeedbacksListUA;
