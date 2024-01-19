import './feedbacks-list.scss';

import responses from './responses';

const FeedbacksListUA = () => {
  const responsesUA = responses.map(function ({ id, nameUA, img, responseUA }) {
    return (
      <div key={id} className="feedbacks_item mt-3">
        <div className="row ">
          <div className="col-md-2 col-sm-12">
            <div className="feedbacks_item-info justify-content-center">
              <img src={img} alt={nameUA} className="rounded mx-auto d-block" />
              <p className="text-center mb-0 mt-1">{nameUA}</p>
            </div>
          </div>
          <div className="col-md-10 col-sm-12">
            <div className="feedbacks_item-text">
              <p>{responseUA}</p>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <div className="feedbacks_list">{responsesUA}</div>;
};

export default FeedbacksListUA;
