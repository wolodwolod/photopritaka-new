import '../pages.scss';

import FeedbackFormUA from 'components/FeedbackForm/FeedbackFormUA';
import FeedbacksListUA from 'components/FeedbacksList/FeedbacksListUA';
import sendFeedbackUA from 'shared/services/sendFeedbackUA';

const FeedbacksUA = () => {
  return (
    <main>
      <section className="page_title">
        <div className="container">
          <h3 className="page_about">Відгуки</h3>
        </div>
      </section>
      <div className="container">
        <FeedbacksListUA />
        <FeedbackFormUA onSubmit={sendFeedbackUA} />
      </div>
    </main>
  );
};

export default FeedbacksUA;
