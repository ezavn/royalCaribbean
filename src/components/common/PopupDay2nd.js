import React from "react";
import { usePopup } from "../../contexts/popupContext";

export default function PopupDay2nd() {
  const { showDayTwo2, setShowDayTwo2 } = usePopup();
  return (
    <>
      {showDayTwo2 ? (
        <div className="overlay-days">
          <div className="max-w-[1022px] w-full relative mb-[50px] top-[20px] left-0 md:left-[50%] md:translate-x-[-50%] popup-days --two">
            <div className="bg-popupBlue p-[16px] flex items-center justify-between">
              <p className="text-[12px] md:text-[15px] font-bold text-white">
                NGÀY 2: PENANG (MALAYSIA)
              </p>
              <span
                onClick={() => setShowDayTwo2(false)}
                className="cursor-pointer"
              >
                <img srcSet="/icons/popup-close.png 2x" alt="" />
              </span>
            </div>
            <div>
              <div className="flex p-[18px] bg-[#f1f1f1]">
                <div className="flex-shrink-0 w-[455px] md:block hidden">
                  <img className="w-full" src="/images/day2.png" alt="" />
                </div>
                <div className="bg-white p-[15px] flex-1">
                  <div className="pb-[16px] mb-[16px] flex items-baseline gap-[5px] border-b-[3px] border-dotted border-[#f1f1f1]">
                    <div>
                      <img srcSet="/icons/map-marker.png 2x" alt="" />
                    </div>
                    <div>
                      <p className="text-[12px] md:text-[14px] text-grey3F font-bold">
                        PENANG (MALAYSIA)
                      </p>
                      <p className="text-[12px] italic">
                        (Ăn ba bữa - theo giờ Malaysia)
                      </p>
                    </div>
                  </div>
                  <ol className="text-grey3F text-[12px] md:text-[16px]">
                    <li className="flex items-center gap-[10px] pb-[16px] mb-[16px] border-b-[3px] border-dotted border-[#f1f1f1]">
                      <img srcSet="/icons/eye-icon.png 2x" alt="" />
                      <span className="text-[16px] md:text-[18px] font-bold text-yellow">
                        SÁNG
                      </span>
                    </li>
                    <li className="pl-[20px] pb-[16px] mb-[16px] border-b-[3px] border-dotted border-[#f1f1f1]">
                      Quý khách có thể dậy sớm để ngắm bình minh, hít thở không
                      khí trong lành và thanh bình của đại dương từ tầng 12 của
                      tàu, hoặc cho phép mình ngủ muộn hơn và thức dậy với bữa
                      ăn tại nhà hàng.
                    </li>
                    <li className="flex items-center gap-[10px] pb-[16px] mb-[16px] border-b-[3px] border-dotted border-[#f1f1f1]">
                      <img srcSet="/icons/eye-icon.png 2x" alt="" />
                      <span className="text-[16px] md:text-[18px] font-bold text-popupBlue">
                        CHIỀU
                      </span>
                    </li>
                    <li className="pl-[20px] pb-[16px] mb-[16px] border-b-[3px] border-dotted border-[#f1f1f1]">
                      <p>
                        <span className="font-bold">14:30</span> Du thuyền cập
                        <span className="font-bold">
                          {" "}
                          cảng Swetthenham tại Penang, Malaysia
                        </span>{" "}
                        – nơi kết hợp đa dạng văn hóa và tín ngưỡng của nhiều
                        sắc tộc khác nhau do từng là cửa ngõ giao thương của thế
                        giới.
                      </p>
                      <span className="font-bold">15:00</span> Xe đón đoàn tham
                      quan
                      <p>
                        - <span className="font-bold">Đền Kek Lok Si</span>{" "}
                        hoành tráng mà uy nghiêm trên đồi Air Itam hướng mặt ra
                        biển
                      </p>
                      <p>
                        - <span className="font-bold">Phố cổ George Town</span>{" "}
                        - điểm đến được bình chọn là mong đợi nhất tại Penang.{" "}
                      </p>
                      <p>
                        - Tiếp tục hành trình với con đường{" "}
                        <span className="font-bold">Kapitan Keling</span> - con
                        đường hòa thuận - nơi duy nhất trên thế giới tập trung
                        bốn địa điểm tâm linh lâu đời:{" "}
                        <span className="font-bold">
                          nhà thờ Thánh George (Thiên chúa giáo), chùa Quan Âm
                          (Phật giáo), đền Sri Mah Marianmman (Ấn Độ giáo) và
                          thánh đường Kapitan Keling (Hồi giáo).
                        </span>
                      </p>
                      <p>
                        - <span className="font-bold">Street Art</span>, quý
                        khách lưu những hình ảnh vô cùng đáng yêu với những bức
                        ảnh vẽ như thật.
                      </p>
                    </li>
                    <li className="flex items-center gap-[10px] pb-[16px] mb-[16px] border-b-[3px] border-dotted border-[#f1f1f1]">
                      <img srcSet="/icons/eye-icon.png 2x" alt="" />
                      <span className="text-[16px] md:text-[18px] font-bold text-purple">
                        TỐI
                      </span>
                    </li>
                    <li className="pl-[20px]">
                      <p className="mb-[15px]">
                        <span className="font-bold">19:00</span> Đoàn trở lại du
                        thuyền dùng bữa tối.{" "}
                      </p>
                      <p>
                        <span className="font-bold">21:00</span> (giờ Malaysia)
                        du thuyền sẽ rời cảng Penang. Nghỉ đêm trên du thuyền.
                      </p>
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
