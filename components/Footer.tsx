import React from "react";
import logo from "../public/logo-dark.png";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="flex items-center justify-between px-4 ">
        <div className="flex-shrink-0 scale-75">
          <Image
            height={logo.height}
            width={logo.width}
            src={logo}
            alt="logo"
          />
        </div>
        <div className="flex flex-col py-6 space-y-2 text-sm md:space-x-2">
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
          <p>Contact Us</p>
          <p>Careers</p>
        </div>
      </div>
      <p className="text-sm text-center">
        2021 &copy; Soyab Mostofa All Rights Reserved
      </p>
    </>
  );
};

export default Footer;
