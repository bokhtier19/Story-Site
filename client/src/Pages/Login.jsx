import React from "react";
import logo from "../imports/logo.svg";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import {
  FacebookLoginButton,
  GoogleLoginButton
} from "react-social-login-buttons";

const Login = () => {
  return (
    <div className="bg-[#F8F8F8]">
      <div className="join-pratilipi p-2 ml-20">
        <h1 className="text-xl font-bold border-l-[3px] border-red-600 ml-2 pl-2 ">
          Join Pratilipi
        </h1>
      </div>
      <div className="login p-2 m-4 flex gap-5 flex-col justify-center md:flex-row md:w-full md:justify-centre">
        <div className="box flex flex-col items-center gap-8 lg:w-[45%] w-full h-[40%] bg-white p-6 border">
          <div className="logo w-32 h-16">
            <img src={logo} alt="" className="w-full h-full" />
          </div>
          <h1 className="text-lg text-center">
            Sign in to follow your favourite authors,review contents and create
            your own library.
          </h1>
          <div className="buttons w-64 flex flex-col gap-1">
            <FacebookLoginButton />
            <GoogleLoginButton />
          </div>

          <div className="relative flex items-center justify-center">
            <hr className="flex-grow" />
            <span className="absolute bg-white px-2">OR</span>
          </div>

          <input
            type="text"
            placeholder="  Email"
            className="w-full border border-gray-300  p-2 rounded-lg "
          />
        </div>
        <div className="benefit flex flex-col gap-2 items-start p-6 lg:w-[40%] w-full h-[40%] bg-white border ">
          <h1 className="font-bold text-base border-l-[3px] border-red-600 pl-2">
            Benefits of Login
          </h1>
          <ul className="text-sm line-clamp-6">
            <li>
              <CheckBoxIcon className="text-gray-500 mr-2" /> Add stories and
              read anywhere,anytime
            </li>
            <li>
              <CheckBoxIcon className="text-gray-500 mr-2" />
              Write and win prizes
            </li>
            <li>
              <CheckBoxIcon className="text-gray-500 mr-2" />
              Connect with friends and read stories together
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Login;
