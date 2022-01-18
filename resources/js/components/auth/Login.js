import { useState } from 'react';


const Login = ({ onSwitchRegisterTab }) => {
  return (
    <div className="bg-white w-[400px] shadow-md font-medium">
      <div className="h-[70px] w-full bg-purple flex justify-center items-center">
        <span className="text-[30px] text-white">Login Page</span>
      </div>

      <div className="pt-4 pb-6">
        <div className="w-fit m-auto mb-2">
          <label className="text-[12px]" htmlFor="email">Email</label>
          <input
            className="block bg-light-gray w-[350px] leading-[40px] rounded-md outline-none px-2 text-[15px]"
            type="email"
            name="email"
            id="email"
            onChange={null}
          />
        </div>
        <div className="w-fit m-auto">
          <label className="text-[12px]" htmlFor="password">Password</label>
          <input
            className="block bg-light-gray w-[350px] leading-[40px] rounded-md outline-none px-2 text-[15px]"
            type="password"
            name="password"
            id="password"
            onChange={null}
          />
        </div>
        <p className="text-center text-[12px] my-4">
          Don't have an account? <button className="text-light-blue" onClick={onSwitchRegisterTab}>Register</button>
        </p>

        <button
          className="m-auto flex justify-center items-center bg-purple w-[350px] h-[50px] rounded-md"
          onClick={null}
        >
          <span className="text-[18px] text-white">Login</span>
        </button>
      </div>
    </div>
  );
}

export default Login;