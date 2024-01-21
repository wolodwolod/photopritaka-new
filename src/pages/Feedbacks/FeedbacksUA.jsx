import '../pages.scss';

import FeedbackFormUA from 'components/FeedbackForm/FeedbackFormUA';
import FeedbacksListUA from 'components/FeedbacksList/FeedbacksListUA';
import sendFeedbackUA from 'shared/services/sendFeedbackUA';

const FeedbacksUA = () => {
  return (
    <main>
      <section className="page_title">
        <div className="container">
          <p className="page_about">Відгуки</p>
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
