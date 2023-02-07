/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { usePopup } from "../../contexts/popupContext";

export default function PopupLuxury2() {
  const { showLuxuryTwo, setShowLuxuryTwo } = usePopup();
  return (
    <>
      {showLuxuryTwo ? (
        <div className="overlay-luxury">
          <div className="pt-[50px] md:pt-[16px] pb-[100px] px-[0] md:px-[70px] lg:px-[180px]">
            <div
              className="absolute top-[16px] left-[15px] md:left-[40px] z-[10] cursor-pointer"
              onClick={() => setShowLuxuryTwo(false)}
            >
              <img srcSet="/icons/close-popup.svg 3x" alt="" />
            </div>
            <div className="bg-white rounded-md py-[20px] pb-[50px] px-[16px]">
              <h3 className="mb-[10px] font-semibold text-black text-[18px]">
                Phòng Ocean View
              </h3>
              <div className="flex flex-col items-center justify-center mb-[20px]">
                <iframe
                  width="853"
                  height="480"
                  className="room-video"
                  src="https://www.nuvo360.com/3d-model/navigator-of-the-seas-ocean-view/fullscreen/?embedded"
                  frameBorder="0"
                  allow="vr"
                  allowFullScreen="allowfullscreen"
                ></iframe>
              </div>
              <div>
                <p className="max-w-[800px] mx-auto text-justify">
                  Là phòng có cửa sổ nhưng không có ban công, có cửa sổ nhỏ
                  hướng ra biển, được thiết kế cho 2 người.
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
