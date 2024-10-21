import React from "react";

const Copyright = () => {
  return (
    <div className="copyright bg-gray-900 flex justify-center items-center ">
      <div className="box  text-white p-10 flex flex-wrap md:flex-row justify-center items-center gap-3 ">
        &#169; 2024 Bokhtier and Sons' Pvt. Ltd.
        <div>|</div>
        <a href="/" className=" hover:underline">
          About Us
        </a>
        <div>|</div>
        <a href="/" className=" hover:underline">
          Work With Us
        </a>
        <div>|</div>
        <a href="/" className=" hover:underline">
          Privacy Policy
        </a>
        <div>|</div>
        <a href="/" className=" hover:underline">
          Terms
        </a>
        <div>|</div>
        <a href="/" className=" hover:underline">
          Vulnerability Discolsure Policy
        </a>
        <div>|</div>
        <a href="/" className=" hover:underline">
          Hall of Fame
        </a>
      </div>
    </div>
  );
};

export default Copyright;
