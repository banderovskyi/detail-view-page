import React from 'react';
import PropTypes from 'prop-types';
import '../Forms.scss';
import { useInput } from '../inputHook';
import Button from '../../UI/Button/Button';
import { useFormStatus } from '../formStatusHook';
import { useDispatch } from 'react-redux';
import { openLoginModal, closeModal } from '../../Modal/ModalSlice';
import { formPostAPI } from '../apiLinks';

const SignInForm = (props) => {
  const dispatch = useDispatch();
  const firstName = useInput('');
  const lastName = useInput('');
  const email = useInput('');
  const password = useInput('');
  const passwordCheck = useInput('');
  const formData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    passwordCheck: passwordCheck,
  };
  const formStatus = useFormStatus(formPostAPI, formData, { text: 'Sign Up & Save' }, {});

  const openLogInHandler = () => {
    dispatch(closeModal());
    dispatch(openLoginModal());
  };

  return (
    <form onSubmit={formStatus.submitHandler} className="form" id={props.id}>
      <div className="form__row">
        <div className="form__field">
          <label htmlFor={props.id ? `${props.id}-first-name` : 'first-name'} className="sr-only">
            First Name
          </label>
          <input
            type="text"
            name="First Name"
            id={props.id ? `${props.id}-first-name` : 'first-name'}
            placeholder="First Name*"
            className="form__input"
            {...firstName.bind}
            required
          />
        </div>
        <div className="form__field">
          <label htmlFor={props.id ? `${props.id}-last-name` : 'last-name'} className="sr-only">
            Last Name
          </label>
          <input
            type="text"
            name="Last Name"
            id={props.id ? `${props.id}-last-name` : 'last-name'}
            placeholder="Last Name*"
            className="form__input"
            {...lastName.bind}
            required
          />
        </div>
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
      <div className="form__row">
        <div className="form__field">
          <label htmlFor={props.id ? `${props.id}-password` : 'password'} className="sr-only">
            Password
          </label>
          <input
            type="password"
            name="Password"
            id={props.id ? `${props.id}-password` : 'password'}
            placeholder="Password*"
            className="form__input"
            {...password.bind}
            required
          />
        </div>
        <div className="form__field">
          <label
            htmlFor={props.id ? `${props.id}-check-password` : 'check-password'}
            className="sr-only">
            Re-type Password
          </label>
          <input
            type="password"
            name="Re-type Password"
            id={props.id ? `${props.id}-check-password` : 'check-password'}
            placeholder="Re-type Password*"
            className="form__input"
            {...passwordCheck.bind}
            required
          />
        </div>
      </div>
      <Button
        type="submit"
        text={formStatus.button.text}
        icon={formStatus.button.icon}
        className={formStatus.button.className}
        isDisabled={formStatus.button.isDisabled}
      />

      <div className="form__create-account">
        <p className="form__create-account-text">Already have an account?</p>
        <Button
          type="button"
          text="Log In"
          className="form__button"
          onClick={openLogInHandler}
          isSecondary={true}
        />
      </div>
    </form>
  );
};

SignInForm.propTypes = {
  id: PropTypes.string,
};

export default SignInForm;
