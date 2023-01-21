import './footer.scss'
// import '../../shared/styles/fontello.css'
import inst_Logo from '../../shared/icons/Instagram-Logo.svg';
import inst_Text_Logo from '../../shared/icons/Instagram-Text-Logo.svg';
import fb_Logo from '../../shared/icons/Facebook-Logo.svg';
import fb_Text_Logo from '../../shared/icons/Facebook-Text-Logo.svg';

const Footer=()=>{
    return(
        <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 btn-footer_wrapper">
            {/* //   <!-- <a href="" target="_blank" class="btn btn-outline-primary">
            //     <i class="icon-youtube-play"></i>
            //   </a> --> */}
              {/* <a href="" target="_blank" className="btn btn-outline-primary btn-footer">
                <i className="icon-mail-alt"></i>
              </a>
              <a href="" target="_blank" className="btn btn-outline-primary btn-footer">
                <i className="icon-paper-plane"></i>
              </a> */}
              <a href="https://www.instagram.com/tatianapritaka/" target="_blank" className="  btn-footer">
              <img
                    src={inst_Logo}
                    alt="Logo"
                    width="80"
                    // height="48"
                    className="d-inline-block align-text-top"
                  />
                  <img
                    src={inst_Text_Logo}
                    alt="Logo"
                    width="80"
                    // height="48"
                    className="d-inline-block align-text-top"
                  />
              </a>
              <a href="https://www.facebook.com/photopritaka" target="_blank" className="btn-footer">
              <img
                    src={fb_Logo}
                    alt="Logo"
                    width="80"
                    // height="24"
                    className="d-inline-block align-text-top"
                  />
                  <img
                    src={fb_Text_Logo}
                    alt="Logo"
                    width="80"
                    // height="24"
                    className="d-inline-block align-text-top"
                  />
              </a>
            {/* //   <!-- <a href="" target="_blank" class="btn btn-outline-primary">
            //     <i class="icon-twitter"></i> -->
            //   <!-- </a> --> */}
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer