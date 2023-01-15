import AboutPhotographerUA from 'components/AboutPhotographer/AboutPhotographerUA';
import FeedbackFormUA from 'components/FeedbackForm/FeedbackFormUA';
import FeedbacksUA from 'components/Feedbacks/FeedbacksUA';
import sendFeedbackUA from 'shared/services/sendFeedbackUA';

const PhotographerUA = () => {
  return (
    <main>
      <div>
        <AboutPhotographerUA />
        <FeedbacksUA />
        <FeedbackFormUA onSubmit={sendFeedbackUA}/>
      </div>
    </main>
  );
};

export default PhotographerUA;
