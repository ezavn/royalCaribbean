import React, { useEffect, useRef, useState } from "react";

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
          <img srcSet="/images/logo.png 2x" alt="" />
        </a>
        <ul className="md:flex nav">
          <li>
            <a href="#intro">Giới thiệu chung</a>
          </li>
          <li>
            <a href="#trip">Lịch trình Tour</a>
          </li>
          <li>
            <a href="#testi">Ý kiến khách hàng</a>
          </li>
        </ul>
        <div>
          <a
            className="hidden md:inline-flex items-center justify-center h-[50px] px-[38px] bg-pink text-[15px] font-rubik font-light text-white"
            href="#register-form"
          >
            ĐĂNG KÝ NGAY
          </a>
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
            className="inline-block md:hidden w-[20px] h-[20px]"
            onClick={() => setShowNav(false)}
          >
            <img srcSet="/icons/popup-close.png" alt="" />
          </div>
        )}
      </div>
      <div className="progressBar" ref={progressRef}></div>
      {showNav ? (
        <ul className="text-white items-center justify-center p-[10px] flex flex-col md:hidden absolute top-[100%] left-0 right-0 bg-black">
          <li
            onClick={() => setShowNav(false)}
            className="border-b border-dotted w-full text-center pb-[10px] mb-[10px]"
          >
            <a href="#intro">Giới thiệu chung</a>
          </li>
          <li
            onClick={() => setShowNav(false)}
            className="border-b border-dotted w-full text-center pb-[10px] mb-[10px]"
          >
            <a href="#trip">Lịch trình Tour</a>
          </li>
          <li onClick={() => setShowNav(false)}>
            <a href="#testi">Ý kiến khách hàng</a>
          </li>
        </ul>
      ) : (
        ""
      )}
    </header>
  );
}
