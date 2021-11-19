import React from 'react';
import PropTypes from 'prop-types';
import '../Forms.scss';
import { useInput } from '../inputHook';
import { useDispatch } from 'react-redux';
import Button from '../../UI/Button/Button';
import { useFormStatus } from '../formStatusHook';
import { openSignupModal, closeModal } from '../../Modal/ModalSlice';

const LogInForm = (props) => {
  const dispatch = useDispatch();
  const email = useInput('');
  const password = useInput('');
  const formData = {
    email: email,
    password: password,
  };
  const formStatus = useFormStatus(
    'https://jsonplaceholder.typicode.com/posts',
    formData,
    { text: 'Log In' },
    {}
  );

  const openSignUpHandler = () => {
    dispatch(closeModal());
    dispatch(openSignupModal());
  };

  return (
    <form onSubmit={formStatus.submitHandler} className="form" id={props.id}>
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
        <label htmlFor={props.id ? `${props.id}-full-name` : 'full-name'} className="sr-only">
          Password
        </label>
        <input
          type="password"
          name="Password"
          id={props.id ? `${props.id}-full-name` : 'full-name'}
          placeholder="Password*"
          className="form__input"
          {...password.bind}
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
      <a href="/user/forgot/" className="form__forgot-password-link">
        Forgot password?
      </a>

      <div className="form__create-account">
        <p className="form__create-account-text">Don't have an account yet?</p>
        <Button
          type="button"
          text="Sign Up"
          className="form__button"
          isSecondary={true}
          onClick={openSignUpHandler}
        />
      </div>
    </form>
  );
};

LogInForm.propTypes = {
  id: PropTypes.string,
};

export default LogInForm;
