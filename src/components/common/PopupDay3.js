import React from "react";
import { usePopup } from "../../contexts/popupContext";

export default function PopupDay3() {
  const { showDayThree, setShowDayThree } = usePopup();
  return (
    <>
      {showDayThree ? (
        <div className="overlay-days">
          <div className="max-w-[1022px] w-full relative mb-[50px] top-[20px] left-0 md:left-[50%] md:translate-x-[-50%] popup-days --three">
            <div className="bg-purple p-[16px] flex items-center justify-between">
              <p className="text-[12px] md:text-[15px] font-bold text-white">
                NGÀY 3: PHUKET (THAILAND)
              </p>
              <span
                onClick={() => setShowDayThree(false)}
                className="cursor-pointer"
              >
                <img srcSet="/icons/popup-close.png 2x" alt="" />
              </span>
            </div>
            <div>
              <div className="flex p-[18px] bg-[#f1f1f1]">
                <div className="flex-shrink-0 w-[455px] md:block hidden">
                  <img className="w-full" src="/images/day3.png" alt="" />
                </div>
                <div className="bg-white p-[15px] flex-1">
                  <div className="pb-[16px] mb-[16px] flex items-baseline gap-[5px] border-b-[3px] border-dotted border-[#f1f1f1]">
                    <div>
                      <img srcSet="/icons/map-marker.png 2x" alt="" />
                    </div>
                    <div>
                      <p className="text-[12px] md:text-[14px] text-grey3F font-bold">
                        PHUKET (THAILAND)
                      </p>
                      <p className="text-[12px] italic">
                        (Ăn ba bữa - theo giờ Thái Lan)
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
                      <p>
                        <span className="font-bold">09:00</span> Du thuyền cập
                        cảng <span className="font-bold">Phuket</span>.
                      </p>
                      <p>
                        - <span className="font-bold">Phuket</span> được biết
                        đến là hòn ngọc của xứ sở Chùa Vàng, nằm trong quần thể
                        36 hòn đảo lớn nhỏ. Xe đón đoàn khởi hành khám phá thị
                        trấn Phuket đầy ấn tượng, ngắm những bãi cát trắng quyến
                        rũ trải dài với màu nước biển xanh pha lê.
                      </p>
                      <p>
                        <span className="font-bold">10:00</span> Quý Khách bắt
                        đầu hành trình khám phá Phuket:
                      </p>
                      <p>
                        - <span className="font-bold">Chùa Wat Chalong</span>,
                        dừng chân ở{" "}
                        <span className="font-bold">Wat Chalong</span>, nghe
                        tiếng pháo nổ giòn tan, bạn có cảm giác như đang sống
                        lại ký ức và không khí dịp Tết những năm 90 ở Việt Nam.{" "}
                      </p>
                    </li>
                    <li className="flex items-center gap-[10px] pb-[16px] mb-[16px] border-b-[3px] border-dotted border-[#f1f1f1]">
                      <img srcSet="/icons/eye-icon.png 2x" alt="" />
                      <span className="text-[16px] md:text-[18px] font-bold text-popupBlue">
                        CHIỀU
                      </span>
                    </li>
                    <li className="pl-[20px] pb-[16px] mb-[16px] border-b-[3px] border-dotted border-[#f1f1f1]">
                      <p>
                        <span className="font-bold">12:00</span> Dùng bữa trưa
                        tự do với các món ăn Thái thuần túy.
                      </p>
                      <p>
                        - Tự do mua sắm tại{" "}
                        <span className="font-bold">
                          khu mua sắm Jungceylon, Big C
                        </span>{" "}
                        đa dạng các mặt hàng từ làm đẹp cho đến hàng tiêu dùng
                        với giá rất hấp dẫn.
                      </p>
                      <p>
                        - Tắm biển tại{" "}
                        <span className="font-bold">khu Patong</span>, có thể
                        tham gia các trò chơi biển như Jetski, lướt sóng bằng
                        ván, lặn ngắm San Hô... (Chi phí tự túc). Quý Khách có
                        thể nằm tắm nắng trên bờ cát hoặc chơi đùa với nhau
                        trong làn nước trong veo.
                      </p>
                      <p>
                        - Mua sắm quà lưu niệm và khám phá{" "}
                        <span className="font-bold">khu phố Patong</span> nhộn
                        nhịp.
                      </p>
                      <p>
                        <span className="font-bold">17:00</span> Quý khách quay
                        về tàu.{" "}
                      </p>
                    </li>
                    <li className="flex items-center gap-[10px] pb-[16px] mb-[16px] border-b-[3px] border-dotted border-[#f1f1f1]">
                      <img srcSet="/icons/eye-icon.png 2x" alt="" />
                      <span className="text-[16px] md:text-[18px] font-bold text-purple">
                        TỐI
                      </span>
                    </li>
                    <li className="pl-[20px]">
                      <p>
                        <span className="font-bold">20:00</span> Du thuyền rời
                        cảng Phuket tiếp tục hành trình quay về Singapore. Nghỉ
                        đêm trên du thuyền.
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
