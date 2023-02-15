import React from "react";
import Image from "next/image";
import SignInForm from "./SignInForm";
const FormContainer2 = () => {
  return (
    <div className="w-full relative h-screen overflow-y-hidden">
      <Image
        src="/images/largeHomebg.png"
        alt="home background"
        className="w-full absolute hidden md:block"
        width={1000}
        height="1000"
      />
      <Image
        src="/images/smHomebg.png"
        alt="home background"
        className="w-full absolute block md:hidden"
        width={1000}
        height="1000"
      />
      <SignInForm/>
    </div>
  );
};

export default FormContainer2;
