import React from "react";
import { usePopup } from "../../contexts/popupContext";

export default function PopupDay5() {
  const { showDayFive, setShowDayFive } = usePopup();
  return (
    <>
      {showDayFive ? (
        <div className="overlay-days">
          <div className="md:mx-0 max-w-[560px] w-full relative mb-[50px] top-[20px] left-[50%] translate-x-[-50%]">
            <div className="bg-orange p-[16px] flex items-baseline gap-[30px] justify-between">
              <p className="text-[12px] md:text-[15px] font-bold text-white">
                NGÀY 5: SINGAPORE – TP.HCM
              </p>
              <span
                onClick={() => setShowDayFive(false)}
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
                    src="/images/day5.png"
                    alt=""
                  />
                </div>
                <div className="bg-white p-[15px]">
                  <div className="md:pb-[16px] md:mb-[16px] pb-[12px] mb-[12px] flex items-baseline gap-[5px] border-b-[3px] border-dotted border-[#f1f1f1]">
                    <div>
                      <img srcSet="/icons/map-marker.png 2x" alt="" />
                    </div>
                    <div>
                      <p className="text-[12px] md:text-[14px] text-grey3F font-bold">
                        SINGAPORE – TP.HCM
                      </p>
                      <p className="text-[12px] italic">
                        (Ăn sáng, trưa - Theo giờ Singapore)
                      </p>
                    </div>
                  </div>
                  <ol className="text-grey3F text-[12px] md:text-[16px] text-justify">
                    <li className="md:pb-[16px] md:mb-[16px] pb-[12px] mb-[12px] border-b-[3px] border-dotted border-[#f1f1f1]">
                      Quý khách dùng bữa sáng với buffet tự chọn.
                    </li>
                    <li className="md:pb-[16px] md:mb-[16px] pb-[12px] mb-[12px] border-b-[3px] border-dotted border-[#f1f1f1]">
                      <span className="font-bold">7:00</span> Tàu cập cảng
                      Singapore. Quý khách làm thủ tục rời tàu
                    </li>
                    <li className="md:pb-[16px] md:mb-[16px] pb-[12px] mb-[12px] border-b-[3px] border-dotted border-[#f1f1f1]">
                      <p>
                        Xe tiếp tục đón đoàn tham quan đảo quốc Singapore xinh
                        đẹp.
                      </p>
                      <p>
                        + Chụp hình lưu niệm tại{" "}
                        <span className="font-bold">Công viên Sư Tử Biển</span>,
                        là biểu tượng của đảo quốc Singapore, nhà hát Victoria
                        và Toà nhà Quốc Hội, đập nước nhân tạo Marina Barrage.{" "}
                      </p>
                      <p>
                        + Sau ăn trưa, tham quan và chụp hình tại{" "}
                        <span className="font-bold">
                          Khu vườn năng lượng Gardens by the Bay
                        </span>
                        , khu vườn sinh thái đặc biệt với các “siêu cây” năng
                        lượng mặt trời.
                      </p>
                      <p>
                        +{" "}
                        <span className="font-bold">
                          Thác nước Jewel Changi
                        </span>{" "}
                        – địa điểm check in hot nhất Singapore hay còn được biết
                        đến với tên{" "}
                        <span className="font-bold">Rain Vortex</span> là thác
                        nước trong nhà cao nhất thế giới, với độ cao 40m.
                      </p>
                    </li>
                    <li className="md:pb-[16px] md:mb-[16px] pb-[12px] mb-[12px] border-b-[3px] border-dotted border-[#f1f1f1]">
                      Sau đó, đoàn làm thủ tục đáp chuyến bay về Tp.HCM. Kết
                      thúc chương trình trải nghiệm du thuyền Spectrum Of The
                      Seas.
                    </li>
                    <li className="italic font-bold text-red-500">
                      Chia tay và hẹn gặp lại quý khách!
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
