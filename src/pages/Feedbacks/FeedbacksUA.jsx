// import AboutPhotographerUA from 'components/AboutPhotographer/AboutPhotographerUA';
import FeedbackFormUA from 'components/FeedbackForm/FeedbackFormUA';
import FeedbacksListUA from 'components/FeedbacksList/FeedbacksListUA';
import sendFeedbackUA from 'shared/services/sendFeedbackUA';

const FeedbacksUA = () => {
  return (
    <main>
      <div>
        {/* <AboutPhotographerUA /> */}
        <FeedbacksListUA />
        <FeedbackFormUA onSubmit={sendFeedbackUA}/>
      </div>
    </main>
  );
};

export default FeedbacksUA;
