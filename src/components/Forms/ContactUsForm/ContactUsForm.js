import React from 'react';
import PropTypes from 'prop-types';
import '../Forms.scss';
import { useInput } from '../inputHook';
import Button from '../../UI/Button/Button';
import { useFormStatus } from '../formStatusHook';

const ContactUsForm = (props) => {
  const fullName = useInput('');
  const email = useInput('');
  const phone = useInput('');
  const message = useInput(
    props.address
      ? `I would like to know more about ${props.address}`
      : 'I would like to know more about this property'
  );
  const formData = {
    fullName: fullName.value,
    email: email.value,
    phone: phone.value,
    message: message.value,
  };
  const formStatus = useFormStatus(
    'https://jsonplaceholder.typicode.com/posts',
    formData,
    { text: 'Send' },
    {}
  );

  return (
    <form onSubmit={formStatus.submitHandler} className="form" id={props.id}>
      <div className="form__field">
        <label htmlFor={props.id ? `${props.id}-full-name` : 'full-name'} className="sr-only">
          Full Name
        </label>
        <input
          type="text"
          name="Full Name"
          id={props.id ? `${props.id}-full-name` : 'full-name'}
          placeholder="Full Name*"
          className="form__input"
          {...fullName.bind}
          required
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
          placeholder="Email*"
          className="form__input"
          {...email.bind}
          required
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
        text={formStatus.button.text}
        icon={formStatus.button.icon}
        className={formStatus.button.className}
        isDisabled={formStatus.button.isDisabled}
      />
    </form>
  );
};

ContactUsForm.propTypes = {
  id: PropTypes.string,
  address: PropTypes.string,
};

export default ContactUsForm;
