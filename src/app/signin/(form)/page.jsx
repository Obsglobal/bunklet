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
      <div className="flex flex-col justify-center items-center md:items-start md:justify-start w-5/6 md:mt-20">
      <Link href="/" className=" absolute top-10 left-10">
          <Image
            width={100}
            height={100}
            src="/obsglobal.png"
            className="md:w-[100px] w-[80px]"
            alt="logo"
          />
        </Link>
        <div className="flex flex-col h-[70vh] md:mt-10 justify-center space-y-6 md:w-1/2 w-5/6 items-start">
          <form onClick={handleSubmit} className="w-full">
            <div className="md:px-10">
              <h1 className="text-center md:text-xl font-semibold">Sign In</h1>
              <div className="flex flex-col">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="lg:text-base text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@email.com"
                    className="text-[#777272] text-sm lg:text-base font-medium outline-none border-2 border-[#bebbbb] py-2 px-3"
                    onChange={handleForm}
                  />
                  <span className="text-sm text-[#e62e2e]">
                    {errorState.emailError}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="password" className="lg:text-base text-sm">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter password"
                    className="text-[#777272] text-sm lg:text-base font-medium outline-none border-2 border-[#bebbbb] py-2 px-3"
                    onChange={handleForm}
                  />
                  <span className="text-sm text-[#e62e2e]">
                    {errorState.passwordError}
                  </span>
                </div>
                <div className="ml-auto">
                  <Link
                    href="/signin/forgot-password"
                    className="text-lightblue text-sm lg:text-base my-1"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <Button
                  className="w-full hover:scale-105 flex justify-center transition-all ease-in"
                  padding="10px"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? (
                    <Image
                      width={25}
                      height={25}
                      src={spinner}
                      alt="loading"
                      className="w-[25px]"
                    />
                  ) : (
                    <span>Sign in</span>
                  )}
                </Button>
                <Button onClick={handleSubmit} className=""></Button>
                <span className="text-center text-sm lg:text-base  my-1">
                  You don&apos;t have an account?{" "}
                  <Link href="/signup" className="text-lightblue">
                    Sign up
                  </Link>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default SigninForm;
