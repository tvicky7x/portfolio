import React from "react";

export default function MainHeading({ heading }) {
  return (
    <h1
      className="text-tertiary-text text-center text-[52px] leading-[52px] font-bold uppercase md:text-[86px] md:leading-[86px] lg:text-start lg:text-[94px] lg:leading-[94px] xl:text-[110px] xl:leading-[110px]"
      dangerouslySetInnerHTML={{ __html: heading || "" }}
    ></h1>
  );
}
