import React from "react";
import Heading from "./common/Heading";
import { usePopup } from "../contexts/popupContext";

export default function Why() {
  const { setShowVideo } = usePopup();
  return (
    <section id="intro">
      <div className="page-container py-sectionMB md:py-section">
        <Heading
          className="mb-[20px] md:mb-[50px]"
          sup="TẠI SAO NÊN LỰA CHỌN"
          center
        >
          SPECTRUM OF THE SEAS?
        </Heading>
        <div className="flex md:flex-row flex-col items-start gap-[25px] md:gap-[30px]">
          <div className="flex-1">
            <p className="text-[16px] md:text-[18px] text-lightBlue2 mb-[10px] md:mb-[20px]">
              About Spectrum of the Seas
            </p>
            <p className="text-[32px] md:text-[48px] font-bold text-blue uppercase leading-[1]">
              Spectrum{" "}
              <span className="text-[18px] md:text-[32px] italic">of the</span>{" "}
              Seas
            </p>
            <p className="font-medium text-[#3f3f3f] text-[18px] md:text-[20px] leading-[1.2] mb-[15px] md:mb-[30px]">
              thuộc hãng{" "}
              <span className="text-[32px] md:text-[48px] font-bold text-yellow">
                Royal Carribean
              </span>{" "}
              thương hiệu tàu biển lớn nhất thế giới
            </p>
            <ol>
              <li className="font-light text-grey mb-[15px] md:mb-[30px]">
                Siêu du thuyền{" "}
                <span className="font-bold">Spectrum of the Seas</span> thuộc
                dòng <span className="font-bold">Quantum Ultra Class</span> của{" "}
                <span className="font-bold">Royal Caribbean</span>, lần đầu tiên
                được thiết kế hướng đến khách hàng Châu Á.
              </li>
              <li className="font-light text-grey mb-[15px] md:mb-[30px]">
                <span className="font-bold">Spectrum of the Seas</span> là hiện
                thân cuộc sống thượng lưu, được ví như một thành phố nổi hiện
                đại và nguy nga trên biển với quy mô đồ sộ cùng những dịch vụ
                tiện ích đẳng cấp và giải trí đỉnh cao.
              </li>
            </ol>
            <div className="flex gap-[8px]">
              <div>
                <img srcSet="/images/why1.png 2x" alt="" />
              </div>
              <div>
                <img srcSet="/images/why2.png 2x" alt="" />
              </div>
              <div>
                <img srcSet="/images/why3.png 2x" alt="" />
              </div>
              <div>
                <img srcSet="/images/why4.png 2x" alt="" />
              </div>
              <div>
                <img srcSet="/images/why5.png 2x" alt="" />
              </div>
            </div>
          </div>
          <div className="relative md:w-[590px] md:h-[590px] flex-shrink-0">
            <img
              className="object-cover w-full h-full"
              src="/images/video-bg.png"
              alt=""
            />
            <div onClick={() => setShowVideo(true)}>
              <img
                className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer"
                srcSet="/icons/video-icon.png 2x"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
