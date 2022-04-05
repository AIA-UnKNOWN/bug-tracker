import useRegister from './hook';

const Register = ({ onSwtichLoginTab }) => {
  const { inputs, setInputs, errors, register, registerButton } = useRegister(onSwtichLoginTab);

  return (
    <div className="mx-2 w-full max-w-[400px]">
      <div className="bg-white w-full shadow-md font-medium">
        <div className="h-[70px] w-full bg-purple flex justify-center items-center">
          <span className="text-[30px] text-white">Register Page</span>
        </div>

        <div className="pt-4 pb-6">
          <div className="mb-2 flex justify-center px-5">
            <div className="w-1/2 mr-2">
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
            <div className="w-1/2 ml-2">
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
          <div className="w-full m-auto mb-2 px-5">
            <label className="text-[12px]" htmlFor="email">Email</label>
            <input
              className="block bg-light-gray w-full leading-[40px] rounded-md outline-none px-2 text-[15px]"
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
          <div className="w-full m-auto mb-2 px-5">
            <label className="text-[12px]" htmlFor="password">Password</label>
            <input
              className="block bg-light-gray w-full leading-[40px] rounded-md outline-none px-2 text-[15px]"
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
          <div className="w-full m-auto px-5">
            <label className="text-[12px]" htmlFor="confirm-password">Confirm Password</label>
            <input
              className="block bg-light-gray w-full leading-[40px] rounded-md outline-none px-2 text-[15px]"
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
          
          <div className="px-5">
            <button
              className="m-auto flex justify-center items-center bg-purple w-full h-[50px] rounded-md"
              onClick={() => register()}
            >
              <span className="text-[18px] text-white">
                {registerButton}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;