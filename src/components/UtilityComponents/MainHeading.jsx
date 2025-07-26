import React from "react";

export default function MainHeading({ heading }) {
  return (
    <h2 className="flex flex-col uppercase font-bold text-[110px] leading-[110px]">
      {heading?.map((item, index) => (
        <span
          key={index}
          className={`${
            index === 0 ? "text-tertiary-text" : "text-secondary-text"
          }`}
        >
          {item}
        </span>
      ))}
    </h2>
  );
}
