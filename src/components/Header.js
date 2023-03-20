import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";

export default function Header() {
  const headerRef = useRef(null);
  const progressRef = useRef(null);
  const [showNav, setShowNav] = useState(false);
  useEffect(() => {
    let headerHeight = 0;
    const changeHeaderBG = () => {
      let scrollY = window.pageYOffset;
      headerHeight = headerRef.current.offsetHeight;
      if (scrollY > headerHeight) {
        headerRef.current.classList.add("active");
      } else {
        headerRef.current.classList.remove("active");
      }
    };
    const growProgress = () => {
      let scrollY = window.pageYOffset;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      progressRef.current.style.width = (scrollY / height) * 100 + "%";
    };
    document.addEventListener("scroll", changeHeaderBG);
    document.addEventListener("scroll", growProgress);
    return () => {
      document.removeEventListener("scroll", changeHeaderBG);
      document.removeEventListener("scroll", growProgress);
    };
  }, []);
  return (
    <header
      ref={headerRef}
      className="fixed top-0 right-0 left-0 z-[99] bg-transparent"
    >
      <div className="page-container py-[15px] flex items-center justify-between">
        <a href="/">
          <img
            className="w-[230px] h-[55px]"
            srcSet="/images/spectrum-logo.png 2x"
            alt=""
          />
        </a>
        <ul className="lg:flex nav">
          <li className="cursor-pointer">
            <Link
              to="intro"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              Giới thiệu chung
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              to="trip"
              spy={true}
              smooth={true}
              offset={-85}
              duration={500}
            >
              Lịch trình Tour
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              to="testi"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Ý kiến khách hàng
            </Link>
          </li>
        </ul>
        <div>
          <Link
            to="register-form"
            spy={true}
            smooth={true}
            offset={-80}
            duration={700}
            className="hidden lg:inline-flex items-center justify-center h-[50px] px-[38px] bg-pink text-[15px] font-rubik font-light text-white"
            href="#register-form"
          >
            ĐĂNG KÝ NGAY
          </Link>
        </div>
        {!showNav ? (
          <div
            className="inline-block md:hidden w-[30px] h-[30px]"
            onClick={() => setShowNav(true)}
          >
            <img srcSet="/icons/hamburger-icon.png 2x" alt="" />
          </div>
        ) : (
          <div
            className="inline-block lg:hidden w-[20px] h-[20px]"
            onClick={() => setShowNav(false)}
          >
            <img srcSet="/icons/popup-close.png" alt="" />
          </div>
        )}
      </div>
      <div className="progressBar" ref={progressRef}></div>
      {showNav ? (
        <ul className="text-white items-center justify-center p-[10px] flex flex-col lg:hidden absolute top-[100%] left-0 right-0 bg-black">
          <li className="border-b border-dotted w-full text-center pb-[10px] mb-[10px]">
            <Link
              to="intro"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={() => setShowNav(false)}
            >
              Giới thiệu chung
            </Link>
          </li>
          <li className="border-b border-dotted w-full text-center pb-[10px] mb-[10px]">
            <Link
              to="trip"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              onClick={() => setShowNav(false)}
            >
              Lịch trình Tour
            </Link>
          </li>
          <li onClick={() => setShowNav(false)}>
            <Link
              to="testi"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={() => setShowNav(false)}
            >
              Ý kiến khách hàng
            </Link>
          </li>
        </ul>
      ) : (
        ""
      )}
    </header>
  );
}
