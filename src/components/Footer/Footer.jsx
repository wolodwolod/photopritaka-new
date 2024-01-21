import { HandySvg } from 'handy-svg';
import './footer.scss';
import inst_Icon from '../../shared/icons/icons8-instagram.svg';
import fb_Icon from '../../shared/icons/icons8-facebook.svg';
import copyright_Icon from '../../shared/icons/copyright.svg';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12 ">
            <div className="footer_wrapper">
              <div className="footer_icon-wrapper">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/tatianapritaka/"
                  title="Instagram"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-footer"
                >
                  <HandySvg
                    className="d-inline-block align-text-top icon-instagram"
                    src={inst_Icon}
                    width="35"
                    height="35"
                  />
                </a>
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/photopritaka"
                  title="Facebook"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-footer"
                >
                  <HandySvg
                    className="d-inline-block align-text-top icon-facebook"
                    src={fb_Icon}
                    width="35"
                    height="35"
                  />
                  {/* <img
                  src={fb_Logo}
                  alt="Logo"
                  width="80"
                  // height="24"
                  className="d-inline-block align-text-top"
                /> */}
                </a>
              </div>

              {/* Copyright */}
              <div className="footer_copyright-wrapper">
                <div className="f_copyright-wrapper">
                  <HandySvg
                    className="f_copyright-svg"
                    src={copyright_Icon}
                    width="12px"
                    height="12px"
                  />
                </div>
                <div className="f_p-wrapper">
                  <p>2022, PritakaStudio.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
