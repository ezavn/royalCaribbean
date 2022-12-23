import React from "react";

export default function Gallery() {
  return (
    <section className="mb-[10px]">
      <div className="grid grid-cols-3">
        <div className="gallery-item">
          <img
            className="object-cover w-full h-full"
            src="/images/gallery1.png"
            alt=""
          />
        </div>
        <div className="gallery-item">
          <img
            className="object-cover w-full h-full"
            src="/images/gallery2.png"
            alt=""
          />
        </div>
        <div className="gallery-item">
          <img
            className="object-cover w-full h-full"
            src="/images/gallery3.png"
            alt=""
          />
        </div>
      </div>
      <div className="grid grid-cols-4">
        <div className="gallery-item">
          <img
            className="object-cover w-full h-full"
            src="/images/gallery4.png"
            alt=""
          />
        </div>
        <div className="gallery-item">
          <img
            className="object-cover w-full h-full"
            src="/images/gallery5.png"
            alt=""
          />
        </div>
        <div className="gallery-item">
          <img
            className="object-cover w-full h-full"
            src="/images/gallery6.png"
            alt=""
          />
        </div>
        <div className="gallery-item">
          <img
            className="object-cover w-full h-full"
            src="/images/gallery7.png"
            alt=""
          />
        </div>
        <div className="gallery-item">
          <img
            className="object-cover w-full h-full"
            src="/images/gallery8.png"
            alt=""
          />
        </div>
        <div className="gallery-item">
          <img
            className="object-cover w-full h-full"
            src="/images/gallery9.jpg"
            alt=""
          />
        </div>
        <div className="gallery-item">
          <img
            className="object-cover w-full h-full"
            src="/images/gallery10.jpg"
            alt=""
          />
        </div>
        <div className="gallery-item">
          <img
            className="object-cover w-full h-full"
            src="/images/gallery11.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
