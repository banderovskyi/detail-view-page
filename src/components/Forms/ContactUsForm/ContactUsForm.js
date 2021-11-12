import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../Forms.scss';
import { useInput } from '../inputHook';
import Button from '../../UI/Button/Button';
import axios from 'axios';
import { faCheck, faSpinner, faTimes } from '@fortawesome/free-solid-svg-icons';

const ContactUsForm = (props) => {
  const fullName = useInput('');
  const email = useInput('');
  const phone = useInput('');
  const message = useInput(
    props.address
      ? `I would like to know more about ${props.address}`
      : 'I would like to know more about this property'
  );
  const [isSuccess, setisSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [buttonText, setButtonText] = useState('Send');
  const [buttonIcon, setButtonIcon] = useState(null);
  const [buttonClass, setButtonClass] = useState('');
  useEffect(() => {
    if (isSuccess) {
      setButtonText('Success');
      setButtonIcon(faCheck);
      setButtonClass('form__button--success');
    } else if (isError) {
      setButtonText('Something went wrong');
      setButtonIcon(faTimes);
      setButtonClass('form__button--error');
    } else if (isLoading) {
      setButtonText('Sending');
      setButtonIcon(faSpinner);
      setButtonClass('form__button--loading');
    }
  }, [isLoading, isError, isSuccess]);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);
    axios
      .post('https://jsonplaceholder.typicode.com/posts', {
        fullName: fullName,
        email: email,
        phone: phone,
        message: message,
      })
      .then(function (response) {
        console.log(response);
        setIsLoading(false);
        setisSuccess(true);
      })
      .catch(function (error) {
        console.log(error);
        setIsError(true);
      });
  };

  return (
    <form onSubmit={formSubmitHandler} className="form">
      <div className="form__field">
        <label htmlFor={props.id ? `${props.id}-full-name` : 'full-name'} className="sr-only">
          Full Name
        </label>
        <input
          type="text"
          name="Full Name"
          id={props.id ? `${props.id}-full-name` : 'full-name'}
          placeholder="Full Name"
          className="form__input"
          {...fullName.bind}
        />
      </div>
      <div className="form__field">
        <label htmlFor={props.id ? `${props.id}-email` : 'email'} className="sr-only">
          Email
        </label>
        <input
          type="email"
          name="Email"
          id={props.id ? `${props.id}-email` : 'email'}
          placeholder="Email"
          className="form__input"
          {...email.bind}
        />
      </div>
      <div className="form__field">
        <label htmlFor={props.id ? `${props.id}-phone` : 'phone'} className="sr-only">
          Phone
        </label>
        <input
          type="tel"
          name="Phone"
          id={props.id ? `${props.id}-phone` : 'phone'}
          placeholder="Phone"
          className="form__input"
          {...phone.bind}
        />
      </div>
      <div className="form__field">
        <label htmlFor={props.id ? `${props.id}-message` : 'message'} className="sr-only">
          Message
        </label>
        <textarea
          name="message"
          id={props.id ? `${props.id}-message` : 'message'}
          placeholder="Message"
          className="form__input form__textarea"
          {...message.bind}></textarea>
      </div>
      <Button
        type="submit"
        className={`form__button ${buttonClass}`}
        isDisabled={isError || isSuccess || isLoading ? true : false}
        text={buttonText}
        icon={buttonIcon}
      />
    </form>
  );
};

ContactUsForm.propTypes = {
  id: PropTypes.string,
  address: PropTypes.string,
};

export default ContactUsForm;
