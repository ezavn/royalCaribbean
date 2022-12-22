import React from "react";
import { usePopup } from "../../contexts/popupContext";

export default function PopupDay4() {
  const { showDayFour, setShowDayFour } = usePopup();
  return (
    <>
      {showDayFour ? (
        <div className="overlay-days">
          <div className="md:mx-0 max-w-[560px] w-full relative mb-[50px] top-[20px] left-[50%] translate-x-[-50%]">
            <div className="bg-popupYellow p-[16px] flex items-baseline gap-[30px] justify-between">
              <p className="text-[12px] md:text-[15px] font-bold text-white">
                NGÀY 4: TỰ DO TRÊN DU THUYỀN HIỆN ĐẠI NHẤT THẾ GIỚI
              </p>
              <span
                onClick={() => setShowDayFour(false)}
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
                    src="/images/day4.png"
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
                        TỰ DO TRÊN DU THUYỀN HIỆN ĐẠI NHẤT THẾ GIỚI
                      </p>
                      <p className="text-[12px] italic">
                        (Ăn 3 bữa trên du thuyền)
                      </p>
                    </div>
                  </div>
                  <ol className="text-grey3F text-[12px] md:text-[16px] text-justify">
                    <li className="md:pb-[16px] md:mb-[16px] pb-[12px] mb-[12px] border-b-[3px] border-dotted border-[#f1f1f1]">
                      Những hoạt động vui chơi, giải trí là những trải nghiệm
                      khó quên cho chuyến hải trình của bạn:
                    </li>
                    <li className="md:pb-[16px] md:mb-[16px] pb-[12px] mb-[12px] border-b-[3px] border-dotted border-[#f1f1f1]">
                      <span className="font-bold">
                        Đài quan sát “Sao Bắc Đẩu”:
                      </span>{" "}
                      Với hệ thống cabin nối với cần trục, bạn sẽ được di chuyển
                      lên độ cao hơn 90m so với mực nước biển. Như một cánh chim
                      hải âu lướt nhẹ 360 độ trên biển, ngắm nhìn toàn cảnh đại
                      dương xanh vĩ đại và ngoạn mục, bạn sẽ tr ở thành một nhà
                      thám hiểm thực thụ đang chinh phục biển xanh rộng lớn.
                    </li>
                    <li className="md:pb-[16px] md:mb-[16px] pb-[12px] mb-[12px] border-b-[3px] border-dotted border-[#f1f1f1]">
                      <span className="font-bold">
                        Bay lên cùng Ripcord by iFly:
                      </span>{" "}
                      Nếu như “Sao Bắc Đẩu” chỉ như cánh chim hải âu lướt nhẹ
                      trên mặt biển thì Ripcord by iFly với tính năng bay an
                      toàn sẽ nâng bạn bay lên không trung, cảm giác như một chú
                      đại bàng biển đầy dũng mãnh. Hãy sẵn sàng thử cảm giác
                      tuyệt vời khi được ngọn gió biển thổi vào người, rồi vút
                      bay lơ lửng trên không trung đầy tự do.
                    </li>
                    <li className="md:pb-[16px] md:mb-[16px] pb-[12px] mb-[12px] border-b-[3px] border-dotted border-[#f1f1f1]">
                      <span className="font-bold">
                        Phòng phức hợp cực lớn Two70°:
                      </span>{" "}
                      Một điểm đáng chú ý, với tầm nhìn 270° đẹp ngoạn mục hướng
                      ra đại dương. Ban ngày, ánh sáng mặt trời sẽ rọi vào sáng
                      bừng cả căn phòng, khiến cho không gian thoáng đãng. Buổi
                      tối, những cửa sổ tại Two70 ° biến thành màn hình trình
                      chiếu cỡ lớn, kết hợp với hệ thống âm thanh ánh sáng trở
                      thành một sân khấu hoành tráng phục vụ nhu cầu giải trí
                      của du khách.
                    </li>
                    <li>Nghỉ đêm trên du thuyền.</li>
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
