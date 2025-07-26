import React from "react";

function SubHeading({ heading }) {
  return (
    <h2
      className="text-tertiary-text text-center text-[42px] leading-[100%] font-bold uppercase md:text-[74px] lg:text-start lg:text-[90px] xl:text-[90px]"
      dangerouslySetInnerHTML={{ __html: heading || "" }}
    ></h2>
  );
}

export default SubHeading;
