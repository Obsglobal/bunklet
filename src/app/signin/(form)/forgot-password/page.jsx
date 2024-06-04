"use client";
import React, { useState } from "react";
import Container from "../../layout";
import { Button } from "@/components/ui";
import { useRouter } from "next/navigation";

const ForgotPassword = () => {
  const router = useRouter();
  const [details, setDetails] = useState({
    email: "",
  });
  const [errorState, setErrorState] = useState({
    emailError: "",
  });
  const validate = () => {
    let isError = false;
    const errors = {
      emailError: "",
    };

    if (!details.email) {
      isError = true;
      errors.emailError = "Please enter your email";
    }

    setErrorState({ ...errorState, ...errors });
    return isError;
  };

  const handleForm = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  console.log(details.email);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validate();

    if (!error) {
      try {
        // Make the API request here
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/accounts/sign-in/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(details),
        });

        if (response.ok) {
          // Handle successful form submission
          router.push("/signin/forgot-password/successful");
        } else {
          // Handle API errors
          console.error("API request failed:", response);
        }
      } catch (error) {
        console.error("API request failed:", error);
      }
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
                  name='email'
                  placeholder="example@email.com"
                  className="text-[#777272] font-semibold outline-none border-2 border-[#bebbbb] py-4 px-3"
                  onChange={handleForm}
                />
                <span className="text-sm text-[#e62e2e]">
                  {errorState.emailError}
                </span>
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
