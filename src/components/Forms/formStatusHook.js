import { useState, useEffect } from 'react';
import { faCheck, faSpinner, faTimes } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

export function useFormStatus(
  apiLink = '',
  formData = {},
  buttonStatus = { text: 'Submit', icon: null, class: '' },
  formsStatus = { isSuccess: false, isLoading: false, isError: false }
) {
  // Setting a statuses for the form, depending on the statuses button information will be changed
  const [isSuccess, setIsSuccess] = useState(formsStatus.isSuccess);
  const [isLoading, setIsLoading] = useState(formsStatus.isLoading);
  const [isError, setIsError] = useState(formsStatus.isError);
  // Setting default button states
  const [buttonText, setButtonText] = useState(buttonStatus.text);
  const [buttonIcon, setButtonIcon] = useState(buttonStatus.icon);
  const [buttonClass, setButtonClass] = useState(buttonStatus.class);

  // Changing a button information depending of form status
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

  // Sending a data to the server
  const submitHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);
    axios
      .post(apiLink, {
        ...formData,
      })
      .then(function (response) {
        console.log(response);
        setIsLoading(false);
        setIsSuccess(true);
      })
      .catch(function (error) {
        console.log(error);
        setIsError(true);
      });
  };

  return {
    submitHandler,
    bindButton: {
      text: buttonText,
      icon: buttonIcon,
      className: `form__button ${buttonClass ? buttonClass : ''}`,
      isDisabled: isError || isSuccess || isLoading ? true : false,
    },
    statuses: {
      isSuccess: isSuccess,
      isError: isError,
      isLoading: isLoading,
    },
    setSuccess: (newValue) => {
      setIsSuccess(newValue);
    },
    setLoading: (newValue) => {
      setIsLoading(newValue);
    },
    setError: (newValue) => {
      setIsError(newValue);
    },
  };
}
