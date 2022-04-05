import useLogin from './hook';

const Login = ({ onSwitchRegisterTab }) => {
  const { inputs, setInputs, errors, loginError, login, loginButton } = useLogin();

  return (
    <div className="mx-2 w-full max-w-[400px]">
      {loginError.length > 0 && (
        <div className="bg-light-red h-[60px] flex justify-center items-center rounded-sm mb-4">
          <span className="text-dark-red font-medium text-[15px]">{loginError}</span>
        </div>
      )}

      <div className="bg-white w-full shadow-md font-medium">
        <div className="h-[70px] w-full bg-purple flex justify-center items-center">
          <span className="text-[30px] text-white">Login Page</span>
        </div>

        <div className="pt-4 pb-6">
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
          <div className="w-full m-auto px-5">
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
          <p className="text-center text-[12px] my-4">
            Don't have an account? <button className="text-light-blue" onClick={onSwitchRegisterTab}>Register</button>
          </p>

          <div className="px-5">
            <button
              className="m-auto w-full flex justify-center items-center bg-purple h-[50px] rounded-md"
              onClick={() => login()}
            >
              <span className="text-[18px] text-white">{loginButton}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;