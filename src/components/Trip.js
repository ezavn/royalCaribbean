import React from "react";
import { usePopup } from "../contexts/popupContext";

export default function Trip() {
  const {
    setShowDayOne,
    setShowDayTwo,
    setShowDayThree,
    setShowDayFour,
    setShowDayFive,
  } = usePopup();
  return (
    <section
      id="trip"
      className="md:mb-[54px] bg-[url('../public/images/trip-bg.png')] bg-center bg-no-repeat bg-cover md:pt-section pt-sectionMB pb-sectionMB lg:pb-0"
    >
      <div className="page-container flex md:flex-row flex-col items-center pb-[30px] md:pb-[105px] justify-center">
        <div className="text-center">
          <div className="text-[24px] md:text-[36px] font-medium text-white leading-[1.2]">
            HÀNH TRÌNH
          </div>
          <div>
            <img src="/images/5days.png" alt="" />
          </div>
        </div>
        <div className="hidden md:block px-[45px]">
          <img src="/icons/line.png" alt="" />
        </div>
        <div>
          <p className="mt-[15px] md:mt-0 text-center md:text-left text-[24px] md:text-[36px] font-semibold text-white">
            <span className="text-pink">Singapore</span> –{" "}
            <span className="text-[#E16C37]">Penang</span> –{" "}
            <span className="text-[#82CCEF]">Phuket</span>
          </p>
          <p className="text-[16px] md:text-[20px] font-medium text-white">
            Dự kiến khởi hành:{" "}
            <span className="text-[24px] md:text-[32px] font-semibold text-orange">
              Thứ Năm Hàng Tuần
            </span>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-[10px] px-[10px]">
        <TripItem
          img="/images/trip1.png"
          day="ngày 1"
          sup="(Ăn trưa và tối trên du thuyền)"
          green
          onClick={() => setShowDayOne(true)}
        >
          TP.HCM – SINGAPORE – DU THUYỀN
        </TripItem>
        <TripItem
          onClick={() => setShowDayTwo(true)}
          img="/images/trip2.png"
          day="ngày 2"
          sup="(Ăn ba bữa - theo giờ Malaysia)"
          blue
        >
          PENANG (MALAYSIA)
        </TripItem>
        <TripItem
          img="/images/trip3.png"
          day="ngày 3"
          sup="(Ăn trưa - theo giờ Thái Lan)"
          purple
          onClick={() => setShowDayThree(true)}
        >
          PHUKET (THAILAND)
        </TripItem>
        <TripItem
          onClick={() => setShowDayFour(true)}
          img="/images/trip4.png"
          day="ngày 4"
          sup="(Ăn 3 bữa trên du thuyền)"
          yellow
        >
          TỰ DO TRÊN DU THUYỀN HIỆN ĐẠI NHẤT THẾ GIỚI
        </TripItem>
        <TripItem
          onClick={() => setShowDayFive(true)}
          img="/images/trip5.png"
          day="ngày 5"
          sup="(Ăn trưa và tối trên du thuyền)"
          orange
        >
          SINGAPORE – TP.HCM
        </TripItem>
      </div>
    </section>
  );
}

const TripItem = ({
  day,
  children,
  sup,
  img,
  green,
  blue,
  purple,
  yellow,
  orange,
  onClick,
}) => {
  return (
    <div className="relative">
      <div className="relative">
        <img className="w-full" src={img} alt="" />
        <div
          className={`inline-flex px-[10px] py-[5px] md:p-[10px] font-bold text-white uppercase absolute top-[30px] right-[12px] ${
            green ? "bg-green" : ""
          } ${blue ? "bg-popupBlue" : ""} ${purple ? "bg-purple" : ""} ${
            yellow ? "bg-popupYellow" : ""
          } ${orange ? "bg-orange" : ""}`}
        >
          {day}
        </div>
        <div className="text-white absolute left-[10px] md:left-[20px] top-[65%]">
          <p className="font-bold text-[12px] md:text-[18px]">{children}</p>
          <p className="text-[10px] md:text-[16px] font-light">{sup}</p>
        </div>
      </div>
      <div
        onClick={onClick}
        className={`inline-flex items-center justify-center w-full font-light text-white cursor-pointer h-[30px] md:h-[45px] lg:absolute bottom-[-44px] left-0 z-[5] ${
          green ? "bg-green" : ""
        } ${blue ? "bg-popupBlue" : ""} ${purple ? "bg-purple" : ""} ${
          yellow ? "bg-popupYellow" : ""
        } ${orange ? "bg-orange" : ""}`}
      >
        Xem chi tiết
      </div>
    </div>
  );
};
