import React from "react";
import Heading from "./common/Heading";

export default function Scale() {
  return (
    <section>
      <div className="page-container pb-sectionMB md:pb-section">
        <Heading center sup="QUY MÔ SPECTRUM OF THE SEAS">
          NHỮNG CON SỐ CỰC KỲ ẤN TƯỢNG
        </Heading>
        <div className="mb-[20px] md:mb-0">
          <img srcSet="/images/scale-boat.png 2x" alt="" />
        </div>
        <div className="scale-list grid grid-cols-3 md:flex items-start md:mx-[120px] justify-between gap-[20px]">
          <div className="scale-item">
            <div className="icon">
              <img srcSet="/icons/scale-icon1.png 2x" alt="" />
            </div>
            <div className="content">
              <p className="num">16</p>
              <p className="desc">TẦNG</p>
            </div>
          </div>
          <div className="scale-item">
            <div className="icon">
              <img srcSet="/icons/scale-icon2.png 2x" alt="" />
            </div>
            <div className="content">
              <p className="num">374m</p>
              <p className="desc">CHIỀU DÀI</p>
            </div>
          </div>
          <div className="scale-item">
            <div className="icon">
              <img srcSet="/icons/scale-icon3.png 2x" alt="" />
            </div>
            <div className="content">
              <p className="num">41m</p>
              <p className="desc">CHIỀU CAO</p>
            </div>
          </div>
          <div className="scale-item-2">
            <div className="icon">
              <img srcSet="/icons/scale-icon4.png 2x" alt="" />
            </div>
            <div className="content">
              <p className="desc">
                SỨC CHỨA <br /> <span className="num">7000</span> <br />
                <span>khách và thủy thủ đoàn</span>
              </p>
            </div>
          </div>
          <div className="scale-item-2">
            <div className="icon">
              <img srcSet="/icons/scale-icon5.png 2x" alt="" />
            </div>
            <div className="content">
              <p className="desc">
                TRỌNG TẢI <br /> <span className="num">169.379</span>{" "}
                <span>Tấn</span>
              </p>
            </div>
          </div>
          <div className="scale-item-2">
            <div className="icon">
              <img srcSet="/icons/scale-icon6.png 2x" alt="" />
            </div>
            <div className="content">
              <p className="desc">
                TỐC ĐỘ <br />
                <span className="num">22</span> <span>hải lý mỗi giờ</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
