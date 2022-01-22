import { useState } from 'react';


const Register = ({ onSwtichLoginTab }) => {
  const [inputs, setInputs] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

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
    validate(errors => {
      if (errors) return;

      fetch('/api/register', {
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
        })
      })
        .then(response => response.json())
        .then(data => {
          if (data.message === 'registered') onSwtichLoginTab();
        })
        .catch(error => console.log(error));
    });
  }

  return (
    <div>
      <div className="bg-white w-[400px] shadow-md font-medium">
        <div className="h-[70px] w-full bg-purple flex justify-center items-center">
          <span className="text-[30px] text-white">Register Page</span>
        </div>

        <div className="pt-4 pb-6">
          <div className="mb-2 flex justify-center">
            <div className="w-[160px] mr-[15px]">
              <label className="inline-block w-full text-[12px]" htmlFor="name">Firstname</label>
              <input
                className="block bg-light-gray w-full leading-[40px] rounded-md outline-none px-2 text-[15px]"
                type="text"
                name="firstname"
                id="firstname"
                value={inputs.firstname}
                onChange={event => setInputs(data => ({ ...data, firstname: event.target.value }))}
              />
              {errors.firstname && (
                <span className="text-[12px] text-red">{errors.firstname}</span>
              )}
            </div>
            <div className="w-[160px] ml-[15px]">
              <label className="inline-block w-full text-[12px] text-right" htmlFor="name">Lastname</label>
              <input
                className="block bg-light-gray w-full leading-[40px] rounded-md outline-none px-2 text-[15px]"
                type="text"
                name="lastname"
                id="lastname"
                value={inputs.lastname}
                onChange={event => setInputs(data => ({ ...data, lastname: event.target.value }))}
              />
              {errors.lastname && (
                <span className="text-[12px] text-red">{errors.lastname}</span>
              )}
            </div>
          </div>
          <div className="w-fit m-auto mb-2">
            <label className="text-[12px]" htmlFor="email">Email</label>
            <input
              className="block bg-light-gray w-[350px] leading-[40px] rounded-md outline-none px-2 text-[15px]"
              type="email"
              name="email"
              id="email"
              value={inputs.email}
              onChange={event => setInputs(data => ({ ...data, email: event.target.value }))}
            />
            {errors.email && (
              <span className="text-[12px] text-red">{errors.email}</span>
            )}
          </div>
          <div className="w-fit m-auto mb-2">
            <label className="text-[12px]" htmlFor="password">Password</label>
            <input
              className="block bg-light-gray w-[350px] leading-[40px] rounded-md outline-none px-2 text-[15px]"
              type="password"
              name="password"
              id="password"
              value={inputs.password}
              onChange={event => setInputs(data => ({ ...data, password: event.target.value }))}
            />
            {errors.password && (
              <span className="text-[12px] text-red">{errors.password}</span>
            )}
          </div>
          <div className="w-fit m-auto">
            <label className="text-[12px]" htmlFor="confirm-password">Confirm Password</label>
            <input
              className="block bg-light-gray w-[350px] leading-[40px] rounded-md outline-none px-2 text-[15px]"
              type="password"
              name="confirm-password"
              id="confirm-password"
              value={inputs.confirmPassword}
              onChange={event => setInputs(data => ({ ...data, confirmPassword: event.target.value }))}
            />
            {errors.confirmPassword && (
              <span className="text-[12px] text-red">{errors.confirmPassword}</span>
            )}
          </div>
          <p className="text-center text-[12px] my-4">
            Already have an account? <button className="text-light-blue" onClick={onSwtichLoginTab}>Login</button>
          </p>

          <button
            className="m-auto flex justify-center items-center bg-purple w-[350px] h-[50px] rounded-md"
            onClick={() => register()}
          >
            <span className="text-[18px] text-white">Submit</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;