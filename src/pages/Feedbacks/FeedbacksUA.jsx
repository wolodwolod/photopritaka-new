// import AboutPhotographerUA from 'components/AboutPhotographer/AboutPhotographerUA';
import FeedbackFormUA from 'components/FeedbackForm/FeedbackFormUA';
import FeedbacksListUA from 'components/FeedbacksList/FeedbacksListUA';
import sendFeedbackUA from 'shared/services/sendFeedbackUA';

const FeedbacksUA = () => {
  return (
    <main>
       <div className="container">
        <div className="col-12 page_title">
        <p className="page_about">Відгуки</p>
          {/* <h2 className="text-center text-uppercase color3">
            Це - ти, і ти - ідеал.
          </h2> */}
        </div>
        <FeedbacksListUA />
        <FeedbackFormUA onSubmit={sendFeedbackUA}/>
      </div>
    </main>
  );
};

export default FeedbacksUA;
