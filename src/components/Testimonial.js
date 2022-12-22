import React from "react";
import Heading from "./common/Heading";
import Slider from "react-slick";

export default function Testimonial() {
  const settings = {
    infinite: true,
    speed: 8000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section id="testi">
      <div className="page-container md:py-section py-sectionMB">
        <Heading className="mb-[10px] md:mb-[20px]" center>
          NHỮNG PHẢN HỒI TÍCH CỰC
        </Heading>
        <p className="font-light text-[#3F3F3F] text-center md:mb-[10px]">
          của khách hàng sau khi trải nghiệm
        </p>
        <div className="text-center mb-[20px] md:mb-[30px]">
          <img
            className="inline-block"
            srcSet="/icons/blackline-icon.png 2x"
            alt=""
          />
        </div>
        <div className="overflow-x-hidden testi-slide">
          <Slider {...settings}>
            <TestiItem img="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </TestiItem>
            <TestiItem img="https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </TestiItem>
            <TestiItem img="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </TestiItem>
            <TestiItem img="https://images.unsplash.com/photo-1624561172888-ac93c696e10c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </TestiItem>
          </Slider>
        </div>
      </div>
    </section>
  );
}

const TestiItem = ({ img, children }) => {
  return (
    <div className="testi-item ml-[20px] mr-[10px] md:mx-[30px]">
      <div className="relative min-h-[168px] py-[20px] md:py-[35px] pl-[40px] md:pl-[48px] pr-[20px] md:pr-[30px] border border-[#f1f1f1]">
        <p className="font-light text-justify text-grey">{children}</p>
        <div className="absolute top-[20px] left-[-20px]">
          <img srcSet="/icons/testi-icon.png 2x" alt="" />
        </div>
      </div>
      <div className="flex items-center mt-[20px] md:mt-[40px]">
        <div className="md:w-[80px] md:h-[80px] w-[50px] h-[50px] rounded-full mr-[15px]">
          <img
            className="object-cover w-full h-full rounded-full"
            src={img}
            alt=""
          />
        </div>
        <ul className="flex items-center gap-[6px]">
          <li>
            <img srcSet="/icons/star-icon.png 2x" alt="" />
          </li>
          <li>
            <img srcSet="/icons/star-icon.png 2x" alt="" />
          </li>
          <li>
            <img srcSet="/icons/star-icon.png 2x" alt="" />
          </li>
          <li>
            <img srcSet="/icons/star-icon.png 2x" alt="" />
          </li>
          <li>
            <img srcSet="/icons/star-icon.png 2x" alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};
