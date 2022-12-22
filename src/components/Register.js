import React from "react";
import RegisterForm from "./common/RegisterForm";

export default function Register() {
  return (
    <section id="register-form" className="flex md:flex-row flex-col mb-[10px]">
      <div className="bg-darkBlue py-[50px] md:pt-[62px] md:pb-[95px] flex-1 md:block hidden">
        <div className="max-w-[450px] mx-auto">
          <div className="flex items-center justify-center">
            <img src="/images/register-txt1.png" alt="" />
          </div>
          <div className="flex items-center justify-center">
            <img src="/images/register-txt2.png" alt="" />
          </div>
          <p className="text-[20px] text-white text-center mb-[10px]">
            Singapore – Penang – Phuket
          </p>
          <p className="text-[16px] md:text-[20px] font-medium text-white text-center mb-[30px] md:mb-[50px]">
            Trên Siêu du thuyền{" "}
            <span className="uppercase text-lightBlue1">
              hiện đại nhất thế giới
            </span>{" "}
            <br className="hide-mb" />{" "}
            <span className="text-[20px] md:text-[24px] uppercase text-lightBlue1">
              Spectrum
            </span>{" "}
            <span className="text-[16px]">OF THE</span>{" "}
            <span className="text-[20px] md:text-[24px] uppercase text-lightBlue1">
              Seas.
            </span>
          </p>
          <div className="text-center">
            <a
              className="bg-lightBlue2 flex items-center gap-[10px] h-[45px] shadow-[0px_0px_0px_4px_rgba(255,_255,_255,_0.1)] inline-flex px-[20px] btn-register"
              href="#register-form"
            >
              <span className="text-[14px] font-medium text-white">
                ĐĂNG KÝ SỚM ĐỂ NHẬN ƯU ĐÃI
              </span>
              <span>
                <img
                  className="arrow"
                  srcSet="/icons/arrow-icon.png 2x"
                  alt=""
                />
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-[url('../public/images/register-bg.png')] bg-right md:bg-center bg-no-repeat bg-cover py-[55px] flex-1 md:pl-[30px] md:pr-0 px-[15px]">
        <div className="md:mr-[250px]">
          <h3 className="text-[24px] font-bold text-white">
            ĐĂNG KÝ TƯ VẤN THÔNG TIN
          </h3>
          <p className="md:text-darkBlue text-white mb-[30px]">
            Trải nghiệm ngay những dịch vụ đẳng cấp{" "}
            <span className="font-bold">5 sao</span> tại siêu du thuyền của
            <span className="font-bold"> Royal Caribbean</span>. Số lượng và
            thời gian khuyến mãi có hạn.
          </p>
          <div></div>
          <div>
            <RegisterForm></RegisterForm>
          </div>
        </div>
      </div>
    </section>
  );
}
