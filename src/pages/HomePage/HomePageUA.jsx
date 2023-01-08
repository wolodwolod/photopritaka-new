
import AllSessionsUA from 'components/AllSessions/AllSessionsUA';
import MessageFormUA from 'components/MessageForm/MessageFormUA';
import sendMessageUA from 'shared/services/sendMessageUA';

const HomePageUA = () => {
  

  return (
    <main>
      <div>
        <AllSessionsUA />
        <MessageFormUA onSubmit={sendMessageUA} />
      </div>
    </main>
  );
};

export default HomePageUA;
