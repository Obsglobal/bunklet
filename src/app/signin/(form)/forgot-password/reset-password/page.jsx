"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui";
import { useRouter } from "next/navigation";

const ResetPassword = () => {
  const { push } = useRouter();
  const [details, setDetails] = useState({
    password: "",
    confirmpassword: "",
  });
  const [errorState, setErrorState] = useState({
    passwordError: "",
    confirmpasswordError: "",
  });

  const validate = () => {
    let isError = false;
    const errors = {
      passwordError: "",
      confirmpasswordError: "",
    };
    if (!details.password) {
      isError = true;
      errors.passwordError = "Please enter a new password";
    }
    if (details.password !== details.confirmpassword) {
      isError = true;
      errors.confirmpasswordError = "Passwords do not match";
    }

    setErrorState({ ...errorState, ...errors });
    return isError;
  };

  const handleForm = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validate();

    if (!error) {
      // dispatch(formdata({ personal_details: details }));
      push("/");
    }
  };

  return (
      <div className="flex flex-col h-screen justify-center md:px-20 space-y-6 md:w-1/2 w-5/6 items-start">
        <form action="/" method="post" className="w-full">
          <div className="md:px-10">
            <h1 className="text-center md:text-3xl font-semibold">Sign In</h1>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="md:text-[20px]">
                  Enter New Password
                </label>
                <input
                  type="password"
                  id="password"
                  name='password'
                  placeholder=""
                  className="text-[#777272] font-semibold outline-none border-2 border-[#bebbbb] py-4 px-3"
                  onChange={handleForm}
                />
                <span className="text-sm text-[#e62e2e]">
                  {errorState.passwordError}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="password" className="md:text-[20px]">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmpassword"
                  name="confirmpassword"
                  placeholder=""
                  className="text-[#777272] font-semibold outline-none border-2 border-[#bebbbb] py-4 px-3"
                  onChange={handleForm}
                />
                <span className="text-sm text-[#e62e2e]">
                  {errorState.confirmpasswordError}
                </span>
              </div>

              <Button
                className="w-full hover:scale-105 transition-all ease-in"
                padding="18px"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </div>
          </div>
        </form>
      </div>
  );
};

export default ResetPassword;
