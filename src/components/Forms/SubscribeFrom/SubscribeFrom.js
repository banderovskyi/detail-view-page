import React from 'react';
import PropTypes from 'prop-types';
import '../Forms.scss';
import { useInput } from '../inputHook';
import Button from '../../UI/Button/Button';
import { useFormStatus } from '../formStatusHook';
import { formPostAPI } from '../apiLinks';

const SubscribeFrom = (props) => {
  const fullName = useInput('');
  const email = useInput('');
  const formData = {
    fullName: fullName,
    email: email,
  };
  const formStatus = useFormStatus(formPostAPI, formData, { text: 'Subscribe' }, {});

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
      <Button
        type="submit"
        text={formStatus.button.text}
        icon={formStatus.button.icon}
        className={formStatus.button.className}
        isDisabled={formStatus.button.isDisabled}
      />
      <p className="form__disclaimer">
        We will never spam you or sell your details. You can unsubscribe whenever you like.
      </p>
    </form>
  );
};

SubscribeFrom.propTypes = {
  id: PropTypes.string,
};

export default SubscribeFrom;
