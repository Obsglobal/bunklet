"use client";
import React, { useState } from "react";
import Container from "../layout";
import { Button } from "@/components/ui";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { spinner } from "@/constants/images";
import Image from "next/image";

const SigninForm = () => {
  const [loading, setLoading] = useState(false);
  const { push } = useRouter();
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  const [errorState, setErrorState] = useState({
    emailError: "",
    passwordError: "",
  });

  const validate = () => {
    let isError = false;
    const errors = {
      emailError: "",
      passwordError: "",
    };
    if (!details.email) {
      isError = true;
      errors.emailError = "Please enter your email";
    }
    if (!details.password) {
      isError = true;
      errors.passwordError = "Please enter a valid password";
    }

    setErrorState({ ...errorState, ...errors });
    return isError;
  };

  const handleForm = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validate();

    if (!error) {
      setLoading(true);
      try {
        // Make the API request here
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/accounts/sign-in/`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(details),
          }
        );

        if (response.ok) {
          // Handle successful form submission
          setLoading(false);
          push("/");
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
      <div className="flex flex-col h-[70vh] justify-center md:px-20 space-y-6 md:w-1/2 w-5/6 items-start">
        <form onClick={handleSubmit} className="w-full">
          <div className="md:px-10">
            <h1 className="text-center md:text-xl font-semibold">Sign In</h1>
            <div className="flex flex-col">
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="md:text-base">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example@email.com"
                  className="text-[#777272] text-sm font-medium outline-none border-2 border-[#bebbbb] py-4 px-3"
                  onChange={handleForm}
                />
                <span className="text-sm text-[#e62e2e]">
                  {errorState.emailError}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="password" className="md:text-base">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter password"
                  className="text-[#777272] text-sm font-mmedium outline-none border-2 border-[#bebbbb] py-4 px-3"
                  onChange={handleForm}
                />
                <span className="text-sm text-[#e62e2e]">
                  {errorState.passwordError}
                </span>
              </div>
              <div className="ml-auto">
                <Link
                  href="/signin/forgot-password"
                  className="text-lightblue text-sm my-1"
                >
                  Forgot Password?
                </Link>
              </div>
              <Button
                className="w-full hover:scale-105 flex justify-center transition-all ease-in"
                padding="18px"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <Image width={25} height={25} src={spinner} alt="loading" className="w-[25px]" />
                ) : (
                  <span>Sign up</span>
                )}
              </Button>
              <Button onClick={handleSubmit} className=""></Button>
              <span className="text-center text-sm my-1">
                You don&apos;t have an account?{" "}
                <Link href="/signup" className="text-lightblue">
                  Sign up
                </Link>
              </span>
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default SigninForm;
