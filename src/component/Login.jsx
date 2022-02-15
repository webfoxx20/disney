import React from "react";
import ctaLogoOne from "../assest/images/cta-logo-one.svg";
import ctaLogoTwo from "../assest/images/cta-logo-two.png";
import { Link } from "react-router-dom";
// import { ReactComponent as ctaLogoOne } from "../assest/images/cta-logo-one.svg";

// import styled from "styled-components";
// import "./login.css";

const Login = () => {
  return (
    <section className="h-screen flex flex-col text-center bg-Login-background bg-cover ">
      <div className=" min-h-screen flex justify-center items-center w-full mb-[10vw] h-full p-20 mr-auto ml-auto">
        <div className="w-[600px] flex flex-col text-center ">
          <img src={ctaLogoOne} className="mb-3" alt="logo" />

          <Link
            to="#"
            className="px-8 py-3 inline-block text-white uppercase font-semibold  text-lg bg-[#0063e5] rounded hover:bg-[#0483ee] cursor-pointer"
          >
            GET All there
          </Link>
          <p className="text-[#f3f3f3] text-sm mt-5 tracking-widest">
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </p>
          <img src={ctaLogoTwo} className="mt-10" alt="logo" />
        </div>
      </div>
    </section>
  );
};

export default Login;
