import './allsessions.scss';

const AllSessionsUA = () => {
  return (
    // <!-- ALL SESSIONS -->

    <section className="all-sessions">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <a href="/ua/family" className="session text-uppercase">
              <div className="session-box">
                <h2 className="text-center">Сімейне фото</h2>
              </div>
            </a>
          </div>
          <div className="col-md-6 col-sm-12">
            <a href="/ua/romantic" className="session text-uppercase">
              <div className="session-box">
                <h2 className="text-center">Романтичне фото</h2>
              </div>
            </a>
          </div>
          <div className="col-md-6 col-sm-12">
            <a href="/ua/newborns" className="session text-uppercase">
              <div className="session-box">
                <h2 className="text-center">НОВОНАРОДЖЕНІ</h2>
              </div>
            </a>
          </div>
          <div className="col-md-6 col-sm-12">
            <a href="/ua/events" className="session text-uppercase">
              <div className="session-box">
                <h2 className="text-center">ПОДІЇ</h2>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllSessionsUA;
