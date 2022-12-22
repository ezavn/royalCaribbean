import React from "react";

export default function Relax() {
  return (
    <section className="relax md:bg-[url('../public/images/relax-bg.png')] bg-center bg-no-repeat bg-cover md:py-section py-sectionMB">
      <div className="page-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[8px]">
          <div className="flex flex-col justify-center">
            <p className="text-[18px] md:text-[36px] font-bold text-white">
              GIẢI TRÍ <br />
              <span className="text-[32px] md:text-[48px] leading-[1]">
                ĐẲNG CẤP
              </span>
            </p>
            <p className="font-light text-white">
              Spectrum of the Seas sở hữu vô số hoạt động giải trí thú vị và
              đẳng cấp.
            </p>
          </div>
          <RelaxItem
            img="/images/relax1.png"
            title="Đài quan sát “Sao Bắc Đẩu”"
          ></RelaxItem>
          <RelaxItem
            img="/images/relax2.png"
            title="Ripcord by iFly"
          ></RelaxItem>
          <RelaxItem
            img="/images/relax3.png"
            title="Lướt sóng Flow Rider"
          ></RelaxItem>
          <RelaxItem
            img="/images/relax4.png"
            title="Phòng phức hợp cực lớn Two70°"
          ></RelaxItem>
          <RelaxItem
            img="/images/relax5.png"
            title="Bumper cars - Xe điện đụng"
          ></RelaxItem>
          <RelaxItem
            img="/images/relax6.png"
            title="Leo núi nhân tạo"
          ></RelaxItem>
          <RelaxItem img="/images/relax7.png" title="Star Moment"></RelaxItem>
        </div>
      </div>
    </section>
  );
}

const RelaxItem = ({ title, img }) => {
  return (
    <div className="relax-item relative border-[6px] border-[rgba(255,255,255,0.1)]">
      <div className="overlay"></div>
      <div className="overlay2"></div>
      <img className="img" src={img} alt="" />
      <div className="absolute bottom-[10px] md:bottom-[20px] left-[15px]">
        <div className="flex gap-[5px] md:mb-[10px]">
          <span>
            <img srcSet="/icons/star-icon.png 2x" alt="" />
          </span>
          <span>
            <img srcSet="/icons/star-icon.png 2x" alt="" />
          </span>
          <span>
            <img srcSet="/icons/star-icon.png 2x" alt="" />
          </span>
          <span>
            <img srcSet="/icons/star-icon.png 2x" alt="" />
          </span>
          <span>
            <img srcSet="/icons/star-icon.png 2x" alt="" />
          </span>
        </div>
        <p className="relative z-[20] text-[14px] md:text-[18px] font-bold text-white">
          {title}
        </p>
      </div>
    </div>
  );
};
