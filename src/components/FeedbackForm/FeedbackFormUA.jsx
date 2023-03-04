// <!-- FEEDBACK -->
import React, { useState, useEffect } from 'react';

import Loader from 'components/Loader';

import {
  MessageSuccessSendUA,
  MessageErrorSendUA,
} from 'components/MessageForm/MessageFormContent';
import './feedback_form.scss';
import envelope from 'shared/icons/envelope.svg';
import formValidation from 'shared/services/formValidation';
import { emailRegexp, nameRegexp } from 'shared/services/patterns';

const FeedbackFormUA = ({ onSubmit }) => {
  useEffect(() => {
    sessionStorage.setItem('sent', null);
    sessionStorage.setItem('err', null);
  }, []);

  formValidation();

  const [wasSent, setWasSent] = useState(false);

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

  const FeedbackFormContent = (
    <div>
      <div className="row">
        <div className="col-12">
          <h4 className="feedbacks_form-title">Надішліть Ваш відгук</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 col-sm-12">
          <form
            onSubmit={handleSubmit}
            className="bold text-uppercase needs-validation"
            id="message-form"
            noValidate
          >
            <div className="mb-3">
              <label htmlFor="validationInput1" className="form-label">
                Ваша електронна адреса
              </label>
              <input
                type="email"
                name="formEmail"
                value={formMessage.formEmail}
                className="form-control"
                id="validationInput1"
                onChange={handleChange}
                placeholder="name@example.com"
                title="ВВЕДІТЬ ВАШУ ЕЛЕКТРОННУ АДРЕСУ"
                required
              />
              <div className="invalid-feedback">
                Введіть правильну адресу електронної пошти або номер телефону
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="validationInput2" className="form-label">
                Ваше ім'я
              </label>
              <input
                type="text"
                name="formName"
                value={formMessage.formName}
                className="form-control"
                id="validationInput2"
                onChange={handleChange}
                placeholder="Ім'я"
                title="ВВЕДІТЬ ІМ'Я"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="validationTextarea1" className="form-label">
                Ваш відгук
              </label>
              <textarea
                name="formText"
                value={formMessage.formText}
                className="form-control"
                id="validationTextarea1"
                onChange={handleChange}
                placeholder="Текст"
                title="НАДІШЛІТЬ ВІДГУК, ВСЕ БУДЕ ДОБРЕ"
                rows="5"
              ></textarea>
            </div>

            {/* <!-- Checkbox --> */}
            {/* <div className="form-check mb-4">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="form4Example4"
                  checked
                />
                <label htmlFor="form4Example4">
                  Надішліть мені копію цього повідомлення
                </label>
              </div> */}
            <button
              id="message-button"
              disabled={disButton}
              type="submit"
              className="btn btn-go btn-lg bold"
            >
              <img
                src={envelope}
                alt="Svg"
                width="25"
                height="20"
                className="d-inline-block align-text-top"
              />
              &nbsp;&nbsp;Надіслати
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  return (
    <div className="feedbacks_form mt-5">
      {loading && <Loader />}

      {!wasSent && FeedbackFormContent}
      {sessionStorage.getItem('sent') === 'true' && (
        <MessageSuccessSendUA backToForm={backToForm} />
      )}
      {sessionStorage.getItem('err') === 'true' && (
        <MessageErrorSendUA
        
         backToForm={backToForm} />
      )}
    </div>
  );
};

export default FeedbackFormUA;
