import { useLocation } from "react-router-dom";
import { brainwave } from "../assets";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { navigation } from "../constants";
import { background } from "../assets";
import Button from "./Button";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    setOpenNavigation(false);
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center py-5 px-5 lg:px-7.5 xl:px-10">
        <a
          className="block w-[12rem] xl:mr-8"
          href="#hero"
        >
          <img
            src={brainwave}
            width={190}
            height={40}
            alt="Brainwave"
          />
        </a>
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>
          <div className="absolute inset-0 pointer-events-none lg:hidden">
            <div className="absolute inset-0 opacity-[.03]">
              <img
                className="w-full h-full object-cover"
                src={background}
                width={688}
                height={953}
                alt="Background"
              />
            </div>
          </div>
        </nav>

        <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New account
        </a>
        <Button
          className="hidden lg:flex"
          href="#login"
        >
          Sign in
        </Button>
        <Button
          className="ml-auto lg:hidden"
          onClick={toggleNavigation}
          openNavigation={openNavigation}
        >
          {openNavigation ? (
            <IoClose className="text-2xl" />
          ) : (
            <IoMenu className="text-2xl" />
          )}
        </Button>
      </div>
    </div>
  );
};

export default Header;
