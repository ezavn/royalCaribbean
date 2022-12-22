import React from "react";
import { usePopup } from "../../contexts/popupContext";

export default function PopupDay1() {
  const { showDayOne, setShowDayOne } = usePopup();
  return (
    <>
      {showDayOne ? (
        <div className="overlay-days">
          <div className="max-w-[560px] w-full relative mb-[50px] top-[20px] left-0 md:left-[50%] md:translate-x-[-50%]">
            <div className="bg-green p-[16px] flex items-center justify-between">
              <p className="text-[12px] md:text-[15px] font-bold text-white">
                NGÀY 1: TP.HCM – SINGAPORE – DU THUYỀN
              </p>
              <span
                onClick={() => setShowDayOne(false)}
                className="cursor-pointer"
              >
                <img srcSet="/icons/popup-close.png 2x" alt="" />
              </span>
            </div>
            <div>
              <div className="p-[18px] bg-[#f1f1f1]">
                <div>
                  <img
                    className="w-full max-h-[340px]"
                    src="/images/day1.png"
                    alt=""
                  />
                </div>
                <div className="bg-white p-[15px]">
                  <div className="pb-[16px] mb-[16px] flex items-baseline gap-[5px] border-b-[3px] border-dotted border-[#f1f1f1]">
                    <div>
                      <img srcSet="/icons/map-marker.png 2x" alt="" />
                    </div>
                    <div>
                      <p className="text-[12px] md:text-[14px] text-grey3F font-bold">
                        TP.HCM – SINGAPORE – DU THUYỀN
                      </p>
                      <p className="text-[12px] italic">
                        (Ăn trưa và tối trên du thuyền)
                      </p>
                    </div>
                  </div>
                  <ol className="text-grey3F text-[12px] md:text-[16px]">
                    <li className="pb-[16px] mb-[16px] border-b-[3px] border-dotted border-[#f1f1f1]">
                      Quý khách tập trung tại{" "}
                      <span className="font-bold">
                        cổng D2 ga đi quốc tế - sân bay Tân Sơn Nhất
                      </span>{" "}
                      làm thủ tục trên chuyến bay đi{" "}
                      <span className="font-bold">Singapore.</span>
                    </li>
                    <li className="pb-[16px] mb-[16px] border-b-[3px] border-dotted border-[#f1f1f1]">
                      Đoàn làm thủ tục nhập cảnh, xe đón đoàn ra cảng làm thủ
                      tục lên du thuyền{" "}
                      <span className="font-bold">Spectrum of The Seas.</span>
                    </li>
                    <li className="pb-[16px] mb-[16px] border-b-[3px] border-dotted border-[#f1f1f1]">
                      Quý khách dùng bữa tự chọn trên du thuyền.
                    </li>
                    <li>
                      <span className="font-bold">16:30</span> Du thuyền rời
                      cảng, quý khách bắt đầu hành trình trải nghiệm hải trình
                      đầy màu sắc và thú vị.
                    </li>
                    <li>
                      Buổi tối, đoàn thưởng thức bữa ăn tại nhà hàng trên du
                      thuyền.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
