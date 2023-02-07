import React from "react";
import { usePopup } from "../contexts/popupContext";
import Heading from "./common/Heading";

export default function Luxury() {
  const {
    setShowLuxuryOne,
    setShowLuxuryTwo,
    setShowLuxuryThree,
    setShowLuxuryFour,
  } = usePopup();
  return (
    <section className="pt-sectionMB md:pt-0">
      <div>
        <Heading center>NGHỈ DƯỠNG SANG TRỌNG</Heading>
        <p className="mx-[15px] max-w-[725px] md:mx-auto text-justify md:text-center mt-[15px] md:mt-[30px] text-[14px] md:text-[18px] mb-[20px] md:mb-[40px]">
          Phòng nghỉ{" "}
          <span className="font-bold uppercase text-darkOrange">
            đẳng cấp 5 sao
          </span>{" "}
          thượng lưu, quy mô lớn với nhiều hạng phòng khác nhau{" "}
          <br className="hide-mb" /> nổi bật là phòng ngủ tích hợp tiện ích{" "}
          <span className="font-bold text-[#3f3f3f] uppercase">
            Ultimate Family Suite
          </span>{" "}
          và{" "}
          <span className="font-bold text-[#3f3f3f] uppercase">
            Ocean view balcony
          </span>
          .
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4">
          <LuxuryItem
            img="/images/luxury1.png"
            title="PHÒNG INTERIOR"
            onClick={() => setShowLuxuryOne(true)}
          ></LuxuryItem>
          <LuxuryItem
            img="/images/luxury2.png"
            title="PHÒNG OCEAN VIEW"
            onClick={() => setShowLuxuryTwo(true)}
          ></LuxuryItem>
          <LuxuryItem
            img="/images/luxury3.png"
            title="PHÒNG BALCONY"
            onClick={() => setShowLuxuryThree(true)}
          ></LuxuryItem>
          <LuxuryItem
            img="/images/luxury4.png"
            title="PHÒNG SUITE"
            onClick={() => setShowLuxuryFour(true)}
          ></LuxuryItem>
        </div>
      </div>
    </section>
  );
}

const LuxuryItem = ({ img, title, onClick = () => {} }) => {
  return (
    <div onClick={onClick} className="relative cursor-pointer luxury-item">
      <img className="object-cover w-full h-full" src={img} alt="" />
      <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-bold text-[15px] md:text-[24px] text-white w-full text-center">
        {title}
      </p>
    </div>
  );
};
