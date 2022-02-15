import React from "react";
import { Link } from "react-router-dom";

const PrimaryLinks = ({ LinkIcon, LinkText, Linkpath }) => {
  return (
    <>
      <li className="flex text-left mt-4 lg:mt-0 lg:mr-5">
        <Link to={Linkpath} className="cursor-pointer">
          <div className="flex">
            <img
              src={LinkIcon}
              className="w-5 min-w-[20px] mb-1 mr-1"
              alt="icons"
            />

            <span className="text-lg text-pry-clr primary-nav">{LinkText}</span>
          </div>
        </Link>
      </li>
    </>
  );
};

export default PrimaryLinks;
