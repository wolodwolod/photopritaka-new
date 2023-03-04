// import React, { useState, useEffect } from 'react';

// // import Loader from 'components/Loader';

// import './message_form.scss';
// import envelope from 'shared/icons/envelope.svg';
// import formValidation from 'shared/services/formValidation';
// import { emailRegexp, nameRegexp } from 'shared/services/patterns';
//  let sendResult = sessionStorage.getItem('send');



export const MessageSuccessSendUA = ({backToForm}) => {
  return (
    <div className="after_send">
      <p style={{color: 'var(--blue)'}}> Дякую. Ваше повідомлення надіслане.</p>
      {/* <p>На Вашу адресу надійде копія повідомлення.</p> */}
      <p>Чекайте на відповідь</p>
      <button
              type="button"
              className="btn btn-go btn-lg bold btn-after"
              onClick={backToForm}
            >              
              Добре
            </button>
    </div>
  );
};
export const MessageSuccessSendPL = ({backToForm}) => {
  return (
    <div className="after_send">
      <p style={{color: 'var(--blue)'}}> Dziękuję. Twoja wiadomość została wysłana.</p>
      {/* <p>На Вашу адресу надійде копія повідомлення.</p> */}
      <p>Proszę czekać na odpowiedź</p>
      <button
              type="button"
              className="btn btn-go btn-lg bold btn-after"
              onClick={backToForm}
            >              
              Dobra
            </button>
    </div>
  );
};



export const MessageErrorSendUA = ({backToForm}) => {
  return (
    <div className="after_send">
      <p style={{color: '#fc842d'}}>Щось пішло не так. Повідомлення не відправлене.</p>
      <p>Перевірте з'єднання з інтернетом та спробуйте ще раз.</p>
      <button
              type="button"
              className="btn btn-go btn-lg bold btn-after"
              onClick={backToForm}
            >              
              Повернутися
            </button>
    </div>
  );
};


export const MessageErrorSendPL = ({backToForm}) => {
  return (
    <div className="after_send">
      <p style={{color: '#fc842d'}}>Coś poszło nie tak. Wiadomość nie została wysłana.</p>
      <p>Proszę sprawdzić połączenie z internetem i sprobować ponownie.</p>
      <button
              type="button"
              className="btn btn-go btn-lg bold btn-after"
              onClick={backToForm}
            >              
              Wrócić
            </button>
    </div>
  );
};
