import React from "react";
import { GooglePlayButton, AppGalleryButton } from "react-mobile-app-button";
import CreateIcon from "@mui/icons-material/Create";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import CopyrightOutlinedIcon from "@mui/icons-material/CopyrightOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import EmailIcon from "@mui/icons-material/Email";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { SocialIcon } from "react-social-icons";

const ContactBar = () => {
  return (
    <div className="contactbar flex flex-wrap bg-gray-700 justify-center ">
      <div className="box w-[80%] flex flex-wrap md:flex-row gap-16 p-10 text-white justify-center">
        <div className="applink flex flex-col gap-5 items-start flex-1">
          <div className="heading font-bold">
            <h5>Mobile App </h5>
            <hr className=" w-10 h-0.5 bg-red-500 border-0" />
          </div>

          <GooglePlayButton theme={"dark"} className=" border border-white " />
          <AppGalleryButton theme={"dark"} className="border border-white" />
        </div>
        <div className="help-centre flex flex-col gap-2 flex-1">
          <div className="heading font-bold">
            <h5>Help Centre </h5>
            <hr className="w-10 h-0.5 bg-red-500 border-0" />
          </div>
          <div className="writing flex text-sm font-bold hover:cursor-pointer hover:underline">
            <CreateIcon className="p-0.5" />
            <h5>Writing</h5>
          </div>
          <div className="writing flex text-sm font-bold hover:cursor-pointer hover:underline">
            <AutoStoriesOutlinedIcon className="p-0.5" />
            <h5>Reading</h5>
          </div>
          <div className="writing flex text-sm font-bold  hover:cursor-pointer hover:underline">
            <CopyrightOutlinedIcon className="p-0.5" />
            <h5>Copyright</h5>
          </div>
          <div className="writing flex text-sm font-bold hover:cursor-pointer hover:underline">
            <HelpOutlineOutlinedIcon className="p-0.5" />
            <h5>Genereal</h5>
          </div>
        </div>
        <div className="contact-us text-wrap flex flex-col gap-2 leading-7 flex-1">
          <div className="heading font-bold">
            <h5>Contact Us </h5>
            <hr className=" w-10 h-0.5 bg-red-500 border-0" />
          </div>
          <div className="writing flex text-sm font-bold hover:cursor-pointer hover:underline">
            <EmailIcon className="p-0.5" />
            <h5>English@stories.com</h5>
          </div>
          <div className="writing flex text-sm font-bold">
            <ContactMailIcon className="p-0.5" />
            <p className="text-pretty">
              Bokhtier and Sons' Pvt. Ltd. Bokhtier Villa, 2nd Floor, Lakhipur
              College Nagar Area,Lakhipur , Goalpara , Assam ,783129
            </p>
          </div>
        </div>
        <div className="socials flex-1 ">
          <div className="heading font-bold">
            <>Follow Us on Social Media </>
            <hr className=" w-10 h-0.5 bg-red-500 border-0" />
          </div>

          <div className="icons flex gap-3 p-2 flex-1">
            <SocialIcon url="https://twitter.com" className="" />
            <SocialIcon url="https://youtube.com" className="" />
            <SocialIcon url="https://facebook.com" className="" />
            <SocialIcon url="https://discord.com" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBar;
