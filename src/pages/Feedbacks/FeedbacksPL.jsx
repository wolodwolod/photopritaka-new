import '../pages.scss';

import FeedbackFormContent from 'components/FeedbackForm/FeedbackFormPL';
import FeedbacksListPL from 'components/FeedbacksList/FeedbacksListPL';
// import sendFeedbackPL from 'shared/services/sendFeedbackUA';

const FeedbacksPL = () => {
  return (
    <main>
      <section className="page_title">
        <div className="container">
          <h3 className="page_about">Opinie</h3>
        </div>
      </section>
      <div className="container">
        <FeedbacksListPL />
        <FeedbackFormContent />
      </div>
    </main>
  );
};

export default FeedbacksPL;
