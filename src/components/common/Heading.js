import React from "react";

export default function Heading({ sup, children, center, className }) {
  return (
    <h2 className={`${center ? "text-center" : ""} ${className}`}>
      {sup ? (
        <span className="block text-[18px] md:text-[36px] font-medium text-grey uppercase">
          {sup}
        </span>
      ) : (
        ""
      )}{" "}
      {children ? (
        <span className="text-[26px] md:text-[48px] font-bold text-orange uppercase leading-[1]">
          {children}
        </span>
      ) : (
        ""
      )}
    </h2>
  );
}
