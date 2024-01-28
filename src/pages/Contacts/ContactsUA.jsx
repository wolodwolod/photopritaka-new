import '../pages.scss';

// import MessageFormUA from 'components/MessageForm/MessageFormUA';
// import sendMessageUA from 'shared/services/sendMessageUA';

import photographer from '../../shared/images/common-img/TPrit.jpg';
import photographer_sm from '../../shared/images/common-img/TPr-sm.jpg';
import { HandySvg } from 'handy-svg';

import location_svg from '../../shared/icons/location.svg';
import envelope_svg from '../../shared/icons/envelope.svg';
// import phone_svg from '../../shared/icons/tel.svg';
import whatsapp_svg from '../../shared/icons/whatsapp.svg';

const СontactsUA = () => {
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="first">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="contacts_photo-box">
                    <picture>
                      <source
                        media="(min-width: 992px)"
                        srcSet={photographer}
                      />
                      <img
                        className="contacts-img"
                        srcSet={photographer_sm}
                        alt="Тетяна Притака"
                        loading="lazy"
                      />
                    </picture>
                  </div>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 ">
                  <div className="contacts_info">
                  <a
                      className="contacts_info_mail"
                      href="mailto:photopritaka@gmail.com"
                    >
                      <HandySvg
                        src={envelope_svg}
                        alt="E-Mail"
                        width="25"
                        // height="48"
                        className="d-inline-block align-text-top contacts_info_svg"
                      />
                      <p>photopritaka@gmail.com</p>
                    </a>
                    <a className="contacts_info_mail" href="tel:48783725112">
                      {/* <img
                        src={phone_svg}
                        alt="phone"
                        width="30"
                        className="d-inline-block align-text-top"
                      /> */}
                      <img
                        src={whatsapp_svg}
                        alt="whatsapp"
                        width="24"
                        className="d-inline-block align-text-top"
                      />
                      <p>+48 783 725 112</p>
                    </a>
                    <div className="contacts_info_loc">
                      <img
                        src={location_svg}
                        alt="Location"
                        width="30"
                        // height="48"
                        className="d-inline-block align-text-top"
                      />
                      <p>КРАКІВ</p>
                      <p>Малопольське воєводство</p>
                      <p>ПОЛЬЩА</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="col-lg-6 col-md-12 col-sm-12 ">
            <div className="contacts_message">
              <MessageFormUA onSubmit={sendMessageUA} />
            </div>
          </div> */}
        </div>
      </div>
    </main>
  );
};

export default СontactsUA;
