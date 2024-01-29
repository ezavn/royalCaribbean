import React from "react";

export default function Footer() {
  return (
    <footer className="bg-darkBlue">
      <div className="page-container py-sectionMB md:py-section">
        <div className="flex flex-col items-start justify-between gap-0 lg:flex-row">
          <div className="w-[100%] flex flex-col items-center mb-[40px] lg:mb-0 lg:block lg:w-auto">
            <div className="mb-[15px] md:mb-[30px]">
              <img
                className="w-[230px] h-[55px]"
                srcSet="/images/spectrum-logo.png 2x"
                alt=""
              />
            </div>
            <ul className="font-light text-white mb-[15px] md:mb-[30px]">
              <li>
                Fanpage:{" "}
                <a href="https://www.facebook.com/royal.caribbean.saigon/">
                  royal.caribbean.saigon
                </a>
              </li>
              <li>
                Email:{" "}
                <a href="mailto:info@goldenstartravel.vn">
                  info@goldenstartravel.vn
                </a>
              </li>
              <li>
                Website:{" "}
                <a href="https://goldenstartravel.vn/">goldenstartravel.vn</a>
              </li>
            </ul>
            <ul className="flex items-center gap-[4px]">
              <li>
                <a
                  className="w-[40px] h-[40px] bg-[rgba(255,255,255,0.15)] flex items-center justify-center"
                  href="https://www.facebook.com/royal.caribbean.saigon/"
                >
                  <img srcSet="/icons/facebook-icon.png 2x" alt="" />
                </a>
              </li>
              <li>
                <a
                  className="w-[40px] h-[40px] bg-[rgba(255,255,255,0.15)] flex items-center justify-center"
                  href="/"
                >
                  <img srcSet="/icons/instagram-icon.png 2x" alt="" />
                </a>
              </li>
              <li>
                <a
                  className="w-[40px] h-[40px] bg-[rgba(255,255,255,0.15)] flex items-center justify-center"
                  href="/"
                >
                  <img srcSet="/icons/in-icon.png 2x" alt="" />
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-auto">
            <h3 className="text-[20px] font-semibold text-white uppercase text-center mb-[15px] md:mb-[40px]">
              Thông tin liên hệ
            </h3>
            <div className="flex md:flex-row flex-col gap-[10px]">
              <div className="py-[18px] flex items-center text-center border border-dashed border-[rgba(241,241,241,0.34)] flex-col px-[10px] min-w-[230px]">
                <div className="mb-[18px]">
                  <img srcSet="/icons/map-icon.png 2x" alt="" />
                </div>
                <p className="font-light text-white">
                  82 Phan Đình Phùng, Phường 2<br/>Quận Phú Nhuận, TP.HCM
                </p>
              </div>
              <div className="py-[18px] flex items-center text-center border border-dashed border-[rgba(241,241,241,0.34)] flex-col px-[10px] min-w-[230px]">
                <div className="mb-[18px]">
                  <img srcSet="/icons/headphone-icon2.png 2x" alt="" />
                </div>
                <br/>
                <p
                  className="inline-block font-light text-white"
                >
                  02835.178.999
                </p>
              </div>
              <div className="py-[18px] flex items-center text-center border border-dashed border-[rgba(241,241,241,0.34)] flex-col px-[10px] min-w-[230px]">
                <div className="mb-[18px]">
                  <img srcSet="/icons/office-icon.png 2x" alt="" />
                </div>
                <p className="font-light text-white">
                  Mr. Huỳnh Di: 0937.19.68.99 <br />
                  Mr. Thịnh: 0931.867.139 <br />
                  Ms. Ly: 0931.288.639
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[rgba(251,251,251,0.07)] py-[17px]">
        <p className="font-light text-center text-white">
          RoyalSaigon. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
