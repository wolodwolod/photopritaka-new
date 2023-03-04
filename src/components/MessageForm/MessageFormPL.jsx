// <!-- MESSAGE -->
import React, { useState, useEffect } from 'react';

import Loader from 'components/Loader';

import { MessageSuccessSendPL, MessageErrorSendPL } from './MessageFormContent';

import './message_form.scss';
import envelope from 'shared/icons/envelope.svg';
import formValidation from 'shared/services/formValidation';
import { emailRegexp, nameRegexp } from 'shared/services/patterns';

const MessageFormUA = ({ onSubmit }) => {
  useEffect(() => {
    sessionStorage.setItem('sent', null);
    sessionStorage.setItem('err', null);
  }, []);

  formValidation();

  const [wasSent, setWasSent] = useState(false);
  // const [status, setStatus] = useState({
  //   send: null,
  //   error: null,
  // });

  const [loading, setLoading] = useState(false);

  const [formMessage, setFormMessage] = useState({
    formEmail: '',
    formName: '',
    formText: '',
  });

  const { formEmail, formName, formText } = formMessage;

  const [disButton, setDisButton] = useState(true);

  useEffect(() => {
    if (
      emailRegexp.test(formEmail) &&
      nameRegexp.test(formName) &&
      formText.length > 5
    )
      setDisButton(false);
    else setDisButton(true);
  }, [formEmail, formName, formText]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormMessage(prevState => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({
      email: formMessage.formEmail,
      name: formMessage.formName,
      text: formMessage.formText,
    });

    setDisButton(true);
    setLoading(true);

    const toDoWithTimeout = () => {
      setWasSent(true);
      setLoading(false);
      setFormMessage({
        formEmail: '',
        formName: '',
        formText: '',
      });
    };

    setTimeout(() => {
      toDoWithTimeout();
    }, 5000);
  };

  const backToForm = () => {
    setWasSent(false);
    sessionStorage.setItem('sent', null);
    sessionStorage.setItem('err', null);
  };

  const MessageFormContent = (
    <div className="message_form">
      <div className="row">
        <div className="col-12">
          <h4 className="message_form-title">
          Proszę wysłać wiadomość
          </h4>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <form
            onSubmit={handleSubmit}
            className="bold text-uppercase needs-validation"
            id="message-form"
            noValidate
          >
            <div className="mb-3">
              <label htmlFor="validationInput1" className="form-label">
              Twój adres e-mail
              </label>
              <input
                type="email"
                name="formEmail"
                value={formMessage.formEmail}
                className="form-control"
                id="validationInput1"
                onChange={handleChange}
                placeholder="name@example.com"
                title="WPROWADŹ ADRES E-MAIL"
                required
              />
              <div className="invalid-feedback">
              Proszę wpisać aktualny adres e-mail
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="validationInput2" className="form-label">
                Imię
              </label>
              <input
                type="text"
                name="formName"
                value={formMessage.formName}
                className="form-control"
                id="validationInput2"
                onChange={handleChange}
                placeholder="Imię"
                title="WPROWADŹ IMIĘ"
                required
              />
              <div className="invalid-feedback">Proszę wpisać swoje imię</div>
            </div>
            <div className="mb-3">
              <label htmlFor="validationTextarea1" className="form-label">
              Treść wiadomości
              </label>
              <textarea
                type="text"
                name="formText"
                value={formMessage.formText}
                className="form-control"
                id="validationTextarea1"
                onChange={handleChange}
                placeholder="Tekst"
                title="ZADAJ PYTANIE, WSZYSTKO BĘDZIE DOBRZE"
                rows="3"
              ></textarea>
            </div>

            <button
              id="message-button"
              disabled={disButton}
              type="submit"
              className="btn btn-go btn-lg bold"
            >
              <img
                src={envelope}
                alt="Svg"
                width="25px"
                height="20px"
                className="d-inline-block align-text-top"
              />
              &nbsp;&nbsp;Wyślij
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  return (
    <div className="message-form">
      {loading && <Loader />}

      {!wasSent && MessageFormContent}
      {sessionStorage.getItem('sent') === 'true' && (
        <MessageSuccessSendPL backToForm={backToForm} />
      )}
      {sessionStorage.getItem('err') === 'true' && (
        <MessageErrorSendPL backToForm={backToForm} />
      )}
    </div>
  );
};

export default MessageFormUA;
