import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from '@reducers/userSlice';
import Cookies from 'js-cookie';

const useLogin = () => {
  const abortController = new AbortController();
  const dispatch = useDispatch();
  const [loginButton, setLoginButton] = useState('Login');
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState('');

  useEffect(() => {
    return () => {
      abortController.abort();
    }
  }, []);

  const validate = callback => {
    const formErrors = {};
    const suffixMessage = 'field is required';

    if (inputs.email === '') formErrors.email = `Email ${suffixMessage}`;
    const validEmailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputs.email !== '' && !validEmailFormat.test(inputs.email)) formErrors.email = `Please enter a valid email`;
    if (inputs.password === '') formErrors.password = `Password ${suffixMessage}`;
    if (inputs.password !== '' && inputs.password.length < 8) formErrors.password = `Password is too short`;
    
    setErrors(formErrors);
    callback(Object.keys(formErrors).length > 0);
  }

  const login = () => {
    setLoginButton('Logging in...');
    validate(async errors => {
      if (errors) return setLoginButton('Login');

      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': document.querySelector('meta[name="csrf_token"]').content
        },
        body: JSON.stringify({
          email: inputs.email,
          password: inputs.password
        }),
        signal: abortController.signal
      })
      if (!response.ok) return;
      const data = await response.json();
      if (data.message === 'failed') {
        setLoginError('Invalid username or password');
        setLoginButton('Login');
        return;
      };
      Cookies.set('token', data.token, { expires: 7 });
      dispatch(updateUser({
        user: {
          id: data.user.id,
          firstname: data.user.first_name,
          lastname: data.user.last_name,
          email: data.user.email,
          profilePicture: data.user.profile_picture,
          isAuthenticated: true
        }
      }));
      setLoginButton('Login');
    });
  }

  return { inputs, setInputs, errors, loginError, validate, login, loginButton };
}

export default useLogin;