import React, { useState } from "react";
import { login } from "../app/slices/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  function submitHandler(e) {
    e.preventDefault();
    dispatch(login(form.email));
    navigate("/", { replace: true });
  }
  function onChangeHandler(event) {
    const name = event.target.name;
    const value = event.target.value;
    setForm((values) => ({ ...values, [name]: value }));
    console.log(form);
  }

  return (
    <div className=" relative flex flex-col justify-center min-h-screen overflow-hidden bg-[#faefd4]">
      <div>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-16 mt-3 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
        </button>
      </div>
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-gray-400/40  ring-gray-100 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-gray-700 underline uppercase decoration-transparent">
          Sign in
        </h1>
        <form className="mt-6" onSubmit={submitHandler}>
          <div className="mb-2">
            <label
              for="email"
              className="block text-base font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email || ""}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-[#F7BE38] focus:ring-[#F7BE38] focus:outline-none focus:ring focus:ring-opacity-20"
              onChange={onChangeHandler}
            />
          </div>
          <div className="mb-2">
            <label
              for="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password || ""}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-[#F7BE38] focus:ring-[#F7BE38] focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={onChangeHandler}
            />
          </div>
          <a
            href="forgotPassword"
            className="text-xs text-gray-700 hover:underline hover:text-[#e7a202]"
          >
            Forget Password?
          </a>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#e7a202] rounded-md hover:bg-[#f5b92d] focus:outline-none focus:bg-[#e7a202]"
            >
              Login
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Don't have an account?{" "}
          <a
            href="signup"
            className="font-medium text-gray-700 hover:underline"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
