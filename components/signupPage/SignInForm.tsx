import React from 'react';
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faUser , faEnvelope , faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const SignInForm = () => {
    return (
        <div className="relative xl:w-1/4 lg:w-1/3 px-3 md:w-1/2 mx-auto pt-60 ">
        <div className="googleLogin rounded-md">
          <div className="flex px-3 justify-between bg-black rounded-md py-3 GoogleLogBtn cursor-pointer hover:bg-opacity-70 ">
            <div>Log in with Google</div>
            <div>
              <FontAwesomeIcon icon={faGoogle} width="40" />
            </div>
          </div>
        </div>
  
        <div className="mt-5 py-6 px-5 bg-gray-200 rounded-md border formSection">
          <Image
            src="/logos/whiteLogo.png"
            width={120}
            height="100"
            alt="exaview logo"
            className="block mx-auto"
          ></Image>
          <p className=" text-lg text-center mt-3">Create your account</p>
          <div className="flex justify-between border-b  border-gray-400 py-1  my-4">
            <input className="bg-transparent outline-none" placeholder="Full Name"/>
            <FontAwesomeIcon icon={faUser} width="40" />
          </div>
          <div className="flex justify-between border-b  border-gray-400 py-1  my-4">
            <input className="bg-transparent outline-none" placeholder="Email"/>
            <FontAwesomeIcon icon={faEnvelope} width="40" />
          </div>
          <div className="flex justify-between border-b  border-gray-400 py-1  my-4">
            <input className="bg-transparent outline-none" placeholder="Password"/>
            <FontAwesomeIcon icon={faLock} width="40" />
          </div>
          <div className="text-xs text-right">dont have an accont? <Link href="/singup" className="text-primColor underline">Sign In</Link></div>
          <div className="flex justify-between  py-1  mt-8">
           <button className="btn-yellow w-full font-semibold"> Sign Up</button>
          </div>
        </div>
      </div>
    );
};

export default SignInForm;