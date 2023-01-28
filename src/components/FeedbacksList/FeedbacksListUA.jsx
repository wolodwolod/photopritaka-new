import './feedbacks-list.scss';
import Volodymyr_Bendyk from '../../shared/images/feedbacks-img/Volodymyr_Bendyk.jpg';

const FeedbacksListUA = () => {
  return (
    <div className="feedbacks_list">
      <div className="feedbacks_item mt-3">
        <div className="row ">
        <div className="col-md-2 col-sm-12">
          <div className="feedbacks_item-info justify-content-center">
            <img
              src={Volodymyr_Bendyk}
              alt="Володимир Бендик"
              className="rounded mx-auto d-block"
            />
            <p className="text-center mb-0 mt-3">Володимир Бендик</p>
          </div>
        </div>
        <div className="col-md-10 col-sm-12">
          <div className="feedbacks_item-text">
            <p>
              Тетяна здатна підвищити настрій, прибрати скованість перед
              камерою, створити приємну атмосферу.
            </p>
            <p>
              Світлини Тетяни - це можливість побачити чудо в звичайному. Вони
              сповнені життям і багато чого розровідають не тільки про об'єкти
              зйомки, але і про самого фотографа.
            </p>
          </div>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default FeedbacksListUA;
