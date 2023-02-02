// import AboutPhotographerUA from 'components/AboutPhotographer/AboutPhotographerUA';
import '../pages.scss'

import FeedbackFormUA from 'components/FeedbackForm/FeedbackFormUA';
import FeedbacksListUA from 'components/FeedbacksList/FeedbacksListUA';
import sendFeedbackUA from 'shared/services/sendFeedbackUA';

const FeedbacksUA = () => {
  return (
    <main>
       <div className="container">
        <div className="col-12 page_title">
        <p className="page_about">Відгуки</p>         
        </div>
        <FeedbacksListUA />
        <FeedbackFormUA onSubmit={sendFeedbackUA}/>
      </div>
    </main>
  );
};

export default FeedbacksUA;
