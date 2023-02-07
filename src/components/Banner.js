import React from "react";

export default function Banner() {
  return (
    <section className="bg-[url('../public/images/banner.png')] bg-center bg-no-repeat bg-cover h-[100vh] md:pt-[100px] pt-[100px]">
      <div className="flex flex-col items-start justify-center page-container">
        <p className="md:mt-[20px] text-[20px] md:text-[30px] font-medium uppercase text-center text-white leading-[1]">
          hải trình
        </p>
        <h2>
          <img
            className="h-[100px] md:h-auto"
            srcSet="/images/heading.png 2x"
            alt=""
          />
        </h2>
        <h3 className="text-white tracking-[1px] mb-[10px]">
          <span className="font-light text-[14px] md:text-[24px] italic block">
            Trải nghiệm nghỉ dưỡng sang trọng
          </span>
          <span className="text-[15px] md:text-[30px] font-medium uppercase">
            Siêu du thuyền hiện đại nhất thế giới
          </span>
        </h3>
        <h3 className="font-bold text-[32px] md:text-[64px] text-white tracking-[1px] mb-[10px] md:mb-[20px] leading-[1]">
          SPECTRUM{" "}
          <span className="italic text-[18px] md:text-[36px]">OF THE</span> SEAS
        </h3>
        <div className="mt-[30px] md:mt-0 flex flex-col-reverse md:flex-row items-center gap-[30px] md:gap-[38px] mb-[50px]">
          <div className="flex items-center gap-[20px]">
            <div className="banner-item">
              <img srcSet="/images/sin.png 2x" alt="" />
              <div className="content bg-green">Singapore</div>
            </div>
            <div className="banner-item">
              <img srcSet="/images/penang.png 2x" alt="" />
              <div className="content bg-popupBlue">Penang</div>
            </div>
            <div className="banner-item">
              <img srcSet="/images/phuket.png 2x" alt="" />
              <div className="content bg-purple">Phuket</div>
            </div>
          </div>
          {/* <div className="tracking-[1px] self-start">
            <p className="text-left md:text-center text-[16px] md:text-[24px] text-white">
              Dự kiến khởi hành
            </p>
            <p className="text-left md:text-center text-[32px] md:text-[40px] font-bold text-[#78FFFF] leading-[1]">
              30/03/2023
            </p>
          </div> */}
        </div>
        <div className="relative btn-banner ml-[15px]">
          <div className="circle absolute top-[-16px] left-[-16px] w-[56px] h-[56px] bg-[#0791BE] rounded-full"></div>
          <a
            className="relative z-[5] inline-flex items-center gap-[14px]"
            href="#register-form"
          >
            <span className="font-light tracking-[4px] text-white font-rubik">
              ĐĂNG KÝ NGAY
            </span>
            <img srcSet="/icons/arrow-icon.png 2x" alt="" />
          </a>
        </div>
      </div>
    </section>
  );
}
