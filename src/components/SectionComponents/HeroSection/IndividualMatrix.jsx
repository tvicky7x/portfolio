import React from "react";

function IndividualMatrix({ matrix }) {
  return (
    <div className="flex flex-col text-center lg:text-start">
      <p className="text-tertiary-text text-[50px] leading-[120%] font-semibold tracking-[-0.7px] md:text-[60px] lg:text-[70px]">
        +{matrix?.matrix}
      </p>
      <p
        className="text-sm leading-[19.2px] tracking-[-0.16px] uppercase md:text-base"
        dangerouslySetInnerHTML={{ __html: matrix?.para }}
      ></p>
    </div>
  );
}

export default IndividualMatrix;
