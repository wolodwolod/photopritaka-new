import { Link } from 'react-router-dom';
import './allsessions.scss';

const AllSessionsUA = () => {
  return (
    // <!-- ALL SESSIONS -->

    <section className="all-sessions">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12 text-uppercase">
            <div className="session session-box">
              <Link to="/ua/family" relative="path">
                <h2 className="text-center">Сімейне фото</h2>
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 text-uppercase">
            <div className="session session-box">
              <Link to="/ua/romantic" relative="path">
                <h2 className="text-center">Романтичне фото</h2>
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 text-uppercase">
            <div className="session session-box">
              <Link to="/ua/portrait" relative="path">
                <h2 className="text-center">Портрет</h2>
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 text-uppercase">
            <div className="session session-box">
              <Link to="/ua/newborns" relative="path">
                <h2 className="text-center">НОВОНАРОДЖЕНІ</h2>
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 text-uppercase">
            <div className="session session-box">
              <Link to="/ua/events" relative="path">
                <h2 className="text-center">Події</h2>
              </Link>             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllSessionsUA;
