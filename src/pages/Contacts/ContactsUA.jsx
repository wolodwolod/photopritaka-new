import '../pages.scss';

import MessageFormUA from 'components/MessageForm/MessageFormUA';
import sendMessageUA from 'shared/services/sendMessageUA';

import photographer from '../../shared/images/common-img/TP-xl-01.jpg';
import location_svg from '../../shared/icons/location.svg';
import envelope_svg from '../../shared/icons/envelope.svg';

const СontactsUA = () => {
  return (
    <main>
      <div className="container">
        {/* <div className="col-12 page_title">
          <p className="page_about">Контакти</p>
        </div> */}

        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-12 ">
            <div className="contacts_photo-box">
              <img
                src={photographer}
                alt="Тетяна Притака"
                className="contacts-img"
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12">
            <div className="contacts_info">
              <div className="contacts_info_loc">
                <img
                  src={location_svg}
                  alt="Location"
                  width="30"
                  // height="48"
                  className="d-inline-block align-text-top"
                  
                />
                <p>місто Нансі, Франція</p>
              </div>
              <div className="contacts_info_mail">
              <img
                  src={envelope_svg}
                  alt="E-Mail"
                  width="25"
                  // height="48"
                  className="d-inline-block align-text-top contacts_info_svg"
                />
                <p>
                pritakaphoto@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-5 col-sm-12 ">
            <div className="contacts_message">
              <MessageFormUA onSubmit={sendMessageUA} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default СontactsUA;
