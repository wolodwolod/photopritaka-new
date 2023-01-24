
import AllSessionsUA from 'components/AllSessions/AllSessionsUA';
import MainUA from 'components/Main/MainUA';
import MessageFormUA from 'components/MessageForm/MessageFormUA';
import sendMessageUA from 'shared/services/sendMessageUA';

const HomePageUA = () => {
  

  return (
    <main>
      <div>
        <MainUA />
        <AllSessionsUA />
        <MessageFormUA onSubmit={sendMessageUA} />
      </div>
    </main>
  );
};

export default HomePageUA;
