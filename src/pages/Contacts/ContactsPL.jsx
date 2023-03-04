import '../pages.scss';

import MessageFormUA from 'components/MessageForm/MessageFormUA';
import sendMessageUA from 'shared/services/sendMessageUA';

import photographer from '../../shared/images/common-img/TP-md.jpg';
import photographer_sm from '../../shared/images/common-img/TP-sm.jpg';

import location_svg from '../../shared/icons/location.svg';
import envelope_svg from '../../shared/icons/envelope.svg';

const СontactsPL = () => {
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="first">
              <div className="row">
                <div className="col-lg-6 col-md-5 col-sm-12">
                  <div className="contacts_photo-box">
                    <picture>
                      <source
                        media="(min-width: 992px)"
                        srcSet={photographer}
                      />
                      <img
                        className="contacts-img"
                        srcSet={photographer_sm}
                        alt="Tatiana Prytaka"
                        loading="lazy"
                      />
                    </picture>
                  </div>
                </div>
                <div className="col-lg-6 col-md-7 col-sm-12 ">
                  <div className="contacts_info">
                    <div className="contacts_info_mail">
                      <img
                        src={envelope_svg}
                        alt="E-Mail"
                        width="25"
                        // height="48"
                        className="d-inline-block align-text-top contacts_info_svg"
                      />
                      <p>pritakaphoto@gmail.com</p>
                    </div>
                    <div className="contacts_info_loc">
                      <img
                        src={location_svg}
                        alt="Location"
                        width="30"
                        // height="48"
                        className="d-inline-block align-text-top"
                      />
                      <p>miasto Nansy, Francja</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 ">
            <div className="contacts_message">
              <MessageFormUA onSubmit={sendMessageUA} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default СontactsPL;
