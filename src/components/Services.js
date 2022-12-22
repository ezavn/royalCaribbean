import React from "react";
import Heading from "./common/Heading";

export default function Services() {
  return (
    <section className="py-sectionMB md:py-section">
      <div className="page-container">
        <div className="flex md:flex-row flex-col items-center mb-[30px] md:mb-[60px]">
          <div className="flex-1">
            <Heading
              sup="DICH VỤ ĂN UỐNG"
              className="mb-[15px] md:mb-[30px] text-center md:text-left"
            >
              PHONG PHÚ, <br className="hide-mb" />
              ĐỘC ĐÁO
            </Heading>
            <p className="text-[18px] text-justify md:text-left mb-[15px] md:mb-0">
              Ẩm thực tiêu chuẩn quốc tế, đa dạng, phong phú với{" "}
              <br className="hide-mb" /> hơn{" "}
              <span className="font-bold text-purple">25 nhà hàng Á-Âu</span>,
              quán bar và lounge sành điệu, <br className="hide-mb" /> mua sắm
              miễn thuế trên đại dương
            </p>
          </div>
          <div className="max-w-[680px] flex-shrink-0 grid grid-cols-2 gap-[15px]">
            <div className="service-item">
              <img src="/images/service1.png" alt="" />
            </div>
            <div className="service-item">
              <img src="/images/service2.png" alt="" />
            </div>
            <div className="service-item">
              <img src="/images/service3.png" alt="" />
            </div>
            <div className="service-item">
              <img src="/images/service4.png" alt="" />
            </div>
          </div>
        </div>
        <div className="text-center">
          <a
            className="btn-contact inline-flex h-[80px] items-center gap-[22px] px-[30px]"
            href="#register-form"
          >
            <span className="headphone">
              <img srcSet="/icons/headphone-icon.png 2x" alt="" />
            </span>
            <span className="text-[18px] md:text-[24px] font-bold text-white">
              NHẬN TƯ VẤN NGAY
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
