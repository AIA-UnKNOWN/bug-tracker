import { useState, useEffect } from 'react';

const useRegister = onSwtichLoginTab => {
  const abortController = new AbortController();
  const [registerButton, setRegisterButton] = useState('Register');
  const [inputs, setInputs] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    return () => {
      abortController.abort();
    }
  }, []);

  const validate = callback => {
    const formErrors = {};
    const suffixMessage = 'field is required';

    if (inputs.firstname === '') formErrors.firstname = `Firstname ${suffixMessage}`;
    if (inputs.lastname === '') formErrors.lastname = `Lastname ${suffixMessage}`;
    if (inputs.email === '') formErrors.email = `Email ${suffixMessage}`;
    const validEmailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputs.email !== '' && !validEmailFormat.test(inputs.email)) formErrors.email = `Please enter a valid email`;
    if (inputs.password === '') formErrors.password = `Password ${suffixMessage}`;
    if (inputs.password !== '' && inputs.password.length < 8) formErrors.password = `Password is too short`;
    if (inputs.password !== inputs.confirmPassword) formErrors.password = `Password does not match`;
    
    setErrors(formErrors);
    callback(Object.keys(formErrors).length > 0);
  }

  const register = () => {
    setRegisterButton('Registering...');
    validate(async errors => {
      if (errors) return setRegisterButton('Register');

      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': document.querySelector('meta[name="csrf_token"]').content
        },
        body: JSON.stringify({
          firstname: inputs.firstname,
          lastname: inputs.lastname,
          email: inputs.email,
          password: inputs.password,
          password_confirmation: inputs.confirmPassword
        }),
        signal: abortController.signal
      });
      if (!response.ok) return;
      const data = await response.json();
      if (data.message === 'registered') {
        onSwtichLoginTab();
        setRegisterButton('Register');
      }
    });
  }

  return { inputs, setInputs, errors, register, registerButton };
}

export default useRegister;