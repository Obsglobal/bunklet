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
          toast.success("Successfully signed up, please verify your email to sign in");
          push("/signin");
          setLoading(false);
        } else {
          toast.error("Failed to sign up");
          console.error("API request failed:", response);
        }
      } catch (error) {
        toast.error("Failed to sign up");
      }
    }
  };

  return (
    <Container>
      <div className="flex flex-col justify-center items-center md:items-start md:justify-start w-full lg:w-5/6">
        <Link href="/" className="uppercase text-[#2D419F] text-2xl font-bold absolute top-10 left-10">
          Bunklet
       
        </Link>
        <div className="flex flex-col h-[120vh] md:mt-10 justify-center space-y-6 md:w-1/2 w-5/6 items-start">
          <form onSubmit={handleSubmit} className="w-full">
            <div className="md:px-10">
              <h1 className="text-center md:text-xl font-semibold">Sign Up</h1>
              <div className="flex flex-col gap-y-1">
                <div className="flex flex-col gap-2">
                  <label htmlFor="first_name" className="lg:text-base md:text-sm">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    placeholder="Enter your first name"
                    className="text-[#777272] text-base font-medium outline-none border-2 border-[#bebbbb] py-2 px-3"
                    onChange={handleForm}
                  />
                  <span className="text-sm text-[#e62e2e]">
                    {errorState.firstnameError}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="lg:text-base md:text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@email.com"
                    className="text-[#777272] text-base font-medium outline-none border-2 border-[#bebbbb] py-2 px-3"
                    onChange={handleForm}
                  />
                  <span className="text-sm text-[#e62e2e]">
                    {errorState.emailError}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="password" className="lg:text-base md:text-sm">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter password"
                    className="text-[#777272] text-base font-medium outline-none border-2 border-[#bebbbb] py-2 px-3"
                    onChange={handleForm}
                  />
                  <span className="text-sm text-[#e62e2e]">
                    {errorState.passwordError}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="confrimpassword" className="lg:text-base md:text-sm">
                    Confirm password
                  </label>
                  <input
                    type="password"
                    id="confirmpassword"
                    name="confirmpassword"
                    placeholder="Confirm password"
                    className="text-[#777272] text-base font-medium outline-none border-2 border-[#bebbbb] py-2 px-3"
                    onChange={handleConfimPassword}
                  />{" "}
                  <span className="text-sm text-[#e62e2e]">
                    {errorState.confirmpasswordError}
                  </span>
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
                    <span>Sign up</span>
                  )}
                </Button>
                <span className="text-center text-sm">
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
