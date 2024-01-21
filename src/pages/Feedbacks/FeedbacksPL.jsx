import '../pages.scss';

import FeedbackFormContent from 'components/FeedbackForm/FeedbackFormPL';
import FeedbacksListPL from 'components/FeedbacksList/FeedbacksListPL';
// import sendFeedbackPL from 'shared/services/sendFeedbackUA';

const FeedbacksPL = () => {
  return (
    <main>
      <section className="page_title">
        <div className="container">
          <p className="page_about">Opinie</p>
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
