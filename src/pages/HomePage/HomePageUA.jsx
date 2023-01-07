
import AllSessionsUA from 'components/AllSessions/AllSessionsUA';
import MessageFormUA from 'components/MessageForm/MessageFormUA';
import sendMessage from 'shared/services/sendMessage';

const HomePageUA = () => {
  

  return (
    <main>
      <div>
        <AllSessionsUA />
        <MessageFormUA onSubmit={sendMessage} />
      </div>
    </main>
  );
};

export default HomePageUA;
