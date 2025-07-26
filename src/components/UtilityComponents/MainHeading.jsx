import React from "react";

export default function MainHeading({ heading }) {
  return (
    <h2
      className="1400:text-[110px] 1400:leading-[110px] 1080:text-[94px] 1080:leading-[94px] 810:text-[86px] 810:leading-[86px] text-tertiary-text 1080:text-start text-center text-[52px] leading-[52px] font-bold uppercase"
      dangerouslySetInnerHTML={{ __html: heading || "" }}
    ></h2>
  );
}
