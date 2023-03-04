import '../pages.scss';

import FeedbackFormPL from 'components/FeedbackForm/FeedbackFormPL';
import FeedbacksListPL from 'components/FeedbacksList/FeedbacksListPL';
import sendFeedbackPL from 'shared/services/sendFeedbackUA';

const FeedbacksPL = () => {
  return (
    <main>
      <div className="container">
        <div className="col-12 page_title">
          <p className="page_about">Opinie</p>
        </div>
        <FeedbacksListPL />
        <FeedbackFormPL onSubmit={sendFeedbackPL} />
      </div>
    </main>
  );
};

export default FeedbacksPL;
