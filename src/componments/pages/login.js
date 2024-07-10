import React from "react";
import { TERipple } from "tw-elements-react";

const Login = () => (
  <section className="h-full bg-neutral-200 dark:bg-neutral-700">
    <div className="container h-full p-10">
      <div className="flex h-full items-center justify-center text-neutral-800 dark:text-neutral-200">
        <div className="w-full max-w-2xl">
          <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
            <div className="flex flex-wrap">
              <div className="px-4 md:px-0 w-full">
                <div className="mx-6 p-12">
                  <form>
                    {/* Username input */}
                    <div className="flex justify-center items-center mb-4 relative">
                      <label className="relative">
                        <input
                          type="text"
                          className="h-12 w-64 text-xl bg-white border-2 rounded-lg border-blue-700 
                          border-opacity-50 outline-none focus:border-blue-500 focus:text-gray-900 transition duration-200"
                        />
                        <span className="input-text text-xl text-black absolute left-0 top-4 mx-6 px-2 
                          transition duration-200">
                          Username
                        </span>
                      </label>
                    </div>

                    {/* Password input */}
                    <div className="flex justify-center items-center mb-4 relative">
                      <label className="relative">
                        <input
                          type="text"
                          className="h-12 w-64 text-xl bg-white border-2 rounded-lg border-blue-700 
                          border-opacity-50 outline-none focus:border-blue-500 focus:text-gray-900 transition duration-200"
                        />
                        <span className="input-text text-xl text-black absolute left-0 top-4 mx-6 px-2 
                          transition duration-200">
                          Password
                        </span>
                      </label>
                    </div>

                    {/* Submit button */}
                    <div className="mb-12 pb-1 pt-1 text-center">
                      <TERipple rippleColor="light" className="w-full">
                        <button
                          className="inline-block w-48 rounded-full px-6 py-3 text-base font-medium uppercase leading-normal text-white transition duration-150 ease-in-out focus:outline-none"
                          type="button"
                          style={{
                            background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                          }}
                        >
                          Log in
                        </button>
                      </TERipple>

                      {/* Forgot password link */}
                      <a href="#!" className="text-gray-600 hover:text-gray-800">Forgot password?</a>
                    </div>

                    {/* Register button */}
                    <div className="flex items-center justify-between pb-6">
                      <p className="mb-0 mr-2">Don't have an account?</p>
                      <TERipple rippleColor="light">
                        <button
                          type="button"
                          className="inline-block rounded-full border-2 border-danger px-6 py-3 text-base font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                        >
                          Register
                        </button>
                      </TERipple>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Login;
