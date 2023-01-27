import '../pages.scss'

import MessageFormUA from 'components/MessageForm/MessageFormUA';
import sendMessageUA from 'shared/services/sendMessageUA';
import photographer from '../../shared/images/common-img/TP-xl-1.jpg'

const СontactsUA = () => {
  return (
    <section className="contacts">
      <div className="container">
        <div className="row contacts_wrapper">
          <div className="col-lg-3 col-md-5 col-sm-12 contacts_photo-box">
          <img
              src={photographer}
              alt="Тетяна Притака"
              className="contacts-img"
            />
          </div>
          <div className="col-lg-9 col-md-7 col-sm-12 contacts_rest">
          <MessageFormUA onSubmit={sendMessageUA} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default СontactsUA;
