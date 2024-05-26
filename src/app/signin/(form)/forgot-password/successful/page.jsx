import React from "react";

const ResetSuccessful = () => {
  return (
    <div className="flex flex-col h-screen justify-center md:px-20 space-y-6 md:w-1/2 w-5/6 items-start">
      <div className="flex flex-col items-center gap-2">
        <h1 className="font-semibold text-xl md:text-2xl">Reset Successful</h1>
        <span className="md:text-[20px] font-medium  text-center">
          A link has been sent to your email address, follow the instruction to
          reset your new password
        </span>
      </div>
    </div>
  );
};

export default ResetSuccessful;
