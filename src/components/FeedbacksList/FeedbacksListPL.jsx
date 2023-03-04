import './feedbacks-list.scss';

import responses from './responses';

const FeedbacksListPL = () => {
  const responsesPL = responses.map(function ({ id, namePL, img, responsePL }) {
    return (
      <div key={id} className="feedbacks_item mt-3">
        <div className="row ">
          <div className="col-md-2 col-sm-12">
            <div className="feedbacks_item-info justify-content-center">
              <img src={img} alt={namePL} className="rounded mx-auto d-block" />
              <p className="text-center mb-0 mt-3">{namePL}</p>
            </div>
          </div>
          <div className="col-md-10 col-sm-12">
            <div className="feedbacks_item-text">
              <p>{responsePL}</p>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <div className="feedbacks_list">{responsesPL}</div>;
};

export default FeedbacksListPL;
