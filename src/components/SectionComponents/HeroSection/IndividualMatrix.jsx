import React from "react";

function IndividualMatrix({ matrix }) {
  return (
    <div className="flex flex-col">
      <p className="font-semibold text-[70px] leading-[84px] tracking-[-0.7px] text-tertiary-text ">
        +{matrix?.matrix}
      </p>
      <p
        className="text-base uppercase leading-[19.2px] tracking-[-0.16px]"
        dangerouslySetInnerHTML={{ __html: matrix?.para }}
      ></p>
    </div>
  );
}

export default IndividualMatrix;
