/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { usePopup } from "../../contexts/popupContext";

export default function PopupLuxury4() {
  const { showLuxuryFour, setShowLuxuryFour } = usePopup();
  return (
    <>
      {showLuxuryFour ? (
        <div className="overlay-luxury">
          <div className="pt-[50px] md:pt-[16px] pb-[100px] px-[0] md:px-[70px] lg:px-[180px]">
            <div
              className="absolute top-[16px] left-[15px] md:left-[40px] z-[10] cursor-pointer"
              onClick={() => setShowLuxuryFour(false)}
            >
              <img srcSet="/icons/close-popup.svg 3x" alt="" />
            </div>
            <div className="bg-white rounded-md py-[20px] pb-[50px] px-[16px]">
              <h3 className="mb-[10px] font-semibold text-black text-[18px]">
                Phòng Suit
              </h3>
              <div className="grid md:grid-cols-2 grid-rows-2 mb-[20px]">
                <div>
                  <img
                    className="object-cover w-full h-full"
                    src="/images/suit1.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="object-cover w-full h-full"
                    src="/images/suit2.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="object-cover w-full h-full"
                    src="/images/suit3.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="object-cover w-full h-full"
                    src="/images/suit4.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <p className="max-w-[800px] mx-auto text-justify">
                  Loại phòng Suite nổi bật với Ultimate Family Suite, được thiết
                  kế 2 tầng với diện tích 256m² đáp ứng nhu cầu sử dụng của 11
                  người, thích hợp cho các gia đình với công viên thu nhỏ cho
                  trẻ em, rạp chiếu phim 3D trong phòng và rất rất nhiều các
                  tiện nghi khác.
                </p>
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
