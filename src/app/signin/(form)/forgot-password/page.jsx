"use client";
import React, { useState } from "react";
import Container from "../../layout";
import { Button } from "@/components/ui";
import { useRouter } from "next/navigation";

const ForgotPassword = () => {
  const router = useRouter();
  const [email, setEmail] = useState();
  const [errorState, setErrorState] = useState("");

  const validate = () => {
    let isError = false;

    if (email === '') {
      isError = true;
      setErrorState("Please enter your email");
    }
  };

  const handleForm = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validate();

    if (error !== '') {
      // dispatch(formdata({ personal_details: details }));
      router.push("/signin/forgot-password/successful");
    }
  };

  return (
    <Container>
      <div className="flex flex-col h-screen justify-center md:px-20 space-y-6 md:w-1/2 w-5/6 items-start">
        <form action="/" method="post" className="w-full">
          <div className="md:px-10">
            <div className="flex flex-col gap-3">
              <h1 className="text-center md:text-3xl font-semibold">
                Forgot Password
              </h1>
              <span className="text-sm font-medium text-center">
                Enter your registered email address
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="md:text-[20px]">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="example@email.com"
                  className="text-[#777272] font-semibold outline-none border-2 border-[#bebbbb] py-4 px-3"
                  onChange={handleForm}
                />
                <span className="text-sm text-[#e62e2e]">{errorState}</span>
              </div>
              <Button
                className="w-full hover:scale-105 transition-all ease-in"
                padding="18px"
                onClick={handleSubmit}
              >
                Proceed
              </Button>
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default ForgotPassword;
