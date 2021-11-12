import React from 'react';
import PropTypes from 'prop-types';
import '../Forms.scss';
import { useInput } from '../inputHook';
import Button from '../../UI/Button/Button';

const ContactUsForm = (props) => {
  const fullName = useInput('');
  const email = useInput('');
  const phone = useInput('');
  const message = useInput(
    props.address
      ? `I would like to know more about ${props.address}`
      : 'I would like to know more about this property'
  );

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(event.data);
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
      <Button type="submit" className="form__button" text="Send" />
    </form>
  );
};

ContactUsForm.propTypes = {
  id: PropTypes.string,
  address: PropTypes.string,
};

export default ContactUsForm;
