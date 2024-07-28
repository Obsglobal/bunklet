"use client";
import React, { useState } from "react";
import Container from "../layout";
import { Button } from "@/components/ui";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAppSelector } from "@/lib/hooks";
import { spinner } from "@/constants/images";
import Image from "next/image";
import { toast } from "react-toastify";

const SignupForm = () => {
  const [loading, setLoading] = useState(false);
  const role = useAppSelector((state) => state.role.role);
  const [confirmPassword, setConfirmPassword] = useState("");
  const { push } = useRouter();
  const [details, setDetails] = useState({
    first_name: "",
    email: "",
    password: "",
    role: role,
  });
  const [errorState, setErrorState] = useState({
    firstnameError: "",
    emailError: "",
    passwordError: "",
    confirmpasswordError: "",
  });
  // console.log(details);
  const handleConfimPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  const validate = () => {
    let isError = false;
    const errors = {
      firstnameError: "",
      emailError: "",
      passwordError: "",
      confirmpasswordError: "",
    };
    if (!details.first_name) {
      isError = true;
      errors.firstnameError = "Please enter your first name";
    }
    if (!details.email) {
      isError = true;
      errors.emailError = "Please enter your email";
    }
    if (!details.password) {
      isError = true;
      errors.passwordError = "Please enter a valid password";
    }
    if (details.password !== confirmPassword) {
      isError = true;
      errors.confirmpasswordError = "Passwords do not match";
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
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/accounts/sign-up/`,
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
          push("/signin");
          setLoading(false);
        } else {
          // Handle API errors
          console.error("API request failed:", response);
        }
      } catch (error) {
        toast.error("API request failed:", error);
      }
    }
  };

  return (
    <Container>
      <div className="flex flex-col relative w-5/6 ">
        <Link href="/" className=" absolute top-10 left-10">
          <Image
            width={100}
            height={100}
            src="/obsglobal.png"
            className="md:w-[100px] w-[80px]"
            alt="logo"
          />
        </Link>
        <div className="flex flex-col h-[120vh] mt-20 justify-center md:px-20 space-y-6 md:w-1/2 w-5/6 items-start">
          <form onSubmit={handleSubmit} className="w-full">
            <div className="md:px-10">
              <h1 className="text-center md:text-xl font-semibold">Sign Up</h1>
              <div className="flex flex-col gap-y-1">
                <div className="flex flex-col gap-2">
                  <label htmlFor="first_name" className="md:text-base">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    placeholder="Enter your first name"
                    className="text-[#777272] text-sm font-semibold outline-none border-2 border-[#bebbbb] py-4 px-3"
                    onChange={handleForm}
                  />
                  <span className="text-sm text-[#e62e2e]">
                    {errorState.firstnameError}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="md:text-base">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@email.com"
                    className="text-[#777272] text-sm font-semibold outline-none border-2 border-[#bebbbb] py-4 px-3"
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
                    className="text-[#777272] text-sm font-semibold outline-none border-2 border-[#bebbbb] py-4 px-3"
                    onChange={handleForm}
                  />
                  <span className="text-sm text-[#e62e2e]">
                    {errorState.passwordError}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="confrimpassword" className="md:text-base">
                    Confirm password
                  </label>
                  <input
                    type="password"
                    id="confirmpassword"
                    name="confirmpassword"
                    placeholder="Confirm password"
                    className="text-[#777272] text-sm font-semibold outline-none border-2 border-[#bebbbb] py-4 px-3"
                    onChange={handleConfimPassword}
                  />{" "}
                  <span className="text-sm text-[#e62e2e]">
                    {errorState.confirmpasswordError}
                  </span>
                </div>

                <Button
                  className="w-full hover:scale-105 flex justify-center transition-all ease-in"
                  padding="18px"
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
                    <span>Sign up</span>
                  )}
                </Button>
                <span className="text-center">
                  Already have an account?{" "}
                  <Link href="/signin" className="text-lightblue">
                    Sign in
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

export default SignupForm;
