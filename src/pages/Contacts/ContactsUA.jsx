import MessageFormUA from 'components/MessageForm/MessageFormUA';
import sendMessageUA from 'shared/services/sendMessageUA';

const СontactsUA = () => {
  return (
    <main>
      <div>       
        <MessageFormUA onSubmit={sendMessageUA} />
      </div>
    </main>
  );
};

export default СontactsUA;
