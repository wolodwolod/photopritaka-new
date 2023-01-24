import MessageFormUA from 'components/MessageForm/MessageFormUA';
import sendMessageUA from 'shared/services/sendMessageUA';

const СontactsUA = () => {
  return (
    <main>
      <div>
       
        <h2>Контакти</h2>
        <MessageFormUA onSubmit={sendMessageUA} />
      </div>
    </main>
  );
};

export default СontactsUA;
