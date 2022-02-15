import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth, provider } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";

import { UserLogin, UserSignOut } from "../features/UserSlice";
import { useNavigate } from "react-router-dom";

import Logo from "../assest/images/logo.svg";
import HomeLogo from "../assest/images/home-icon.svg";
import SearchLogo from "../assest/images/search-icon.svg";
import WatchlistLogo from "../assest/images/watchlist-icon.svg";
import OriginalsLogo from "../assest/images/original-icon.svg";
import MoviesLogo from "../assest/images/movie-icon.svg";
import SeriesLogo from "../assest/images/series-icon.svg";
import PrimaryLinks from "./PrimaryLinks";
import { useDispatch, useSelector } from "react-redux";

const Header = (props) => {
  const [Hamburger, setHamburger] = useState(false);

  const onHamburgerClick = () => {
    setHamburger(!Hamburger);
  };
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const name = useSelector((state) => state.user.value.name);

  const photo = useSelector((state) => state.user.value.photo);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        navigate("/home");
      }
    });
  }, [name]);

  const signInWithGoogle = () => {
    if (!name) {
      signInWithPopup(auth, provider)
        .then((result) => {
          console.log(result);
          setUser(result);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      signOut(auth).then(() => {
        dispatch(UserSignOut());
        navigate("/");
      });
    }
  };
  // reducer .
  const setUser = (data) => {
    dispatch(
      UserLogin({
        name: data.displayName,
        email: data.email,
        photo: data.photoURL,
      })
    );
  };
  return (
    <div className="bg-black overflow-hidden fixed w-full top-0 left-0 z-40">
      <div className="container mx-auto  w-full px-8  h-[70px] text-white flex justify-between items-center tracking-widest ">
        <img src={Logo} className="px-8 w-36 " alt="logo" />
        {!name ? (
          <Link to="#" className="px-8">
            <span
              onClick={signInWithGoogle}
              className="border border-[#f9f9f9] bg-[#00000099] py-2 rounded transition hover:bg-white hover:text-black px-6 text-2xl tracking-wider"
            >
              Login
            </span>
          </Link>
        ) : (
          <>
            <nav
              className={` ${
                Hamburger
                  ? " transformtranslate-x-0 block fixed top-[70px] left-0 w-full h-[100vh] bg-[#040714]  z-50 "
                  : "hidden lg:relative lg:top-0 lg:left-0 lg:block  lg:h-auto lg:bg-transparent  lg:mr-auto"
              }`}
            >
              {/* flex flex-nowrap flex-col lg:flex-row justify-center items-center lg:justify-start lg:items-start w-full h-full */}
              <ul className="flex flex-nowrap flex-col  lg:mt-0 lg:flex-row justify-center items-center lg:justify-start lg:items-start w-full h-full">
                <PrimaryLinks
                  LinkIcon={HomeLogo}
                  LinkText="Home"
                  Linkpath="home"
                />
                <PrimaryLinks
                  LinkIcon={SearchLogo}
                  LinkText="Search"
                  Linkpath="search"
                />
                <PrimaryLinks
                  LinkIcon={WatchlistLogo}
                  LinkText="Watchlist"
                  Linkpath="watchlist"
                />
                <PrimaryLinks
                  LinkIcon={OriginalsLogo}
                  LinkText="Originals"
                  Linkpath="orginals"
                />
                <PrimaryLinks
                  LinkIcon={MoviesLogo}
                  LinkText="Movies"
                  Linkpath="movies"
                />
                <PrimaryLinks
                  LinkIcon={SeriesLogo}
                  LinkText="Series"
                  Linkpath="series"
                />
              </ul>
            </nav>
            <div className="flex justify-center items-center">
              <div
                onClick={onHamburgerClick}
                className=" self-center w-5  h-full  flex flex-col justify-center items-center md:block lg:hidden  cursor-pointer z-10 "
              >
                <span
                  className={`w-5 h-0.5 bg-white block  transition transform   ${
                    Hamburger ? "translate-y-1 rotate-45" : ""
                  }`}
                ></span>
                <span
                  className={`w-5 h-0.5 bg-white block mt-0.5 transition transform  ${
                    Hamburger ? "-rotate-45" : ""
                  }`}
                ></span>
              </div>
              <div className="z-50 ml-5 user-profile h-10 w-10 rounded-full lg:h-14 lg:w-14 relative flex group cursor-pointer">
                <img
                  src={photo}
                  className="h-full w-full rounded-full "
                  alt="user"
                />
                <span
                  onClick={signInWithGoogle}
                  className=" bg-[rgba(19,19,19)] px-3 py-1  absolute right-3 top-8 border-[rgba(115,115,115,0.34)] shadow-sm rounded-sm opacity-0 transition duration-500 group-hover:opacity-100 "
                >
                  SignOut
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
